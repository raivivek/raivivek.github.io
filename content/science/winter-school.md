template: post.haml
category: science
author: Vivek Rai
date: 01/15/2016
math: true
title: Notes from Systems Biology Winter School
---
A comprehensive and thrilling experience
---

This winter, I attended the fourth session of [Winter School on Quantitative
Systems Biology](https://www.icts.res.in/program/current/details/361/) at [International Centre for Theoretical Sciences (ICTS)](https://icts.res.in),
Bangalore. The school is organized by the ICTS, Bangalore and [ICTP,
Italy](https://www.ictp.it) in
jointly as a part of their ICTP-ICTS Programme in Biology since 2012.

It was an extraordinarily fun-filled learning experience. I share below some
impressions of the school hoping that it would be useful to some of you.
<br>
<br>
<small>*Caution: Not so short. Also, the post may be frequently updated.*</small> 

-----

### TL;DR

The winter school provides great learning experience and an excellent platform
to make connections and get to know people. It has a strong theme yet remains
broad enough to be of interest to an interdisciplinary audience. More
importantly, you'd enjoy working in a mix company of people from different
backgrounds, brainstorming and working together towards solving a problem
of equal interest. And not to mention, it is a humbling experience to witness the
diversity and scale of research being carried out by people around the world.

I heartily recommend Winter School on Quantitative Systems Biology to anyone who
feels moderately excited with these prospects.

A comprehensive log of daily lectures, resources and notes are
[online](https://github.com/vivekiitkgp/qsb-school-diary.git). Also, check out
the YouTube [channel](https://www.youtube.com/user/ICTStalks) of ICTS for
excellent video recordings of all QSB sessions.

------

### Theme

Typically, each school has a central theme and accordingly distinguished
speakers from around the world in the relevant fields are invited.
Additionally, each session consists of an extra pre-school component where
instructors introduce everyone to the necessary pre-requisite concepts for the
main school. This turns out to be an effective strategy and significantly
reduces the learning effort during the main school for the people from diverse backgrounds.
Primarily because the main school is quite intensive with the series of lectures,
research talks, poster presentation, and discussion sessions scheduled in
succession. We even had a small project to do towards the end.

The official description of QSB2015 reads:

> QSB2015 is centered around **bacteria**, the simplest known forms of life. The
> focus is on the basics of cellular life and the principles thereof. The
> emphasis is on the structures and processes that allow bacteria to survive,
> reproduce, evolve and form communities in their environment. This is a setting
> that is fertile for quantitative work, both theoretical and experimental, and
> for grasping some universals in biology.

### Participants

To my surprise, most (~80%) of the [school
participants](https://www.icts.res.in/additional_page/721/) were either
physicists or mathematicians. Being in a crowd of this composition, as
a biologist (though my background is more on engineering side), provides you an
excellent peek of how others perceive and understand the key concepts that we
biologists often take for granted. For example, how to reduce the complexity of
the system, formulate the problem, model the interactions etc., are a few key
questions that are well understood in company of people who typically are
better at it.

### Subjects - Overview

A gross categorization of topics along with speakers:

#### Pre-school

* Numbers in Biology                ([Mukund Thattai](http://www.ncbs.res.in/thattai))
* Mathematical modeling of processes ([Sandeep Krishna](http://www.ncbs.res.in/sandeep))
* Ecology and Evolution             ([Deepa Agashe](http://www.ncbs.res.in/dagashe))
* Primer on Biology                 ([Supreet Saini](http://www.che.iitb.ac.in/online/faculty/supreet-saini))
* Metagenomics                      ([Nagasuma Chandra](http://biochem.iisc.ernet.in/nchandra.php))

#### Main school

* Bacterial cell physiology and growth <br> ([Matthew Scott](http://www.math.uwaterloo.ca/~mscott/), [Suckjoon Jun](http://jun.ucsd.edu))
* Metabolism, regulation and response to the environment <br> ([Tom Khulmann](http://physics.illinois.edu/people/profile.asp?tkuhlman))
* Structure and dynamics of biochemical networks <br>
([Gary Stormo](https://en.wikipedia.org/wiki/Gary_Stormo), [Nathan Price](https://www.systemsbiology.org/bio/nathan-price/), [Nagasuma Chandra](), [Kunihiko Kaneko](http://chaos.c.u-tokyo.ac.jp/))
* Evolution <br> ([Andreas Wagner](http://www.ieu.uzh.ch/wagner/), [Matthias
Heinemann](http://www.rug.nl/research/molecular-systems-biology/), [Tzachi Pilpel](http://longitude.weizmann.ac.il/))
* Energy, information and computation in cells <br> ([Pankaj Mehta](http://physics.bu.edu/~pankajm/))

### Topics

#### Gene regulation

**Gary Stormo**, one of the pioneering figures in Bioinformatics, gave several
introductory lectures with gene regulatory networks at its core. A gene
regulatory network is typically modeled using protein-protein and protein-DNA
interactions, along with directed edges indicating positive (activation,
association) or negative (repression, degradation) type of relation. This
network consists of simple repeating components like feed-forward,
auto-regulatory, coherent type connections, etc. These components are called network
[motifs](https://en.wikipedia.org/wiki/Network_motif). Although, it is easy to
understand the behavior of a motif on an individual level, it is reasonably
challenging to comprehend the complex *emergent* behavior of the total network
they give rise to.

We may ask, how does a cell use these simple motifs to generate increasingly
complex behaviors? Can we predict them? Even harder to answer, how to
ascertain these explanations experimentally? A lot remains to be answered.

Additionally, I found the discussion of Savageau's [*Demand
Theory*](http://www.ncbi.nlm.nih.gov/pubmed/9691027) and Riboswitches pretty
fascinating.

#### Bacterial physiology

I had a notion that a lot of work(\*) has been done in mainstream microbiology
causing people to shift away from it to modern buzzwords in biology. However, in
this school, I realized that it *still* is the bread and butter for many
scientists, and people are continuing to push the boundaries with their rich work.

**Matthew Scott** walked us through an entire theory of quantitative
bacterial physiology using the classic case studies from the 60s. The key question
being - How do the growth, size, cell cycle, macromolecular composition and
morphology of a cell coordinate? Can we predict anything? In an answer to these
questions, concepts of growth law, proteome partitioning, generation time versus
division time puzzle, along with comprehensive quantitative models of growth
were discussed.

**Suckjoon Jun** built upon the content discussed by Matt Scott and described his
work on [*mother machine*](http://jun.ucsd.edu/mother_machine.php) and how they have used it to conduct experiments. The
key idea of his lectures were to infer the physiological and metabolic control
parameters of a bacterial cell that can explain the phenomenon of size and
growth homeostasis. They have proposed **adder theory** as an explanation to
cell size homeostasis and hypothesize growth \\( (\lambda) \\) and size \\((\Delta)\\) as two independent
and sufficient control parameters for bacterial physiological regulation.
A great example of theory backed by rigid experiments.

\* <small> Thanks to
[Cooper](https://www.researchgate.net/profile/Stephen_Cooper/citations),
[Monod](https://en.wikipedia.org/wiki/Jacques_Monod), [Helmstetter](https://medicine.umich.edu/dept/microbiology-immunology/frederick-c-neidhardt-phd),
[Schaechter](http://www.bio.sdsu.edu/faculty/schaechter.htm) et al. in 50s.
</small>

#### Metabolism and biochemical networks

After regulatory network, metabolic network is the next most important towards
realization of a whole-cell model (ultimate goal of systems biology?).

**Nathan Price** discussed some of standard techniques and algorithms used in
metabolic network model construction and analysis. Apparently, creating a full
genome scale metabolic network is significantly challenging and a humongous task
typically involving data collection, literature mining, processing, analysis,
validation, and curation as essential steps. At each step, there are tricky issues of dealing
with missing values, and using right scoring function and database to use. Once you have
reconstructed a network, next step is to find out its valid states. A widely
used
technique used for network reconstruction and analysis is COnstraint-Based
Reconstruction and Analysis (COBRA) that employs physicochemical and biological
constraints to limit the space of phenotypic states of a network in a given
condition. Naturally, here also *more data beats a complex model*.

&ensp;&ensp;Once we have constructed a valid metabolic network, the
next step could be to integrate it with the regulatory network. The enhanced
network can now be used in retrospect to improve gene annotation, identify new
metabolites and thereby improve itself. It also incorporates an amazing
predictive power that may guide new biological hypothesis development. In fact,
anything that you can do with a standard network can be done with this network,
added with a biological significance.

On the other hand, **Mathhias Heinemann** took us to metabolism on a single cell
level and discussed how cells regulate their metabolism. He proposed an elegant
*flux-sensing mechanism* used by the cells to continuously measure their outside
environment and carry out internal changes. A great study by his group
demonstrated the phenotypic bistability of *E.coli*'s central carbon metabolism
and how it can be achieved by a simple use of few *flux-sensors* along the
network.

Incidentally, the project component I was involved in was also based on
metabolic network analysis. Perhaps, that should go in my next post.

#### Evolution

Since the seminal work of [Darwin and Wallace](http://evolution.berkeley.edu/evolibrary/article/history_14) almost two centuries ago, evolution
is still one of the hottest studied areas. The school witnessed several lectures
and research talks on topics like evolutionary dynamics, molecular evolution
with interesting theories put forward frequently.

At ETH Zurich, **Andreas Wagner** is trying to understand the origin of innovations,
complexity and diversity of life using *systems approach*. The primary question
being, "*Are there any principles of innovability in nature that govern the
arrival of fittest? Or is it just random mutation and selection over
the evolutionary period?*".

However, one must carefully distinguish *innovation* with *adaptation* to
understand the question correctly.

&ensp;&ensp;His group is looking for answers by probing the metabolic phenotype and
genotype space and their relation in a network. The analysis yields few
curious results like -

1. Two genotypes can differ (determined by a distance function D) strikingly
despite having the same phenotype.
2. A genotype can have quite a diverse neighborhood. 

A consequence of these two properties is that it is really *not that difficult*
for a genotype to acquire a new, unique phenotype. Combine with regulatory
phenotype space, protein sequence space \\((20^n)\\), RNA sequence space
\\((4^n)\\) etc., you have a multi-dimensional space to possibly generate any
combination with very few step movements across the hyperspace. More info in his
papers.

If this seems too computational to your taste, **Tzachi Pilpel** discussed how
evolution occurs at the level of gene expression and related processes with
a considerable experimental effort. A series of interesting papers on how transcription
and translation networks may have evolved. The fact that even *tRNA abundance*
could be optimized for, and can be used as an active means of control is
beautiful.

Another exciting set of experiments were done by **Tom Kuhlmann** whose group
wanted to understand the role of transposons in evolution. The experiments
beautifully showed transposons in action, in *real-time* using a rather simple
plasmid construct. Quite a few conclusions follow from these experiments that
I encourage anyone to look up in his papers.

#### Energy, information and computation in cells

How do cells perform computation?(*) And what is it that requires energy? Is
everything inside a cell only driven by thermodynamics and a careful design of
free energy cascade? Do these processes have any fundamental limitations that
biological systems have to obey?

As it turns out, *reality* is not so simple.

\* <small>Sensing the chemical gradient, Random walks, [Slime molds](http://www.nature.com/news/how-brainless-slime-molds-redefine-intelligence-1.11811) etc.</small> 

**Pankaj Mehta**, a physicist from Boston University, works on elegant theories
to answer these questions. They key motivation of his talks was to investigate
*no-go* theories in biology, and their possible use in the design of synthetic
cellular modules and circuits. He discussed two classical papers, *Kinetic
Proofreading* by Hopfield et al. (1994), and *Physics of Chemoreception* by Burg and
Purcell (1975). The two papers provide an excellent discussion of how cells employ
active processes to increase their specificity. Turns out, that's where you
break the *time-reversal symmetry* and hence *have to* consume energy.
