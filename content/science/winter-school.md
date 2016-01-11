template: post.haml
category: science
author: Vivek Rai
date: 01/6/2016
draft: true
title: Notes from Systems Biology Winter School
---
A comprehensive and thrilling experience
---

This winter I attended the fourth session of [Winter School on Quantitative
Systems Biology](https://www.icts.res.in/program/current/details/361/) at [International Centre for Theoretical Sciences (ICTS)](https://icts.res.in),
Bangalore. The school is organized by the ICTS, Bangalore and [ICTP,
Italy](https://www.ictp.it) in
succession as a part of their ICTP-ICTS Programme in Biology since 2012.

It was an extraordinarily fun-filled learning experience. Here is a brief
summary of my impressions of the school.
<br>
<br>

-----

### TL;DR

The winter school provides great learning experience and an excellent platform
to make connections and get to know people. It has a strong theme yet remains
broad enough to be of interest to at an interdisciplinary audience. More
importantly, you'd enjoy working in a mix company of people from different
backgrounds brainstorming and working together towards solving a similar problem
of interest. And not to mention, it is a humbling experience to witness the
diversity and scale of research being carried out by people around the world.

I heartily recommend Winter School on Quantitative Systems Biology to anyone who
feels moderately excited with these prospects.

A comprehensive log of daily lectures, resources and notes are
[online](https://github.com/vivekiitkgp/qsb-school-diary.git). Also, check out
the YouTube [channel]() of ICTS for video recordings.

------

### Theme

Typically, each school has a central theme and accordingly distinguished
speakers from around the world in the concerned fields are invited.
Additionally, before each session consists of an extra pre-school component
where instructors introduce everyone to the relevant pre-requisite concepts for
the main school. This was an effective strategy because the main school turns
out to be quite intensive with series of lectures, research talks, poster
presentation, and discussion session lined up in succession. We even had a small
project component towards the end.

The description of QSB2015 reads:

> QSB2015 is centered around **bacteria**, the simplest known forms of life. The
> focus is on the basics of cellular life and the principles thereof. The
> emphasis is on the structures and processes that allow bacteria to survive,
> reproduce, evolve and form communities in their environment. This is a setting
> that is fertile for quantitative work, both theoretical and experimental, and
> for grasping some universals in biology.

### Participants

To my surprise, most (~80%) of the [school participants]() were either physicists or
mathematicians. Being in a crowd of this composition, as a biologist, provides
you an unique insight of how others perceive and understand the key concepts
that we often take for granted. How to reduce the system, formulate the problem,
model the system etc., are a few key questions that are well understood in
company of people who, generally, are better at it.

### Subjects - Overview

A gross categorization:

#### Pre-school

* Numbers in Biology                ([Mukund Thattai]())
* Mathematical modeling of processes([Sandeep Krishna]())
* Ecology and Evolution             ([Deepa Agashe]())
* Primer on Biology                 ([Supreet Saini]())
* Metagenomics                      ([Nagasuma Chandra]())

#### Main school
* Bacterial cell physiology and growth <br> ([Matthew Scott](), [Suckjoon Jun]())
* Metabolism, regulation and response to the environment <br> ([Tom Khulmann]())
* Structure and dynamics of biochemical networks <br>
([Gary Stormo](https://en.wikipedia.org/wiki/Gary_Stormo), [Nathan Price](), [Nagasuma Chandra](), [Kunihiko Kaneko](http://chaos.c.u-tokyo.ac.jp/))
* Bacterial ecology <br> ([Tzachi Pilpel]())
* Evolution <br> ([Andreas Wagner](http://www.ieu.uzh.ch/wagner/), [Matthias
Heinemann](), [Tzachi Pilpel]())
* Energy, information and computation in cells <br> ([Pankaj Mehta]())

### Topics

#### Bacterial physiology

I had a notion that a lot of work\* has been done in mainstream microbiology
causing people to shift away from it to modern buzzwords in biology. However, in
this school, I realized that it *still* is the bread and butter for many
scientists and people are constantly pushing the boundaries by coming up with
interesting work.

**Matthew Scott** walked us through through an entire theory of quantitative
bacterial physiology using the classic case studies from 60s. The key question
being - How do the growth, size, cell cycle, macromolecular composition and
morphology of a cell coordinate? Can we predict anything? In an answer to these
questions, concepts of growth law, proteome partitioning, generation time versus
division time puzzle, along with comprehensive quantitative models of growth
were discussed.

**Suckjoon Jun** built upon the content discussed by Matt Scott and described his
work on [*mother machine*](http://jun.ucsd.edu/mother_machine.php) and how they have use it to conduct experiments. The
key idea of his lectures were to infer the physiological and metabolic control
parameters of a bacterial cell that can explain the phenomenon of size and
growth homeostasis. They have proposed **adder theory** as an explanation to
cell size homeostasis and hypothesize growth (λ) and size (Δ) as two independent
and sufficient control parameters for bacterial physiological regulation.

\* <small> Thanks to Cooper, Monod, Helmstetter, Schaechter et al. in 50s. </small>

#### Metabolism and biochemical networks

**Nathan Price** discussed some of standard techniques and algorithms used in
metabolic network model construction and analysis. Apparently, creating a full
genome scale metabolic network is significantly challenging and humongous task
typically involving data collection, literature mining, processing, analysis,
validation, and curation as key steps. At each step, there are tricky of dealing
with missing values, right scoring function, and database to use. Once you have
reconstructed a network, next step is to find out its valid states. A popular
technique used for network reconstruction and analysis is COnstraint-Based
Reconstruction and Analysis (COBRA) that employs physicochemical and biological
constraints to limit the space of phenotypic states of a network in a given
condition. Naturally, here *more data means better model*.

&ensp;&ensp;&ensp;&ensp;Once you have constructed a valid metabolic network, the
network step could be to integrate it with the regulatory network. The enhanced
network can now be used in retrospect to improve gene annotation, identify new
metabolites and thereby improve itself. It also incorporates an amazing
predictive power that may guide new biological hypothesis development. Infact,
anything that you can do with a normal network can be done with this network,
added with a biological significance.

On the other hand, **Mathhias Heinemann** took us to metabolism on a single cell
level and discussed how cells regulate their metabolism. He proposed an elegant
*flux-sensing mechanism* used by the cells to continuously measure their outside
environment and carry out internal changes. A fantastic study by his group
demonstrated the phenotypic bistability of *E.coli*'s central carbon metabolism
and how it can be achieved by a simple use of few *flux-sensors* along the
network.

#### Evolution


#### Energy, information and computation in cells

How do cells perform computation?(*) And what is it that requires energy? Is
everything inside a cell simply driven by thermodynamics and a careful design of
free energy cascade? Do these processes have any fundamental limitations that
biological systems have to obey?&ensp;&ensp;&ensp;&ensp;

As it turns out, *reality* is not so simple.

\*<small>Sensing the chemical gradient, Random walks, [Slime molds](http://www.nature.com/news/how-brainless-slime-molds-redefine-intelligence-1.11811) etc.</small> 

**Pankaj Mehta**, a physicist from Boston University works on elegant theories
to answer these questions. They key motivation of his talks was to investigate
*no-go* theories in biology, and their possible use in design of synthetic
cellular modules and circuits. He discussed two classical papers, *Kinetic
Proofreading* by Hopfield et al. (1994), and *Physics of Chemoreception* by Burg and
Purcell (1975). The two papers provide an excellent discussion of how cells employ
active processes to increase their specificity. Turns out, that's where you
break the *time-reversal symmetry* and hence *have to* consume energy.
