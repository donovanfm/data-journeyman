---
layout: post
title: "The Santy Clause Problem"
blurb: "In this seasonal take on the classic Monty Hall problem, we'll look at yet another paradoxical result of probability in action."
thumbnail: gift-logo.png
tags: 
  - Statistics
  - IPython
---

###The Problem

In a previous post, we looked a surprising probabilistic result, [the Birthday Problem](). We looked at it logically using the rules of probability, and if that wasn't enough, we then modeled it using [the Monte Carlo method](http://en.wikipedia.org/wiki/Monte_Carlo_method). We'll follow that same line of reasoning for this post, where we look at the Santy Clause problem, which is just my own seasonal twist on the better known [Monty Hall problem](http://en.wikipedia.org/wiki/Monty_Hall_problem).

So, imagine that Santa, for some reason, only has partial knowledge of your year's sleeping, waking, and being bad or good, so he's only able to offer up a probability as to whether you've been naughty or nice. According to his calculations, there's a 33% chance that you've been good, so he offers you a deal: 

He will present you with three bags. Only one of these bags has a gift inside, and the other two have coal in them. However, being the generous man that he is, before he reveals the contents of your bag, he will open one of the other bags that has coal in it, and then allow you to choose to switch to the final remaining bag or to keep the one you originally chose. So the big question is, should you switch bags or not?