---
layout: post
title: "Basic Discrete Distributions"
blurb: "A quick look at some common discrete distributions."
thumbnail: binomial-logo.png
tags: 
  - Statistics
  - Distribution Exposition
---

###Discrete Distributions

In [a previous post](http://www.datajourneyman.com/2015/01/26/Basic-Continuous-Distributions.html), we looked at some basic continuous distributions and their properties. Up until now, we've been talking about discrete distributions, but we haven't taken the time to examine them closely since they are easier to conceptualize at a basic level. However, now we've reached the point where we really do need to go over the basics of this distribution class thoroughly.

###Bernoulli Trials

Anyone who talks about probability and statistics cannot escape speaking of the proverbial coin flip. It is too familiar an event to bypass its intuitional power in describing random events. 

There is a more general, more powerful concept that encapsulates this type of binary outcome event, called a [Bernoulli trial](http://en.wikipedia.org/wiki/Bernoulli_trial). Since the outcome is binary, it is often described in terms of _success_ and _failure_. Unline a fair coin, the success and failure probabilities don't have to be equal. Success is given probability \\(p\\) and failure is given probability \\(q\\) and, logically, \\(q = 1 - p\\).

###Bernoulli Distribution

To make a distribution out of the concept of a Bernoulli trial is very easy. Simply define a random variable \\(X_{Bernoulli}\\) where

\\[X_{Bernoulli} = 
\begin{cases}
    0,& \text{failure}\\cr
    1,& \text{success}
\end{cases}
\\]

The PMF of a Bernoulli Distribution with \\(p = 0.6\\) and \\(q = 0.4\\) would look like this.

![Example Bernoulli Distribution PMF](/img/bernoulli-dist.png)

###Binomial Distribution

The [Binomial Distribution](http://en.wikipedia.org/wiki/Binomial_distribution) takes this idea one step further. It's comprised of a series of Bernoulli trials. A Binomial Distribution has parameters p and n, where p is the probability of success for each Bernoulli trial, and n is the number of trials per sample. So when n = 1, this distribution reverts to a Bernoulli Distribution.

To find the probability of x successes given a Binomial Distribution with n and p, you can use the PMF formula.

\\[PMF_{Binomial}(x) = \binom{n}{x} p^x (1 - p)^{n-x}\\]

If you're not familiar with the [Binomial coefficient](http://en.wikipedia.org/wiki/Binomial_coefficient), it is defined as \\(\binom{n}{x} = \frac{n!}{x!(n-x)!}\\).

Here's a Binomial Distribution data set graphed with n = 25, p = 0.5 after 100,000 data points were generated.

![Example Binomial Distribution PMF, n=25, p=0.5, 100000 data points](/img/binomial-dist.png)

An interesting thing happens as you increase n: this distibution gets closer to a normal distribution. Looking at the generated Binomial Distribution above, it very closely resembles the familiar bell curve. If you've been following the posts up to this point, you should be able to figure out why this is the case. It's due to the Central Limit Theorem. Each data point in a Binomial Distribution is the sum of n samples from a Bernoulli Distribution. We've seen multiple times now that if you take the sum of samples drawn from a distribution (even one as simple as Bernoulli's), then the resulting sampling distribution will approach the normal distribution as the sample size increases.

###Geometric Distribution

For the Binomial Distribution, the x-axis of the PMF represented the number of successful Bernoulli trials out of n. If we define the x-axis as the number of failures until the first success, then we get a whole new discrete distribution, the [geometric distribution](http://en.wikipedia.org/wiki/Geometric_distribution).

\\[PMF_{Geometric}(x) = (1 - p)^x p\\]

So \\(PMF\_{Geometric}(0) = p\\), since the probability of having 0 failures before a success is just going to be equivalent to the probability of getting a success on a single trial. Then, as long as \\(p > 0\\) (since if \\(p = 0\\) then you'll never get a success anyway), \\((1 - p)\\) will be less than 1, and each successive value for \\(PMF_{Geometric}(x)\\) will be decreasing.

![Geometric Distributions with various p parameters](/img/geometric-dist.png)

###Discrete Versus Continuous

The geometric distribution looks a lot like the exponential distribution. The definitions are extremely close – just replace the discrete measure (Bernoulli trials) with a continuous measure (time) and you're still waiting for an event to occur. In fact, you can go from the latter to the former just by applying the floor function. If X is an exponentially distributed random variable, then the geometrically distributed random variable Y can be defined as \\(Y = \lfloor X \rfloor\\).

This process can be done with any distribution. Here's a nice diagram from _Think Stats_ that explains the relationships.

![Distribution Framework: Relationships between Discrete/Continuous and Cumulative/Non-Cumulative](/img/dist-framework.png)

