.. title: Understanding BLAST Output
.. slug: understanding-blast-output
.. date: 2014/07/13 02:47:45
.. tags: ruby, blast, sequenceserver
.. link: 
.. description: 
.. type: text
.. author: Vivek Rai

In the last post, I mentioned about a project I was trying to work on -
`SequenceServer <http://www.sequenceserver.com>`__. Also, in the end I
said that I would be writing about the BLAST algorithm (which is the
backbone of this project) and how does it works so efficiently in
producing alignments even with very long sequences. However, In this
post I would like to talk about BLAST program and it's output before we
go into the algorithm some time later.

.. TEASER_END

After talking to `Priyam <https://github.com/yeban>`__ (one of the
project collaborators), I decided to work towards solving the `issue
21 <https://github.com/yannickwurm/sequenceserver/issues/21>`__, which
in turn would help us to solve a large number of other dependent issues
as well. This was supposed to be a major improvement and I really liked
the idea of it. Especially since it was concerned with understanding the
BLAST program and its output format.

*Background*: `Issue
21 <https://github.com/yannickwurm/sequenceserver/issues/21>`__ deals
with displaying an overview graphic for the output results obtained from
blasting. This is a nice feature as it adds more towards visualizing and
understanding the data easily (than going over a large number of hits in
many cases). The problem however is that because of the hacky way in
which the current implementation worked for displaying the final output
results, it was not very easy to work with generation of visuals. The
data generated from BLAST output had to be parsed first into a data
layer and then interfaced with other features like displaying overview
graphic or other rich information. This required three things from my
side - Ruby, BLAST and Patience.

[x] Part I
----------

**BLAST Output**: The blast output format can be reconfigured using the
``outfmt`` option which is described in the NCBI's `BLAST
Manual <www.ncbi.nlm.nih.gov/books/NBK1763/?report=reader#!po=91.5094>`__.
The sample XML output (standard settings) has the following structure
(for a real example
`blast.xml <https://gist.github.com/vivekiitkgp/e9fb422f177bec7f56b6#file-blast-xml>`__):

.. code-block:: xml

    .?xml version="1.0"?>
    <!DOCTYPE BlastOutput PUBLIC "-//NCBI//NCBI BlastOutput/EN" "http://www.ncbi.nlm.nih.gov/dtd/NCBI_BlastOutput.dtd">
    <BlastOutput>
      <BlastOutput_program>
      <BlastOutput_version>
      <BlastOutput_reference>
      <BlastOutput_db>
      <BlastOutput_query-ID>
      <BlastOutput_query-def>
      <BlastOutput_query-len>
      <BlastOutput_param>
        <Parameters>
          <Parameters_matrix>
          <Parameters_expect>
          <Parameters_gap-open>
          <Parameters_gap-extend>
          <Parameters_filter>
        </Parameters>
      </BlastOutput_param>
    <BlastOutput_iterations>
    <Iteration>
      -- Iteration details --
    <Iteration_hits>
    <Hit>
      <Hit_num>
      <Hit_id>
      <Hit_def>
      <Hit_accession>
      <Hit_len>
      <Hit_hsps>
        <Hsp>
      -- HSP Details --
        </Hsp>
      </Hit_hsps>
    </Hit>
    <Hit> </Hit>
    </Iteration_hits>
    <Iteration_stat>
      -- Statistics about Query --
    </Iteration_stat>
    </Iteration>
    </BlastOutput_iterations>
    </BlastOutput>

The XML output is as detailed as it could be including all the
information about Hit's
`HSP <https://genomevolution.org/wiki/index.php/High-scoring_segment_pair>`__,
the ``query database``, ``alignment lengths``, the
``query and aligned sequences`` along with the matches between them, and
``query statistics``. This is as useful as it could be and helps to
generate very detailed statistics and overview too. I would recommend
one to look at the given example of blast.xml to understand what kind of
data is generated. To parse this generated XML output easily, I used the
`Ox <https://rubygems.org/gems/ox>`__ rubygem, which is a simple and
`faster <http://www.ohler.com/dev/xml_with_ruby/xml_with_ruby.html>`__
alternative of other XML parsers available in Ruby. In the beginning, I
generated a simple Hash out of this parsed data using recursive
traversal along the elements.

.. code-block:: ruby
    :number-lines:

    def report! 
        # Generates BLAST report which one or more multiple Query objects
        # based on the blast query string.
        parsed_out = Ox.parse(@result)
        hashed_out = node_to_dict(parsed_out.root)
        @program = hashed_out["BlastOutput_program"]
        @querydb = hashed_out["BlastOutput_db"]

        hashed_out["BlastOutput_iterations"].each do |n|
            @queries ||= {}
            @queries[n[2]] = Query.new(n[1], n[2], n[3], {}, n[5]["Statistics"])

            # Ensure a hit object is received. No hits, returns a newline.
            # Note that checking to "\n" doesn't work since n[4] = ["\n"]
            if n[4]==["\n"]
                @queries[n[2]][:hits] = "No hits found."
                puts "true"
            else
                n[4].each do |hits|
                    @queries[n[2]][:hits][hits[1]] = Hit.new(hits[0], hits[1], hits[2],\
                                                    hits[3], hits[4], {})
                    @queries[n[2]][:hits][hits[1]][:hsp] = HSP.new(*hits[5]["Hsp"].values)
                end
            end
        end
    end

This Hash is then used for easy templating (using
`erb <http://ruby-doc.org/stdlib-1.9.3/libdoc/erb/rdoc/ERB.html>`__) and
display of results in a more elegant and modular way. This keeps the
data at one place which can then be used for overview graphic display or
integration of other features and bug fixes in near future. All my work
related to this can be found at
`@issue21 <https://github.com/vivekiitkgp/sequenceserver/tree/issue21>`_
branch. The code written till now, is very premature and *just* works. I
plan to refactor it majorily and incorporate some very nice features of
Ruby language (which I am desperately trying to understand).

`Here <https://drive.google.com/file/d/0B3eGCB261PalWTJnODloLXAtdGM/edit?usp=sharing>`__
is a snapshot of what current output looks like, when SS is run.

[O] Part II
-----------

The second part of this task deals with actually displaying the overview
graphic for the hits obtained using SS. To give an idea of what it looks
like, see `here <http://www.biodalliance.org/>`__ and
`here <http://canvasxpress.org/genome.html>`__. The target is to display
similar graphic (but simple and easy to load/configure) for each hit in
the SS's output. I am yet to start working on and possibly the next post
could be derived out of that work.

I would be very glad if you drop by to review my code and send in any
suggestions. Feel free to reach me by whatever means.
