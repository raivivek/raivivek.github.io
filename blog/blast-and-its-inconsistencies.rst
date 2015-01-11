.. title: BLAST+ and Its Inconsistencies
.. slug: blast-and-its-inconsistencies
.. date: 2015-01-11 12:03:17 UTC+05:30
.. tags: blast, sequenceserver
.. link:
.. description:
.. type: text
.. author: Vivek Rai

BLAST+ is an amazing tool and does it job in a pretty decent way.  However,
anyone who has worked with it for some time and with some non trivial details
has his own horror stories to tell. For the past few months where I have been
engaged in development of SequenceServer, we got a lot of opportunities to see
the ugly inconsistencies crept within the otherwise beautiful program.

BLAST+ is the newer and improved version of legacy BLAST executables with
improved performance and feature inclusion. It goes through close to two cycles
of release every year and includes further performance patches or fixes
introduced against community bug reports.

.. TEASER_END

I will talk in brief about few problems that we encountered while developing
SequenceServer.

- One of my major tasks with SS was to create a data layer which will be
  helpful in creating flexible interface. This required me to BLAST and obtain the
  results in XML format, parse and store it accordingly.

  One of the curious things to notice in the XML file is the presence of
  ``<Iteration_stat>`` tag within each query. Although if you compare the
  values you will find that each of these stats across all the queries are
  same, and indeed they represent statistical information based on the entire
  query and not per query. You can examine one sample XML file
  `here
  <https://github.com/yannickwurm/sequenceserver/blob/master/spec/ss_sample_blast_with_hits.xml>`_.

- If you examined the XML file, you can notice that the sequence alignments,
  start, and end co-ordinates are all provided very nicely. When using the HTML
  format output option (provided with all BLAST programs) like prior versions
  of SS, we receive a well formatted output where longer sequences are properly
  broken on multiple lines along with start and end coordinates for the same.
  But as we were generating the HTML ourselves, we had to manually calculate
  the start and stop ends for each line.

  In general, the start and end coordinates are agnostic of the reading frame and
  one has to properly infer them from the ``qframe`` and ``hframe`` values. In
  other words, you need to see whether you are moving on the positive strand or
  the negative stand. However, ``blastn`` makes an exception to this rule and
  automatically makes this informed decision. I don't know if that should be the
  scenario but whatever be the case, it certainly is not consistent. This had
  to be taken in care of separately in the commit shown below.

.. code-block:: ruby

  index def28ff..cb236fa 100644
  --- a/lib/sequenceserver/blast.rb
  +++ b/lib/sequenceserver/blast.rb
  @@ -211,6 +211,9 @@ module SequenceServer
                    hsp.qstart.to_s.length, hsp.qend.to_s.length].max

          s = ''
  +        # blastn results are inconsistent with the other methods as it
  +        # automatically reverse the start and end coordinates (based on
  +        # frame), while for others it has to be inferred.
          if @program != 'blastn'
              nqseq = hsp.qframe >= 0 ? hsp.qstart : hsp.qend
              nsseq = hsp.sframe >= 0 ? hsp.sstart : hsp.send

- In an issue [#]_ opened
  by our early contributer `@wwood <https://github.com/wwood>`_, we found that
  FASTA ids with only numbers in it didn't play very well with ``blastdbcmd``.

  The bug since then, went on without activity until recently when we tried to fix it
  using a simple hack. As hits can also be queried using accession number and not only
  ids, we simply started using accession number with a ``lcl|`` added to the start.
  This not only preserved the previous and desired behavior but also solved the problem
  of error with numeric ids (`commit <https://github.com/yannickwurm/sequenceserver/commit/6d83a0833c42ec3a9e944ebc7873603f4a82d774>`_).

  However, soon with the release of BLAST+ 2.2.30 [#]_ we noticed that our hack didn't play
  well with the ``-target-only`` option. Since, our implementation moves according to the
  latest version of BLAST+, we had to revert the commit.

  As of now, the issue is still open and we wait for it to be fixed upstream. Apparently,
  the BLAST+ team is aware of the issue but it seems to be poorly documented.
  Here is what they had to say -

::

  ... but when lcl|integer is used (either directly on the definition line, or when
  only an integer is used), the programs assume that the integer is a gi
  number.We will investigate the feasibility of applying a check.

- Another weird issue popped us when we were playing around with some funky
  ids. These ids contained some symbols and weird characters like hashes and
  pipes. I'm not yet sure if this is an undesired behavior but it is certainly
  queer. Here is a small demo -

::

  $ cat funky_ids.fa
  >abc|def
  GATGAACGCTGGCGGCGTGCCTAATACATGCAAGTCGAG
  >abcdef#
  GATGAACGCTGGCGGCGTGCCTAATACATGCAAGTCGAG
  >abc#def
  GATGAACGCTGGCGGCGTGCCTAATACATGCAAGTCGAG

  $ blastdbcmd -db funky_ids.fa -entry all -outfmt '%a'
  abc:def
  abcdef#
  abc#def

If you noticed the first line of both commands you can see that the pipe
character in first case is being weirdly displayed as a colon. As I said, I
don't know yet if it is a desired or intentional behavior but whatever it is,
it sure needs some explanation or documentation. I have already emailed the
BLAST+ team about this and expecting their reply anytime soon.

I will have some more updates with my recent adventures with `Afra (an
annotation editor) <https://github.com/yeban/afra>`_ in coming week.

Stay tuned!

----------------------

.. [#] Retrieving blast sequences doesn't work well with numbers #88,
       `SequenceServer, GitHub
       <https://github.com/yannickwurm/sequenceserver/issues/88>`_
.. [#] NCBI BLAST+ Release Notes, October 2nd, 2014. Christiam Camacho, NCBI,
       http://www.ncbi.nlm.nih.gov/books/NBK131777/
