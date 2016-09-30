template: post.haml
category: programming
author: Vivek Rai
date: 27/09/2016
draft: false
title: Vim for Writing
---
Extended configuration and plugins for improved experience
---

Today I am going to talk about how to configure your Vim and `.vimrc` for
a better writing environment. [Vim](https://en.wikipedia.org/wiki/Vim_(text_editor)) is the iMproved version of [vi](https://en.wikipedia.org/wiki/Vi), one of the
famous early text editors on Unix. It was written by [Bram Moolenaar](https://en.wikipedia.org/wiki/Bram_Moolenaar) and is still
maintained by him till day. Owing to its native availability across most Unix
systems and advanced editing capabilities, it became a part of notorious [flame war](https://en.wikipedia.org/wiki/Flaming_(Internet))
between programmers — [vim or emacs](https://en.wikipedia.org/wiki/Editor_war), which editor to choose?

I happen to be a [Vim user](https://github.com/vivekiitkgp/Dotfiles-vim). Not because I really understand and appreciate the
features of Vim anymore than I would have done for [Emacs](https://en.wikipedia.org/wiki/Emacs), but because Vim
is what I started with and had no reasons to move on. A lot of people find Vim
to be a reasonable choice, but at the same time, a sizable minority also grows
averse to it. That's a process of natural equilibrium in the community.

One of the good aspects of Vim is its extreme level of customizability. Vim can
be extended much beyond its 'out of the box' abilities by writing plugins in
[Vimscript](https://en.wikipedia.org/wiki/Vimscript) — a programming language
written specifically for Vim. Since programmers seek to exploit the
configurability and adapt their tools to their programming environment and
experience, over thousands of plugins have been written and [made
available](http://vim-scripts.org/). For example, plugins to add
advanced auto-completion plugins, fuzzy-file searches, improved code search and
navigation, custom shortcuts, and quick compile or debug tools. However, let's
say this for record, you do not need to know Vimscript to use Vim and neither it
is one of the most friendly languages to learn.

Although, I do like Vim as an excellent code editor, it is also a fantastic
choice for general-purpose writing. Almost all of my emails, homework, diary
notes are written, edited and proof-read in Vim.

An important component of this experience is a set of plugins I added to my
configuration, allowing me to observe typos, spelling mistakes, auto-correct
minor errors, and even perform an advanced thesaurus lookup. If you are
interested in such a setup for your Vim, this post might be useful.

## Plugins

I used the following plugins —  most of them are by [reedes](https://github.com/reedes/):

**[vim-wordy](https://github.com/reedes/vim-wordy)**

Highlights weak patterns of writing, for example, weasel words, jargon, opinion,
redundant words, similies.

**[vim-ditto](https://github.com/reedes/vim-ditto)**

Highlights repeated use of a phrase of word in your text. For example, over
usage of *very*, *much*, *like*.

**[vim-litecorrect](https://github.com/reedes/vim-ditto)**

Lightweight auto-correct plugin that replaces commonly mistaken patterns of text
with the correct one, for example, *teh* to *the*, *heer* to *here*, *Im* to
*I’m*.

**[vim-lexical](https://github.com/reedes/vim-ditto)**

Builds on Vim's spell-check and thesaurus/dictionary completion.

**vim-textobj-user, vim-textobj-sentence, vim-textobj-quotes**

Add additional text objects to Vim. For example, ‘,” (quotes) characters,
sentence or paragraph level navigation and selection, quickly selecting and
editing dates and times.

** [vim-LanguageTool](https://github.com/vim-scripts/LanguageTool) **

Wrapper around LanguageTool that runs the application in background and allows
navigation and correction from inside the Vim.

** [vim-online-thesaurus](https://github.com/beloglazov/vim-online-thesaurus) **

Quickly look up any word on Thesaurus.com to get synonyms, antonyms and other
details available.


## Installation

The easiest way to set up and maintain these plugins is to use a Vim Plugin
manager. There are many — [Pathogen](https://github.com/tpope/vim-pathogen), [NeoBundle](https://github.com/Shougo/neobundle.vim/), [Vundle](https://github.com/VundleVim/Vundle.vim), [Vim-Plug](https://github.com/junegunn/vim-plug), [Dein](https://github.com/Shougo/dein.vim) — but
I find `vim-plug` easiest to configure and use. The snippets given on this page,
thus, can be directly used with your vim-plug configuration. However, if you are
using any other plugin manager, you can find equivalent installation
instructions on their respective web pages.

Just add these plugins to your `.vimrc` :

    " Writing and Text-Objects plugins {{{
    Plug 'kana/vim-textobj-user'
    Plug 'vim-scripts/LanguageTool', {'for': ['text', 'markdown']}
    Plug 'reedes/vim-textobj-quote', {'for': ['text', 'markdown']}
    Plug 'reedes/vim-textobj-sentence', {'for': ['text', 'markdown']}
    Plug 'reedes/vim-litecorrect', {'for': ['text', 'markdown']}
    Plug 'reedes/vim-wordy', {'for': ['text', 'markdown']}
    Plug 'reedes/vim-pencil', {'for': ['text', 'markdown']}
    Plug 'reedes/vim-lexical', {'for': ['text', 'markdown']}
    Plug 'dbmrq/vim-ditto', {'for': ['text', 'markdown']}
    " }}}

<small>
<i>
The `for` argument for each of the plugins specifies Vim to load these plugins
only where certain file types are edited — it's called lazy-loading. Also, you
must have `vim-plug` installed and the code pasted between the `call
plug#begin()` and `call plug#end` statements.
</i>
</small>


Once done, save your `.vimrc` and exit. Open Vim again and run `PlugInstall`.
Vim-Plug will install the plugins one by one.

## Configuration

The installation is fairly complete — except the Language Tool plugin. It is simply a wrapper of the main
program which you can download from the [website](https://www.languagetool.org/) and extract in a convenient
location on your disk. We'll need the path of `jar` files for proper plugin
configuration.

After the installation is complete, we need to add a few lines to initialize to
initialize the setup:

<small>
<i>
Note that the lines should be added outside the `plug#begin` and `plug#end`
calls — preferably towards the end.
</i>
</small>

    " Custom {{{
    augroup textobj_quote
      autocmd!
      autocmd FileType markdown call textobj#quote#init()
      autocmd FileType textile call textobj#quote#init()
      autocmd FileType text call textobj#quote#init({'educate': 0})
    augroup END

    augroup textobj_sentence
      autocmd!
      autocmd FileType markdown call textobj#sentence#init()
      autocmd FileType textile call textobj#sentence#init()
      autocmd FileType text call textobj#sentence#init()
    augroup END

    augroup litecorrect
      autocmd!
      autocmd FileType markdown,mkd call litecorrect#init()
      autocmd FileType textile call litecorrect#init()
      autocmd FileType text call litecorrect#init()
    augroup END

    let g:languagetool_jar=''
    }}}"



In the last line, insert the path of `languagetool-commandline.jar` file that
you extracted from Language Tool binaries downloaded in previous step.

That's all. You are set. There are a few advanced usage options that you might
be interested in setting up. The plugin documentations and help files are
useful for that purpose. Alternatively, take a look at [my configuration](https://github.com/vivekiitkgp/Dotfiles-vim/blob/vim-plug-2/config/general.vim).

## Preview

- - -
![demo](http://i.imgur.com/cXDCwdE.gif)
- - -
<small> <i> Taken from vim-wordy GitHub repository readme. </i> </small>
