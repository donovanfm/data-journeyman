---
layout: post
title: "The Distribution Within"
blurb: "If you've been reading along and are convinced of the value of modeling your data with a well-defined distribution, then understanding how to know which distribution is a good fit for you data is the important next step."
thumbnail: sigmoids-logo.png
tags: 
  - Curriculum
  - Think Stats
  - Statistics
  - Book
  - IPython
---

After you have some distributions in your data toolbelt, the next logical step is being able to take a data set and to determine how well it can be described by a particular distribution. In this post we'll look at methods of determining whether your data fits a distribution.

The ancillary IPython file is [here](/ipython-notebooks/Distribution Within.ipynb).

###Use Your Eyes

The human brain is really adept at a wide range of data analysis. However, these fleshy computers do come with their own hang ups and miscalibrations. 

So, a decent first step in testing which (if any) distribution is a good fit for your data is to look at it. Does the CDF for your data have a sigmoid shape? Maybe it's a normal distribution. Does it rise quickly then level off as it approaches 1? It could be exponential. Ah, but it could also be a Pareto distribution. Or neither!

While just looking can point you in the right direction, it's definitely not enough to support a claim that your data fits a particular distribution. What's more is that it's immensely useful to have metrics for how well the data fits, since there's always going to be at least some deviation from a perfect distribution. Are you 95% sure that the underlying population conforms to a normal distribution. 99%? Good luck eyeballing that!

Clearly we need some more refined tools to proceed. This post will explore how to determine whether your data fits a given distribution, and in a future post we will explore how to quantify that fit.

###Use Descriptive Statistics

In some cases, distributions have well defined [descriptive statistics](http://www.datajourneyman.com/2014/11/06/probability-and-statistics-terms.html#descriptive-statistics). For example, the normal distribution has a skewness of 0 as well as an excess kurtosis of 0. Calculating these descriptive statistics of your data can give you a quantitative estimate of your data's fit to a normal distribution.

Other distributions that have fixed values for skewness and excess kurtosis are the uniform distribution, with a skewness of 0 and an excess kurtosis of \\(-\frac{6}{5}\\), and the exponential distribution, with a skewness of 2 and an excess kurtosis of 6.

Distributions don't always have fixed values for their descriptive statistics though. More often, these values are parameterizations. For example, the skewness and excess kurtosis of a Pareto distribution is in terms of \\(\alpha\\), and a lognormal distribution is in terms of \\(\sigma\\). For these two distributions, we'll need to take a different approach.

###Use Math

When we just "used our eyes" to guess whether our data fit a distribution, we looked at our data's CDF and compare it to a well know it matched a well-known distribution's CDF. The CDF graph uses linear axes, but what if we manipulated the axes to aid in our analysis?

Working with data, you may have already done something similar to this method. If you have data that grows exponentially, you can plot the x axis on a log scale, which will make your data linear. That's exactly what we're going to do here.

Take the Pareto distribution and plot the complimentary CDF (CCDF), where \\(CCDF(x) = 1 - CDF(x)\\). So the CCDF of a Pareto distribution is 

\\[y = \left(\frac{x}{x_m}\right)^{-\alpha}\\]

Taking the log of both sides, we get the following:

\\[log(y) = -\alpha(log(x) - log(x_m))\\]

So if we plot the CCDF on a log-x, log-y scale, it should be a straight line with slope of \\(-\alpha\\). Below is a graph of data created by Python's ```random.paretovariate``` function, so naturally it is a good fit. ([Get IPython file here.](/ipython-notebooks/Distribution\ Within.ipynb))

![Pareto CCDF; log-log scale](/img/pareto-dist-test.png)

###Use Rankits

In the previous example with the Pareto distribution, we used a log transformation on the x and y axis. But what if we could perform a normal-distribution transformation on the x axis. Or, better yet, a whatever-distribution-we-choose transformation on the x axis. Well, using something called rankits, we can!

[Rankits](http://en.wikipedia.org/wiki/Rankit) are the the (ordered) expected values when you sample a distribution. So, if you pulled 6 values from a normal distribution with \\(\mu = 0\\) and \\(\sigma = 1\\), the expected values would be \\([−1.2672, −0.6418, −0.2016, 0.2016, 0.6418, 1.2672]\\).

Imagine you have a data set of 1,000 samples. You can plot those samples' values on the y-axis and use 1,000 rankits from the distribution to test on the x-axis. If the resulting plot is a straight line, then your data is a good match for that distribution.

Say you need \\(n\\) rankits. You can generate them by creating \\( n \times m\\) randome variables from a distribution, sort them, and then selecting every \\(m\text{th}\\) variable. The reason for this scaling by \\(m\\) is that it generates a better estimation of the rankits, since the more random variables you select, the more closely they will resemble the distribution due to the [Convergence in Distribution](http://www.math.uah.edu/stat/dist/Convergence.html) principle of random variables.

{% highlight python %}
def rankits(n=1000, m=10, distFn=random.normalvariate, distParams=(0,1)):
    """Generate rankits from a distributions.

    Keyword arguments:
    n -- the number of rankits to generate (default 1000)
    m -- the multiplier for more accurate results (default 10)
    distFn -- a function that return a random variable from the distribution (default random.normalvariate)
    distParams -- the parameters to be passed into distFn (default (0,1))
    """
    
    return sorted([distFn(*distParams) for _ in range((n+1)*m)])[m::m]
{% endhighlight %}

Using the ```rankits``` function above, we can generate 1000 values from a normal distribution, an exponential distribution, and a Pareto distribution and compare it to the estimated rankits for each respective distribution. Each trial should result in roughly a straight line.

![Normal Distribution Rankits Plot](/img/rankits-normal.png)
![Exponential Distribution Rankits Plot](/img/rankits-exp.png)
![Pareto Distribution Rankits Plot](/img/rankits-pareto.png)

The first two look good, but the Pareto distribution deviates much more from linear toward the right of the graph. Why? Well, remember that the PDF for a Pareto distribution tends to 0 much slower than the exponential distribution, so the likelihood of large outliers is greater. We should be able to fix this by either generating a larger sample that 1,000 or using a larger multiplier for our rankits. Doing both is probably the right choice, but let's assume we have no more data available. Let's just try upping the rankit multiplier.

After some trial and error with the multiplier value, I finally pushed it up to 5,000, which yielded a pretty good result. 

![Pareto Distribution Rankits Plot With High Rankit Multiplier](/img/rankits-pareto-good.png)

It's very important to note that we might have assumed our data was a poor fit if we hadn't known something about the Pareto distribution -- that it can have outliers which could affect the right side of the rankit plot. So it's very important to understand the properties of a wide range of distributions for this kind of analysis.

