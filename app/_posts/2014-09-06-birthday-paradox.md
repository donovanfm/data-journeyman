---
layout: post
title: "Birthday Paradox"
blurb: "In honor of my birthday weekend, here's a look at one of the first unintuitive statistics results I ever encountered, which just so happens to deal with birthdays."
thumbnail: tool-logo.png
tags: 
  - Statistics
  - iPython
---

###The Paradox

Simply stated, the [birthday paradox](http://en.wikipedia.org/wiki/Birthday_problem) says that given a soccer team of 23 people, there is over a 50% chance of two players sharing a birthday.

The first time I heard this statement, I was certain that someone had made a mistake. I couldn't quite grasp how such a thing could be true. I must have been an arrogant teenager to think that my slight unease over this surprising idea trumped the countless smart, qualified statisticians' acceptance of it.

The important distinction here that helped me over the skeptical hump is that we're not fixing a date, and then comparing 23 people's birthdays to it. Instead, we're looking at each pair of people individually, so the actual date of the shared birthday is not fixed.

This post explores the nuances of this paradox. For simplicity, the remainder of this post will ignore Leap Day (February 29) birthdays. And it will also assume that each birth date is equally likely, which in reality [is not the case](http://gawker.com/5910778/infographic-illustrates-most-common-birthdays-baby-making-days).

###Testing This With Data

If only I had had IPython as a teenager, I would have been able to convince myself much more quickly that the birthday paradox is true. 

Download the IPython Notebook for this post [here](/ipython-notebooks/Birthday\ Paradox.ipynb).

###Guessing a Birthday

Just like you (and my teenage intuition) would expect, the probability of guessing a birthday out of a group of 23 is \\(23/365\\), or \\(0.06301\\). But this assumes that no one in the group shares a birthday, which, as the paradox states, is over a 50% chance. It would get very complicated to calculate the probability this way.


\\[\dfrac{23}{365} \times P(\text{ no shared birthdays }) + \goodbreak \dfrac{22}{365} \times P(\text{ 2 shared birthdays }) + \goodbreak \dfrac{21}{365} \times P(\text{ 3 shared birthdays }) + \ldots\\]


So a better way to find the probability of guessing a birthday from a group would be to subtract the probability of _not_ guessing a correct birthday from 1. Not guessing a correct birthday would be the equivalent of tossing an extremely biased coin 23 times, or (364/365)<sup>23</sup>, so the probability of guessing a correct birthday is 1 - (364/365)<sup>23</sup>, or 0.06115.

If you're still feeling skeptical, then we can generate trials and test this out with the power of data. First, generate a list of 23 integers between 0 and 364 (inclusive), each integer value representing a date of the year.

\\[
\begin{array}
133, 191, 212, 68, 133, 148, 164, 82,\\\\
192, 172, 22, 352, 13, 196, 86, 335,\\\\
308, 87, 355, 51, 291, 11, 353
\end{array}
\\]

Now we can run trials where we generate a random number (our guess) and see if it matches any birthdays in the list. The more trials we run, the closer we should get to the above probability. The following graph shows the convergence of the computer probability over a growing number of guesses.

![Guessing Birthdays Graph](/img/guessing-birthdays.png)

One thing you'll notice about the above graph is that is converges just over 6% instead of 6.3% like we calculated earlier for guessing from a group of 23 fixed birthdays. Why is that?

Well, look closely at the list of birthdays and you'll notice that the value 133 is present twice. After all, since we generated these numbers randomly, the birthday paradox states that there was over a 50% that there would be a duplicate. So really we were guessing out of a group of 22 distinct birthdays, and \\(22/365 = 0.06027\\), which is just over 6%.

If we generated a new list of birthdays, and there were no duplicates, then we could run the trials again and it should converge on 6.3%.

Does it feel like a party yet?

![Are we having fun yet?](/img/having-fun-yet.gif)

###Pairs of Teammates

The actual problem to solve with the birthday paradox, though, is not the probability of guessing a correct birthday, but the probability that at least two people in the group share a birthday.

Again, finding this probability is more easily done but first finding the probability that no one in the group shares a birthday. Let's take each person in the group one by one. The first person can have any birthday, so the probability that his/her birthday doesn't violate the assumption is 1. The second person can have any birthday except for the first person's, so that probability is 364/365. The third person can have any birthday that doesn't match the first or second person's birthday (which aren't the same in this scenario), so the probability is 363/365. And so on.

\\[
\begin{eqnarray}
&P&(\text{ no shared birthdays  }) \\\\
&=& \dfrac{365}{365} \times \dfrac{364}{365} \times \dfrac{363}{365} \times \ldots \times \dfrac{343}{365}\\\\
&=& 0.4927
\end{eqnarray}
\\]

\\[
\begin{eqnarray}
&P&(\text{ at least 1 pair of shared birthdays })\\\\
&=& 1 - P(\text{ no shared birthdays })\\\\
&=& 0.5073
\end{eqnarray}
\\]

So, that demonstrates that there is over a 50% chance of two players sharing a birthday. Now, lets run some trials just to assuage our lingering skepticism.

For these trials, we'll generate a list of groups' birthdays. We will increase the number of groups we consider and put that sample size on the x axis. Then we'll run through all of the groups to determine how many groups have at least one pair of matching birthdays. We will plot that percentage on the y axis.

![Birthday Problem](/img/birthday-problem.png)

The range of percentages on the entire graph is only about 3 percentage points, but it's still clear that as the sample sizes increase, the probability starts converging between 50 and 51 percent, which is in line with our calculations above.

###Beyond Soccer Teams

When we originally stated the problem, we used a soccer team of 23 players. But what happens if you allow that number to vary? What is the probability of 10 people having a pair of matching birthdays? What about 30? 50? 100? 1000?

Well, the problem is easy to solve if there are 366 people. Based on the [pigeonhole principle](http://en.wikipedia.org/wiki/Pigeonhole_principle), at least two people _must_ share a birthday, so the probability is 1. Similarly, it's easy to solve for a group of 1. The probability would be 0.

So, what about groups of size 2 to 365?

One option here is to calculate each probability by hand like we did above for 23 people, but that would be agonizing. Another option would be to construct an equation, which would the most correct thing to do, but that seems tedious when compared to our third option: run some trials and let the data do the work for us. 

![Birthday Problem On Different Group Sizes](/img/birthday-problem-group-size.png)

We can tell a lot looking at this graph. A group of 2 has a next-to-zero chance of a match. At 40 people, the probability rises to over 80%. Then at 60 people, the probability is all but 100%. We could get even more precise information by printing out the actual calculated probabilities for each group size. 

After writing a quick program and letting my computer grind on it for about 5 minutes, I came up with that beauty of a graph, and I barely even had to lift a finger. Thanks, computer!

![Bender High Five](/img/bender-high-five.gif)

###N Matching Birthdays

So far, we've only looked at the probability of a group having 2 or more birthdays. What about the probability of having exactly 2 matching birthdays? Or exactly 5? Or everyone having a matching birthday? It's not hard to modify our computations to generalize that piece of that problem.

Let's set the If we run a million trials to see how many birthday matches we get 

![Likelihood of N Matching Birthdays in a Group of 23](/img/n-matching-birthdays.png)

\\[
\begin{eqnarray}
 0 &:& 294007\\\\
 2 &:& 379698\\\\
 3 &:& 10612\\\\
 4 &:& 212998\\\\
 5 &:& 10870\\\\
 6 &:& 69195\\\\
 7 &:& 4931\\\\
 8 &:& 14091\\\\
 9 &:& 1224\\\\
 10 &:& 1948\\\\
 11 &:& 191\\\\
 12 &:& 194\\\\
 13 &:& 25\\\\
 14 &:& 14\\\\
 15 &:& 1\\\\
 16 &:& 1\\\\
\end{eqnarray}
\\]



###Birthday Attack

