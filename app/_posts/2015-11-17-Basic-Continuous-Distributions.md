---
layout: post
title: "Basic Continuous Distributions"
blurb: "Examining well-known probability distributions will give us a lot to chew on in our path to understanding data. We'll start of with 4 common continuous distributions."
thumbnail: normal-dist-logo.png
tags: 
  - Curriculum
  - Think Stats
  - Statistics
  - Book
  - Distribution Exposition
---

###Continuous Distributions

As a Data Scientist/Analyst, a huge part of the job is to characterize the data you're dealing with. This abstraction step can help you apply functions to your data, since the overall structure has been smoothed out and simplified. Similarly, it can make communicating the shape of your data much easier, since by this characterization you can remove unhelpful noise in the data.

The main method of data characterization is to use a [well-known probability distribution](http://en.wikipedia.org/wiki/List_of_probability_distributions) to describe it. Doing so can add extra insight into your data, help you communicate the structure of your data, and give you a tailored toolset for working with the data. You'll want to be sure your data set is a true fit, but if it is, then there is great benefit to abstracting your data in this way.

In this post, we'll look at 4 common [continuous distributions](http://stattrek.com/probability-distributions/discrete-continuous.aspx).

###The Exponential Distribution

[The Exponential Distribution](http://en.wikipedia.org/wiki/Exponential_distribution) is a good model for events that occur and random, independent intervals at a constant rate for some span of time. In reality, a pure constant rate can be hard to find, but narrowing the time span or considering confounding effects in your analysis can help correct these issues. For example, incoming phone calls to a call center won't come at a constant rate, but probably the incoming calls from 2pm to 4pm on a weekday come close.

The CDF of an exponential distribution is

\\[CDF(x) = 1 - e^{-\lambda \dot x} \\]

and the \\(\lambda\\) parameter defines the shape of the distribution.

[!Exponential Distribution Examples](/img/exponential-dist.png)

The mean of a exponential distribution is \\(\frac{1}{\lambda}\\). Using the call center example from earlier, if phone calls arrive at an average of 1 call per 2 minutes, then the distribution graph (with minutes on the x axis) would match the exponential distribution where \\(\labmda = 0.5\\).

###The Pareto Distribution



###The Normal Distribution



###The Lognormal Distribution

