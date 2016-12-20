---
layout: post
title: "The Santy Claus Problem"
blurb: "In this seasonal take on the classic Monty Hall problem, we'll look at yet another paradoxical result of probability in action."
thumbnail: gift-logo.png
tags: 
  - Statistics
  - IPython
---

###The Problem

In an earlier post, we looked a surprising probabilistic result, [the Birthday Problem](http://www.datajourneyman.com/2014/09/06/birthday-paradox.html). We looked at it logically using the rules of probability, and if that wasn't enough, we then modeled it using [the Monte Carlo method](http://en.wikipedia.org/wiki/Monte_Carlo_method). We'll follow that same line of reasoning for this post, this time looking at the Santy Claus problem, which is just my own seasonal twist on the better known [Monty Hall problem](http://en.wikipedia.org/wiki/Monty_Hall_problem).

So, imagine that Santa, for some reason, only has partial knowledge of your year's sleeping, waking, and being bad or good, so he's only able to offer up a probability as to whether you've been naughty or nice. According to his calculations, there's a 33% chance that you've been good, so he offers you a deal: 

<img alt="Santy Claus Problem with Three Bags" src="/img/coal-coal-gift.png" class="full-size">

He will present you with three bags. You must pick one bag to open, and you'll receive its contents. Only one of these bags has a gift inside, and the other two have coal in them. However, being the generous man that he is, before he reveals the contents of your bag, he will open one of the other bags that has coal in it, and then allow you to choose to switch to the final remaining bag or to keep the one you originally chose. So the big question is, should you switch bags or not?

Most people, myself included, when presented with this problem for the first time think it doesn't matter whether you switch or stay. However, the chances that you picked a coal bag to start with is 67%. Logically then, after Santa reveals one of the bags containing coal, there is a 33% chance that your current bag has a gift and a 67% chance that the other bag has the gift. So you double your chances by switching.

This result does seem paradoxical. But the key point to realize is that Santa knows the contents of all of the bags, and he will only open a bag that contains coal. In doing so, he changes the probabilities of the remaining bag by inserting information into the game. The thing that made this clear to me was running two simulations (run them yourself in the iPython notebook [here](/ipython-notebooks/santy_claus.ipynb)). 

The first simulation follows the original formulation of the problem, where Santa only reveals a bag with coal in it. Running 10,000 simulations where you stick with your original choice yields a 33.65% chance of winning. Running another 10,000 simulations where you switch bags yields a 67.07% chance of winning. These percentages are in line with our theoretic analysis.

In the second simulation, the rules are changed so that Santa doesn't know the bags' contents. That means he could reveal the gift by mistake. Santa's reveal doesn't add any information to the game, because he could possibly reveal the gift, whereupon you lose the game immediately, since you know your bag cannot contain the gift. In fact, careful examination of this simulation's code reveals that it's equivalent to Santa not revealing a bag at all. Naturally, then, no matter whether we decide to not switch or we do decide to switch, the percentages of wins are 34.15% and 33.54% respectively after 10,000 trials of each strategy.

This exercise really helped me understand the paradoxical result of the Monty Hall (ahem, I mean Santy Claus) Problem. Hopefully it helped your understanding as well. And after all, isn't knowledge the greatest gift of all? *cue sappy Christmas special music*