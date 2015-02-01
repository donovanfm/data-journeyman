---
layout: post
title: "Probability and Statistics Terms"
blurb: "Starting out with <i>Think Stats</i> will require us to cover the preliminary definitions that the book covers."
thumbnail: bar-graph-logo.png
tags: 
  - Curriculum
  - Think Stats
  - Statistics
  - Book
  - Terms
  - IPython
---

###Initial Probability and Statistics Concepts

In this post, we'll take a look at some terms that you probably already know, mixed with some that may be a little more foreign (or maybe just more forgotten). However, I'm going to flip the order in which the material is traditionally presented (_Think Stats_ follows the traditional order). This flipped ordering will allow us to look at some of the most basic concepts (like mean and variance) from a wholistic point of view, using the slightly more advanced concept of Probability Mass Functions.

###Data Representations

####Histogram

The most ubiquitous data representation around is the histogram. It's a representation of how a data set is distributed. A histogram consists of a set of bins, and for each bin an integer representing the number of values falling within that bin. 

Let's take the following data as an example.

\\[
\begin{array}29, 65, 89, 74, 54, 33, 11, 52, 33, 81, 75, 85, 53, 81, 59, 13, 96, 24, 16, 58\end{array}
\\]

A histogram representation would look like this:

\\[
\begin{eqnarray}
 0-9 &:& 0\\cr
 10-19 &:& 3\\cr
 20-29 &:& 2\\cr
 30-39 &:& 2\\cr
 40-49 &:& 0\\cr
 50-59 &:& 5\\cr
 60-69 &:& 1\\cr
 70-79 &:& 2\\cr
 80-89 &:& 4\\cr
 90-99 &:& 1\\cr
\end{eqnarray}
\\]

And graphically, like this:

![Histogram Example](/img/histogram_example.png)

Choosing bins isn't always straightforward, but you should try to choose them so that they're not misleading. For instance, how big should each bin be? Your choice can make a big difference in the visualization. Most of the time, bins should be equal in size, but there are some circumstances when that's not optimal. See [this post](http://blog.amplitude.com/2014/08/06/optimal-streaming-histograms/) for an interesting take on that problem.

####Probability Mass Function

A [Probability Mass Function (PMF)](http://books.google.com/books?id=ZfRyBS1WbAQC&pg=PT105#v=onepage&q&f=false) is similar to a histogram, but instead of using frequencies on the y-axis, probabilities are used. Therefore, a PMF can derived by normalizing a data set's histogram. Note: This normalization step is a must when you're comparing two histograms of different sample sizes. 

For the same data set we used earlier, here is the PMF:

![Probability Mass Function Example](/img/pmf_example.png)

####Probability Density Function

A [Probability Density Function (PDF)](http://mathworld.wolfram.com/ProbabilityFunction.html) is analogous to a PMF, but it corresponds to a continuous distribution (whereas our previous examples have been discrete). It's called a density function because, since there are an infinite number of outcomes, the probability at any single point is 0, so it really only makes sense to talk about the probability of a value range. We will delve further into PDFs in future posts when we look at examples of continuous distributions.

####Cumulative Distribution Function

A [Cumulative Distribution Function (CDF)](http://en.wikipedia.org/wiki/Cumulative_distribution_function) represents the probability that a random variable, X, will be equal _or less to_ a particular value for a given distribution.

For a discrete distribution, it's defined as

\\[P(X \le x) = \sum_{x_i \le x} p(x_i) \\]

and for a contintuous distribution, it's defined as

\\[P(X \le x) = \int_{-\infty}^x f_X(t) dt \text{, where } f_X \text{ is the distribution's PDF.} \\]

The CDF for our previous example can be calculated with numpy's cumsum function, and it looks like this:

![Cumulative Distribution Function Example](/img/cdf_example.png)

<div class='well'>
<a href='/ipython-notebooks/Probability Terms.ipynb'>Download</a> the IPython Notebook that created the preceding graphs.
</div>

###Descriptive Statistics

Descriptive Statistics are a way of characterizing a distribution by reducing them down to some set of parameters. These terms are extremely common in statistics, so chances are you're familiar with many of them, but we can get a deeper sense of them by expressing them all in terms of the data representations we just discussed.

####Mean

We're all familiar with calculating the mean of a data set (sum over length), but using PMFs and PDFs, we can get at a much more precise definition. 

Let \\(P(x)\\) be defined as a PMF for a discrete distribution over the values \\(x_1, x_2, ...\\), then for a random variable, \\(X\\), the expected value will be 

\\[E(X) = \sum_{\forall i} x_i \ P(x_i) = \mu\\]

Likewise, for a continuous distribution with \\(P(x)\\) as its PDF,

\\[E(X) = \int_{-\infty}^\infty x \ P(x) \ dx = \mu\\]

These definitions are more general than simply taking the arithmetic mean of a data set. In fact, when working with a raw data set, dividing the sum by the length is actually using the above formula for discrete distributions, where each data point has a probability of \\(\frac{1}{n}\\). However, if you don't have the raw data for a distribution, but you have a function to define its PMF (or PDF), then you can still use these functions to determine the mean.

####Mode

The most frequent value in the data. In a PMF or PDF, it will correspond to this highest point in the graph.

####Percentile

For a value \\(x\\), its percentile rank is the percent of values that are less than or equal to \\(x\\). From a CDF, it's easy to glean percentile ranks. For the \\(n\\)th percentile, look for where the point at which the CDF crosses \\(\frac{n}{100}\\) on the y-axis.

####Median

While there are other definitions for median out there, the one we'll be using is the 50th percentil rank. So, on a CDF, it's where 0.5 is crossed on the y-axis. Using this definition, the area under the curve of the PMF (or PDF) to the left of the median and to the right are equal. In these terms, then, probability mass is analogous to the center of mass.

####Central Moment

Thinking of the median as the center of probability mass makes an interesting connection to the physical world, and we can take that connection further. Similar to [moments in physics](http://en.wikipedia.org/wiki/Moment_(physics)), a [moment in mathematics](http://en.wikipedia.org/wiki/Moment_(mathematics)) describes the distribution of mass (in this case, probability mass). It will be beneficial to talk about moments centered around the mean, called [central moments](http://www.cs.gmu.edu/~menasce/cs700/files/ProbabilityandDiscreteProbabilityDistributions.pdf). 

The \\(k\\)th central moment is defined as

\\[E[(X - \mu)^k] = \sum_{\forall i} (X_i - \mu)^k \times P(X_i)\\]

The 0th central moment is just the sum total of the mass, and since we're talking probabilities here, that is always going to be 1. 

The 1st central moment is always 0 because it calculates where the mean is in relation to the mean, somewhat tautologically. 

So far, central moments seem like dull descriptors, but things start getting interesting with the 2nd central moment.

####Variance and Standard Deviation

The [variance](http://en.wikipedia.org/wiki/Variance) of a data set describes how spread out the data points are from each other. It's always positive. A variance of 0 represents a data set where all data points are identical, and the greater the variance, the more the spread.

Variance is the second central moment, which is defined as

\\[Var(X) = \sigma^2 = \sum_{\forall i} (X_i - \mu)^2 \times P(X_i)\\]

Since variance is not in the same units as the mean and the data itself, standard deviation is often used instead, which is just the square root of variance.

####Skewness

Though the exact relationship is hard to pin down, [skewness](http://en.wikipedia.org/wiki/Skewness) is roughly a measure of distribution symmetery, with a perfectly symmetric distribution having a skew value of 0. It represents the relationship between the left tail and the right tail of the data. The tails of the data are determined by how far data points stretch out below or above the central tendency of the data. If the left tail is longer, the skew will be negative, and if the right tail is longer, the skew will be positive.

![Right Skewness Versus Left Skewness](/img/skewness_example.png)

Skewness is defined in terms of the third central moment as

\\[Skew(X) = \frac{\mu_3}{\sigma^3}\\]

where \\(\mu_3\\) is the third central moment and \\(\sigma\\) is standard deviation.

####Kurtosis

The least well known of the descriptive statistics we'll be discussing (but unarguably the one with the coolest name) is [kurtosis](http://en.wikipedia.org/wiki/Kurtosis). It is a measure of "peakedness" or of the tails' weights.

This image from [a paper](http://www.columbia.edu/~ld208/psymeth97.pdf) by Lawrence T. DeCarlo illustrates a distribution with a positive kurtosis on the left and a negative kurtosis on the right (as compared with a normal distribution, which has a kurtosis of 0 and is in both figures as a dotted line).

![Positive Kurtosis Versus Negative Kurtosis](/img/kurtosis_example.png)

Kurtosis has multiple definitions, but the most common (sometimes called excess kurtosis) is defined as 

\\[Kurt(X) = \frac{\mu_4}{\sigma^4} - 3\\]

where \\(\mu_4\\) is the fourth central moment and \\(\sigma\\) is again the standard deviation.

The minus 3 might look a little arbitrary, but it's to give a normal distribution a kurtosis of 0.

####Beyond

There's nothing stopping us from continuing down this path of central moments ad infinitum, but I think we've already explored enough. One interesting thing to note, though, is that "[f]or a bounded distribution of mass or probability, the collection of all the moments (of all orders, from 0 to ∞) uniquely determines the distribution." ([From Wikipedia](http://en.wikipedia.org/wiki/Moment_(mathematics)))

All of the descriptors we've covered can be very useful, depending on the circumstance. For instance, if you know you have a normal distribution, all you need is the mean and the standard deviation to define the distribution. If you're not sure if you have a normal distribution, you can calculate the skewness and excess kurtosis. If both of these values are close to 0, then you probably have a normal distribution.

We will definitely be using all of these data representations and descriptive statistics in future posts, and any credible data scientist should have a firm grasp of them.

