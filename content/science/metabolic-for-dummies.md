template: post.haml
category: science
author: Vivek Rai
date: 01/20/2016
draft: false
title: Metabolic Network Analysis for Dummies
---
A beginners guide to analysing cellular metabolic networks
---

In this short tutorial, we will explore the basic steps of a metabolic network
analysis. For our convenience, we will take a small model organism and set up
a simple objective. However, the steps can be scaled without any loss of
generality.

### Introduction

#### What is a metabolic network?

Metabolic networks are one type of many biological networks. However,
irrespective of that, it is just a regular network consisting of *nodes*
connected by *edges*. The nodes carry data while edges indicate the nature of
relationship between them. For example, think of a social network where people
are nodes and friends are connected by edges.

A metabolic network, thus, must represent the cellular metabolic process using
nodes and edges.

#### Storing the data

Thousands of chemical reactions occur at a time, even in relatively simpler
organisms like *E.coli*. A popular and computationally amenable way to store
this information is in the form of a matrix, called a [**stoichiometry
matrix**](http://www.bio-physics.at/wiki/index.php?title=Stoichiometric_Matrix).

A stoichiometry matrix records the relationship between different metabolites and
the particular chemical reactions they participate in. If you are familiar with
networks already, it is similar to an [adjacency matrix](https://en.wikipedia.org/wiki/Adjacency_matrix) representation.

#### Example

Consider the following sample of chemical reactions take from *E.coli* BL21(DE3)
strain, a popularly used [expression host]().

$$ ade_c + prpp_c → amp_c + ppi_c \tag{1} $$
$$ 3amac_c + h_c + h2o_c → msa_c + nh4_c \tag{2} $$
$$ accoa_c + h2o_c + oaa_c → cit_c + coa_c + h_c \tag{3} $$

<small class="hint">Hint: Confused about symbols? See [1](http://bigg.ucsd.edu/models/iECD_1391/reactions/ADPT), [2](http://bigg.ucsd.edu/models/iECD_1391/reactions/3AMACHYD), [3](http://bigg.ucsd.edu/models/iECD_1391/reactions/CS) </small>

A complete set of reactions along with list of metabolites and genes for
a particular organism can be obtained from online databases like
[BiGG](http://bigg.ucsd.edu/).

The dataset can be obtained in several file formats like [JSON](https://en.wikipedia.org/wiki/JSON),
[SBML](http://sbml.org), or [MAT](http://www.mathworks.com/help/pdf_doc/matlab/matfile_format.pdf) depending on application used for further analysis. We’ll
come back to this later.

### Network construction

#### Creating stoichiometry matrix

To construct a stoichiometry matrix, we need to have the following information
(both of which are present in model file):

* Participating metabolites \\(( \vec{m} )\\)
* (Balanced) Chemical reactions \\(( \vec{R} )\\)

Following from previous example, we can see that \\( \vec{m} \\) is
a vector of size \\( m = 13 \\) (unique metabolites) and \\( \vec{R} \\) is of
size \\( n = 3 \\). The resulting stoichiometry matrix \\(( S )\\) is of size \\(
m \times n \\), where each row represents a metabolite and each column represents
a reaction. Each cell \\((c_{ij})\\) populated using a simple rule — \\(a\\) if
a metabolite is produced in that reaction, \\(- a\\) if consumed, 0 otherwise;
where \\(a\\) is the stoichiometry coefficient of the metabolite.

For example, a stoichiometry for reaction \\( (1) \\) will be:

$$
\mathbf{S} = 
\left(
\begin{array}{c|c}
ade_c & -1\\\ prpp_c & -1\\\ amp_c & 1\\\ ppi_c & 1 \\\
\end{array}\right)
$$
<small class="hint">
Exercise: Try writing S matrix for all three reactions.<br>
Exercise: Write a (Python?) script to create S matrix from a list of reactions. </small>

#### Other matrices

Similarly, you can create different matrices containing other kind of reaction
information. For example, elemental matrix (\\( \vec{E} \\)), charge-balance
matrix, moiety matrix, flux matrix (\\( \vec{v} \\)).
All of them when multiplied with stoichiometry matrix can yield complete
information about a reaction, like atoms involved, charged species involved,
rate of concentration changes etc.

The advantage of using matrices is that conservation principles can be simply
verified through a matrix multiplication.

#### Reaction and compound maps

Stoichiometry matrix, though easy to understand, is a fairly comprehensive
description of the metabolic network. An alternative is to use a *reaction
map* and *compound map*.

* A reaction map consists of metabolites as nodes and reactions as edges, drawn
    from metabolites which are consumed to the metabolites which are produced.
* A compound map consists of reactions as nodes and metabolites as edges, drawn
    from the reactions in which they are produced to the reactions in which they
    are produced.

<small class="hint">
Exercise: Write the compound map for the S matrix of above three reactions.<br>
Exercise: Given a metabolite, write a program to find the common reaction.</small>

### Visualizing the network

Once the metabolic network model grows beyond a few reactions and metabolites,
it becomes increasingly difficult to visualize the relationship between the
components. Visualization allows us to observe key network structures, critical
pathways and important metabolites without much analysis.

Some common ways to visualize a network is:

* Cytospace
* Genomatica’s visualization
