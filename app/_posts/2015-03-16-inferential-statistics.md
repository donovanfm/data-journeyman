---
layout: post
title: "Inferential Statistics"
blurb: "Moving on from <i>Think Stats</i>, we'll apply many of its probability concepts by looking into the Inferrential Statistics curriculum on Khan Academy."
thumbnail: inf-stats-logo.png
tags: 
  - Curriculum
  - Inferential Stats
  - Statistics
  - Video
  - Distribution Exposition
---

###Inferential Statistics on Khan Academy

Since we finished _Think Stats_ in our last post, the next curriculum resource we'll use is Khan Academy's [Inferential Statistics video lectures](https://www.khanacademy.org/math/probability/statistics-inferential). We will dig deeper into the normal distribution and the central limit theorem. Then, in future posts, we will look at a variety of hypothesis testing methods (a chapter that I left out in _Think Stats_, since Khan Academy goes into more detail on the subject).

Inferrential statistics is a huge part of data science, since so much of the job is inferring relationships in the data we have to work with. According to Salman Khan himself, "[A]most everything we do in inferential statistics, which is essentially making inferrences on data points, is to some degree based on the normal distribution." So let's give that distribution another look.

###The Normal Distribution Revisited

We've seen in previous posts the importance and ubiquity of the normal distribution. Therefore, the first few sections of _Inferential Statistics_ should be mostly review, but they do offer a chance to explore a little further into the basic concepts around the normal distribution.

####Z-Scores

A common way to talk about a data point in a normal distribution is to talk about its [z-score](http://en.wikipedia.org/wiki/Standard_score) (aka standard score). For a given data point, \\(x_i\\), the z-score represents how many standard deviations from the mean \\(x_i\\) is. The z-score for \\(x_i\\) can be calculated by 

\\[z_i = \frac{(x_i - \mu)}{\sigma}\\]

So a if \\(z_1 = 1\\), then \\(x_1\\) is 1 of its distribution's standard deviations more than its distribution's mean. If \\(z_2 = -2.5\\), then \\(x_2\\) is two and a half standard deviations less than the mean. Logically then, if you're dealing with a standard normal distribution (where \\(\mu = 0\\) and \\(\sigma = 1\\)), then \\(z_i = x_i\\).

Once you know the z-score of x, you can find many probability ranges related to x by using a [z-score calculator](http://www.wolframalpha.com/input/?i=z+score+calculator).

####The Normal PDF

When we looked at [our first handfull of continuous normal distributions](http://www.datajourneyman.com/2015/01/26/Basic-Continuous-Distributions.html), I didn't present a formula for the normal PDF or CDF like I did for the other distributions. However, now that we're a little more comfortable with the normal distribution, I think it's time to face it head on. Brace yourself. An onslaught of Greek letters is coming.

\\[PDF_{normal}(X) = \frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{(x - \mu)^2}{\sigma^2}}\\]

With only a little rearranging, we can get

\\[PDF_{normal}(X) = \frac{1}{\sqrt{2 \pi \sigma^2}} e^{-\frac{1}{2}(\frac{x - \mu}{\sigma})^2}\\]

This version is a little easier to wrap your head around. The fraction in front is a normalizing factor based on standard deviation (and somehow, \\(\pi\\), without which it really wouldn't feel like a math party) and the exponential term looks a lot like a z-score. So it's really not as bad as it looks at first glance.

We can keep going by substituting in the z-score and using the property \\(a^{bc} = a^{c^b}\\)

\\[
\begin{eqnarray}
PDF_{normal}(X) &=& \frac{1}{\sqrt{2 \pi \sigma^2}} (e^{z^2})^{-\frac{1}{2}}\\cr
&=& \frac{1}{\sqrt{ 2 \pi \sigma^2 e^{z^2} }}
\end{eqnarray}
\\]

So, \\(\frac{1}{\sqrt{ 2 \pi \sigma^2} }\\) is the  normalizing factor, and \\(\frac{1}{e^{z^2}}\\) is centered around 0, where its maximum is, decreasing in a bell-curved way as you move in either the positive or negative direction.

All of this rearranging is good for intuition, but you'll still probably see the PDF most commonly written in the original form above. Knowing all of its possible forms is extremely useful for understanding, though.

###The Central Limit Theorem Revisited

On the central limit theorem, Salman Khan says it is "easily one of the most fundamental and profound concepts in statistics – and maybe in all of mathematics." We've seen the central limit theorem before, but it's important enough to warrant a second, deeper look.

Recall that according to the central limit theorem, if you take many samples of a large enough size, compute the sums (or averages) of each sample, and plot the results, the resulting distribution will be normal.

####Sampling Distribution of the Sample Mean

In [this post](http://www.datajourneyman.com/2015/01/26/Basic-Continuous-Distributions.html) where we looked at the central limit theorem, we sampled from a uniform distribution to show the basic idea behind the central limit theorem. We took 10,000 samples of size 100. 

Khan uses a [tool from onlinestatbook](http://onlinestatbook.com/stat_sim/sampling_dist/index.html) to use a less natural made-up distribution to prove the point. Here are some examples from that tool.

#####Normal Distribution

<img alt="Central Limit Theorem Example from Normal Parent Population" src="/img/clt-normal.png" class="full-size">

#####Uniform Distribution

<img alt="Central Limit Theorem Example from Uniform Parent Population" src="/img/clt-uniform.png" class="full-size">

#####Skewed Distribution

<img alt="Central Limit Theorem Example from Skewed Parent Population" src="/img/clt-skewed.png" class="full-size">

#####Custom Distribution

<img alt="Central Limit Theorem Example from Custom Parent Population" src="/img/clt-custom.png" class="full-size">

In each figure, the top distribution is the original distribution (or "Parent Population"), and the bottom is called the "Sampling Distribution". The full name to use for these sampling distributions is "Sampling Distribution of the Sample Mean", because each data point in the Sampling Distribution is the mean of the sample we pulled from the original distribution. We could have taken any descriptor of each sample: median, mode, range, variance, kurtosis. In fact, if you play around with the onlinestatbook tool, you can substitute some of these descriptors in for the mean and see what you get.

You'll notice that all of the sampling distributions of the sample mean are very close to a normal distribution. That's due to the central limit theorem. If you look at the other descriptors' sampling distributions (e.g., the sampling distribution of the sample median), you are not guaranteed that it will be normal.

Additionally, the mean of the sampling distribution of the sample mean is the same as the mean of the original distribution. Each of the 8 distributions above has its mean in blue, so you can compare each pair of distributions to verify that that's the case.

####Standard Error of the Mean

For all of the sampling distributions above, we used a sample size of 5. You may have noticed that not all of the sampling distributions were perfectly normal. As you let the sample size approach infinity, your sampling distribution of the sample mean will be closer and closer to a normal distribution. The number of iterations (10,000) we used to illustrate the sampling distribution of the sample mean doesn't change the underlying sampling distribution, just our ability to represent it; but the choice of sample size does change the underlying sampling distribution.

Here are the sampling distributions of the sample mean for sample sizes of 10, 16, 20, and 25 using the custom distribution from above as the parent population. (All representations use 10,000 iterations, i.e. 10,000 data points).

#####N = 10

<img alt="Central Limit Theorem Example with N equal to 10" src="/img/clt-n-10.png" class="full-size">

#####N = 16

<img alt="Central Limit Theorem Example with N equal to 16" src="/img/clt-n-16.png" class="full-size">

#####N = 20

<img alt="Central Limit Theorem Example with N equal to 20" src="/img/clt-n-20.png" class="full-size">

#####N = 25

<img alt="Central Limit Theorem Example with N equal to 25" src="/img/clt-n-25.png" class="full-size">

So, as the sample size increases, each successive distribution approaches closer to a true normal distribution, but there's another trend that's even more visible: the standard deviation of each successive distribution decreases. This value would have a really long name if we didn't rename it because it would be "the standard deviation of the sampling distribution of the sample mean", but even statisticians have limits, so we call this value "the standard error of the mean", and it's represented by \\(\sigma_{\bar x}\\). If the original distribution's standard deviation is \\(\sigma\\), then

\\[\sigma_{\bar x} = \frac{\sigma}{\sqrt n}\\]

An interesting conclusion comes out of this formula: the standard deviation of the sampling distribution is always equal to or less than the original distribution's standard deviation. If our sample sizes are 1, then our sampling distribution will look extremely close to the original distribution, since our data points come directly from the original. And in that case, \\(\sigma_{\bar x} = \sigma\\). As your sample size grows, the standard error of the mean will decrease.

Here are the standar errors of the mean for the above sampling distributions.

\\[\sigma_{\bar x, n = 10} = 2.71\\]

\\[\sigma_{\bar x, n = 16} = 2.14\\]

\\[\sigma_{\bar x, n = 20} = 1.92\\]

\\[\sigma_{\bar x, n = 25} = 1.72\\]

Say we kept increasing the sample size until we had a sample that included every member of the original distribution. Well the standard deviation of our sampling distribution would be very small at that point. This makes total sense because if we sampled every single member of the original distribution, we would expect our sample mean to be equal to the original distribution's mean every time we took this gargantuan sample.

###Sampling Distribution Example Problem

This concept of standard error of the mean and sampling distributions in general is central to data science because, like I've said, you're almost always going to be looking at a sample of a population. So if you need more explanation than this post gives, check out all of the videos on the Khan Academy website in the [normal distribution](https://www.khanacademy.org/math/probability/statistics-inferential/normal_distribution/v/introduction-to-the-normal-distribution) and [sampling distribution](https://www.khanacademy.org/math/probability/statistics-inferential/sampling_distribution/v/central-limit-theorem) sections.

If you're good with these concepts, I highly recommend watching Salman Khan go through a [textbook example of sampling distributions](https://www.khanacademy.org/math/probability/statistics-inferential/sampling_distribution/v/sampling-distribution-example-problem) to see these concepts in use.
