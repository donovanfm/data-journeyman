---
layout: post
title: "Comparing Populations"
blurb: "We've looked at confidence intervals and hypothesis tests by comparing a sample to an entire population (with well defined parameters), but what changes if you replace that population with another sample?"
thumbnail: mu-diff-logo.png
tags: 
  - Curriculum
  - Inferential Stats
  - Statistics
  - Video
---

###Mean and Variance of Sums of Random Variables

Given two independent random variables, X and Y, let's define a new random variable, Z, which is defined as follows:

\\[Z = X + Y\\]

What do we know about the mean and variance of Z?

We can figure out the mean of Z simply by the rules of expected values.

\\[\mu_z = E[Z] = E[X + Y] = E[X] + E[Y] = \mu_x + \mu_y\\]

So we have the mean of Z is just the mean of X plus the mean of Y. This makes sense because, on average, the values for X will center around \\(\mu_x\\) and the values for Y will center around \\(\mu_y\\) and both variable are _independent_ of each other. The fact that they're independent means that, given enough samples of Z, the variation of X away from its mean won't have any influence on the variation of Y away from its mean, and values of Z will be centered around \\(\mu_x + \mu_y\\).

The variance for Z can be figured out by using [its expected value definition](http://www.datajourneyman.com/2015/03/09/correlation.html) as well.

\\[
\begin{eqnarray}
\sigma_z^2 &=& E[Z^2] - (E[Z])^2\\cr
&=& E[(X + Y)^2] - (E[X + Y])^2\\cr
&=& E[X^2 + 2XY + Y^2] - ((E[X])^2 + 2E[X]E[Y] + (E[Y])^2)\\cr
&=& E[X^2] + 2E[X]E[Y] + E[Y^2] - (E[X])^2 - 2E[X]E[Y] - (E[Y])^2\\cr
&=& E[X^2] - (E[X])^2 + E[Y^2] - (E[Y])^2\\cr
&=& \sigma_x^2 + \sigma_y^2
\end{eqnarray}
\\]

This result is less intuitive, but the idea that as either the variance of X or the variance of Y increases (or as both variances increase), the resulting variance of Z will increase with it.

###Mean and Variance of Differences of Random Variables

Now, using the same independent random variables, X and Y, let's define Z to be their difference.

\\[Z = X - Y\\]

Calculating the mean works the same way as before.

\\[\mu_z = E[Z] = E[X - Y] = E[X] - E[Y] = \mu_x - \mu_y\\]

For the same reasons as before, this result makes sense.

The variance, however, doesn't quite follow the same pattern.

\\[
\begin{eqnarray}
\sigma_z^2 &=& E[Z^2] - (E[Z])^2\\cr
&=& E[(X - Y)^2] - (E[X - Y])^2\\cr
&=& E[X^2 - 2XY + Y^2] - ((E[X])^2 - 2E[X]E[Y] + (E[Y])^2)\\cr
&=& E[X^2] - 2E[X]E[Y] + E[Y^2] - (E[X])^2 + 2E[X]E[Y] - (E[Y])^2\\cr
&=& E[X^2] - (E[X])^2 + E[Y^2] - (E[Y])^2\\cr
&=& \sigma_x^2 + \sigma_y^2
\end{eqnarray}
\\]

So when looking at the difference of two random variables, the variance is still the sum of each individual random variable's variance. This actually does make sense, though, because if you have two independent random variables, their variances will not cancel each other out, just like we reasoned earlier. Otherwise, they would have a bias toward non-independence.

###Mean and Variance of Differences of Sampling Means Distributions

Now let's look at how to calculate the mean and variance of Z where X and Y are not just any distribution, but a [sampling distribution of the sampling mean](http://www.datajourneyman.com/2015/03/16/inferential-statistics.html). Given X has a mean and variance of \\(\mu_x\\) and \\(\sigma_x^2\\), and Y has a mean and variance of \\(\mu_y\\) and \\(\sigma_y^2\\), and given a large enough sample sizes (n and m, respectively), we've seen the following to be true.

\\[
\begin{eqnarray}
\mu\_{\bar x} = \mu_X, & & & \sigma\_{\bar x}^2 = \frac{\sigma_x^2}{n}\\cr
\mu\_{\bar y} = \mu_Y, & & & \sigma\_{\bar y}^2 = \frac{\sigma_y^2}{m}
\end{eqnarray}
\\]

So, define Z to be \\(\bar X - \bar Y\\).

\\[
\begin{eqnarray}
\mu_z &=& \mu\_{\bar x} - \mu\_{\bar y} &=& \mu_x - \mu_y\\cr
\sigma_z^2 &=& \sigma\_{\bar x}^2 - \sigma\_{\bar y}^2 &=& \frac{\sigma_x^2}{n} + \frac{\sigma_y^2}{m}
\end{eqnarray}
\\]

###Using These Concepts in Practice

In previous posts, when we did exercises on [confidence intervals](http://www.datajourneyman.com/2015/04/06/confidence-intervals.html) and [hypothesis testing](http://www.datajourneyman.com/2015/04/13/hypothesis-testing.html), we compared a sample to the true parameters of the overall population. But oftentimes, you are interested in the differences (or lack thereof) between two samples. For instance, if you poll 100 US Democrats and 100 US Republicans, you will need these methods to determine if the two groups statistically differ in their answers.

In the Inferential Statistics section of Khan Academy that we've been following, Sal covers both [confidence intervals](https://www.khanacademy.org/math/probability/statistics-inferential/hypothesis-testing-two-samples/v/confidence-interval-of-difference-of-means) and [hypothesis testing](https://www.khanacademy.org/math/probability/statistics-inferential/hypothesis-testing-two-samples/v/hypothesis-test-for-difference-of-means). He then goes on to give examples of the Bernouli Distribution specifically in this context. The examples are worth a watch to see how these techniques in this post are used in practice.
