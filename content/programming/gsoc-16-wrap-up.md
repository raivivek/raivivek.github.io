template: post.haml
category: programming
author: Vivek Rai
date: 8/22/2016
draft: false
math: false
title: "Open {data, science, source} - OpenSNP.org"
---
<i class="fa fa-star" aria-hidden="true"></i> First Chapter, Best Summer Ever!
---

#### April, 2016

“What’s the worst that can happen? I have experienced it all anyway. Just get
some sleep”, I tell myself anxiously. With every passing minute, the clock moves
closer to midnight. But I am too tired to think about *it* anymore.

About half an hour in my dead sleep, I am startled by a loud phone call. My
friend is asking me to check the announcements of [Google Summer of
Code](https://summerofcodewith.google.com) project selections. I had applied
too, just like previous two years.

[Proposal](https://summerofcode.withgoogle.com/serve/5261308333129728/)  •  [Trello Board](https://trello.com/b/ubBNKnmT/opensnp) • [GitHub](https://github.com/vivekiitkgp/snpr)

------------

#### August, 2016

<figure style="text-align:center;">
  <img src="/images/GSoC2016Logo.jpg" width="80%">  </img>
  <figcaption>
    (Google, <a
    href="http://creativecommons.org/licenses/by-nc-nd/3.0/">CC-BY-NC-ND</a>)
  </figcaption>
</figure>

It is the [final week](https://developers.google.com/open-source/gsoc/timeline) of Google Summer of Code. Participating students are
required to present their work and submit a final wrap up post about their
project as the last task before final evaluation.

This blog post is my submission.

Through the summers, I have
been working on my proposed project ‘[Linking Phenotypes to
Genotypes](https://summerofcode.withgoogle.com/organizations/5693436329984000/#4637393399316480)’
for [OpenSNP](https://opensnp.org) under the umbrella of [Open Bioinformatics Foundation
(OBF)](https://en.wikipedia.org/wiki/Op en_Bioinformatics_Foundation). This post
is also a personal account of my experiences besides being a suitably technical
introduction to my project.

So, by the end of this post, I hope to provide everyone with a clear idea of what
I have been working on and why it matters, describe my progress on the project,
and share the marvelous experience of working with the OpenSNP team.


### Project

<blockquote>
<small>
Currently, OpenSNP portal has a decent database collection of <a href="https://en.wikipedia.org/wiki/Genotype">genotypes</a> (3000+
users), <a href="https://en.wikipedia.org/wiki/Phenotype">phenotypes</a>, <a
href="https://en.wikipedia.org/wiki/Single-nucleotide_polymorphism">SNPs</a> and
associated literature information all available in an easily searchable way.
There is, however, a lot of scope in improving the impact and reach of the
project by modernizing the interface, studying the aggregated data, and
providing intuitive analysis to the users to allow for quicker yet improved and
comprehensive understanding. For example, OpenSNP portal currently displays the
<a href="https://en.wikipedia.org/wiki/Allele">allele</a> frequency of a genotype - a valuable insight into how rare your mutation
is.

<p></p>
This proposal seeks to work on the second problem of bridging different
components to allow for better interactivity and information conveyance.

<footer>
<cite>
— (<a href="https://summerofcode.withgoogle.com/serve/5261308333129728/">Original proposal</a>, revised)
</cite>
</footer>
</small>
</blockquote>

In line with the proposition set up in the introduction, my project aims to
[Link the SNPs with
Phenotypes in the
portal](https://github.com/openSNP/snpr/blob/master/ROADMAP.md#long-term-6-months).

*What do I mean by linking?*

[SNPs](https://en.wikipedia.org/wiki/Single-nucleotide_polymorphism) (pronounced
*snips*), simply, are single nucleotide variations in DNA that occur with
a certain percentage of a population.[[1](#1)] They can affect how humans
develop diseases and respond to pathogens, chemicals, drugs, vaccines, and other
agents. A set of SNPs for a single individual can also act as a unique
signature useful in identification and forensics. Naturally, figuring out the
possible downstream effects of an SNP is indeed useful. And that’s exactly what
we mean by linking SNPs to phenotypes.[[2](#2)]

However, a **word of caution** here. Figuring out the *causal* effects of
a particular SNP is a tricky task with significant computational and
experimental challenges, enough to be a [widely
studied](https://en.wikipedia.org/wiki/Genome-wide_association_study) biological
problem. *We couldn’t be doing the original research here, are we?* Well, no.
Instead, we are going to use the research data that has already been generated
and available to us as valuable references — through secondary analysis using
[text mining](https://en.wikipedia.org/wiki/Text_mining).

### Motivation

<figure style="text-align:center;">
  <img src="/images/opensnp.png" width="60%">  </img>
  <figcaption>
    (<a href="https://github.com/openSNP/Community-Design/tree/master/openSNP/RGB">Source</a>)
  </figcaption>
</figure>

[OpenSNP.org](https://opensnp.org) has a single purpose —  to act as a free,
open-data repository by collecting personal genomics data into the public
domain. The web-portal, thus, is a critical component of the infrastructure. From my
understanding, I can imagine two immediate benefits of this project.

* Improve the overall user-experience by making to easier to understand possible
    associations between an SNP to a phenotype and vice-versa.
* Build a semantic data structure (or network) of SNPs and Phenotypes linked
    based on literature information.

Although the second point is not the obvious goal of this project, I believe it
could potentially serve as a useful data source to openSNP users in future.

### Progress

The main components of the project were: [[commits on GitHub](https://github.com/vivekiitkgp/snpr/commits/master)]

* Schema updates, database model, building association table - ✓
* Updating the controllers and views - ✓
* Algorithm to search and score literature for phenotypes - ✓, *v1.0*
* Writing the worker script - ✓
* Writing tests for everything above - *in progress*
* Executing Rake tasks - *later*

In the first step, I familiarized myself with Rails and ActiveRecord pattern before
moving to database associations. A useful strategy to learn fast was to set up
dummy examples. For example, using `rails console`, one could examine arbitrary
objects, query database, or modify objects. It became super easy to understand
concepts like foreign key, indexing, migration and debug errors. Through this,
I could learn how pieces of code come together to create a coherent
architecture, like the MVC pattern.  —  exciting start!

Next step was to write code to score phenotype matches across the references
corresponding to each SNP and rank the possible matches. The first strategy was
to try a simple frequency lookup. While this sounds easy and attractive
option, it is a *naive* solution, and there are some serious limitations
to it. For instance:

- OpenSNP’s [phenotypes table](https://opensnp.org/phenotypes) is populated manually by users. The added phenotypes
    often do no correspond to the phenotypes as reported in references. Hence,
    there will be no match.
- Since we are not searching through the full text of the references but only through
    title and summary (for some papers, if available), it creates an issue
    since many references do not name a phenotype in the title to avoid coming as too
    strong when studies are only suggestive.

All in all, you end up with too few phenotypes detected for a single SNP even
though it has tons of references. We discussed this and thought of several
ideas - use additional data aggregation tools (for example,
[myvariant.info](http://myvariant.info)), use a standard list of phenotypes, or
even *better* create a phenotype network and leverage phenotype associations.

<figure style="text-align:center;">
  <img src="/images/pheno_list.png" width="100%">  </img>
  <figcaption>
    The SNP info dashboard showing current columns of genotype and allele
    frequency along with newly implemented (for demo purposes!) list of
    suggestive phenotypes.
  </figcaption>
</figure>

However, for the sake of simplicity and as a first milestone, we proceeded with the
initial naive approach hoping to improve it in future iterations. The final
logic was packed into a `Sidekiq` [worker
script](https://github.com/vivekiitkgp/snpr/blob/master/app/workers/link_snp_phenotype.rb)
—  so far so good.

The next critical task was to write extensive unit tests and document all of the
implemented changes. This is what I have been mainly doing in the last
few weeks of the project. In the remaining time, I hope to continue testing and
improving on the worker script. I obtained an actual data dump from the
production database that I can use actually to check and see the performance.
Especially because it’s a per SNP operation and there are thousands of it. So, it
would be crucial to see how much additional overhead it adds to the production
server.

Besides, during this process, I came across several aspects of the code that could be
improved. For example, Phenotype table did not have a [unique key
constraint](https://github.com/openSNP/snpr/issues/304) on the `characteristic`
column. So, you could have two (or more!) rows describing *hair color* or
*height*.

Overall, I would not say that I delivered entirely on each deliverable, but we
definitely moved in a forward direction. Several new challenges came up, but
we hope to continue working on their resolution - after and beyond the scope of GSoC.

### Journey

I cannot thank my mentors enough for their continuous effort throughout the
project. [Philipp](https://twitter.com/PhilippBayer) and
[Bastian](https://twitter.com/gedankenstuecke) are one of the most enthusiastic
and voracious readers I have met so far. Thanks to an excellent stroke of luck,
I got to meet Bastian at BOSC 2016 in Orlando, Florida. More about it soon! 

<figure style="text-align:center">
<img
    src="/images/bastian-note.jpg"
    title="A lovely card along with cute OpenSNP stickers!"
    style="width: 300px; height: auto"/>
<figcaption>
  A little surprise by Bastian. A lovely card with a personal message and free
  OpenSNP stickers!
</figcaption>
</figure>

Last but not the least, a big thanks to Google for the amazing program! Also,
thanks to [Mateus](https://mateusjabour.github.io/) and [Graham](https://sxibolet.2pitau.org), also the GSoC students for OpenSNP for a great
company throughout.

--------

1. <small id=1>Variations in DNA arise all the time due to intrinsic error rates
in the various biological process (DNA replication, DNA transcription, for example).
However, most of these changes are *neutral* and do not affect the organism in
any way, while others are auto-corrected by cellular machinery. Rarely, a few
variations occur in critical regions of the genome (a gene that codes an essential
protein, for example) and manage to escape correction. This variation (including
the phenotype or disease it may be responsible for!) could then propagate
through the population via sexual recombination.</small>
2. <small id=2>May be not exactly. What we are doing here is very limited
expression of what could be done. In any case, if you are interested in the
techniques with which SNPs are detected then take a look at <a
href="https://en.wikipedia.org/wiki/SNP_genotyping">SNP Genotyping</a>. </small>
