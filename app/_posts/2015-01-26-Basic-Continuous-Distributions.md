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

###The Uniform Distribution

[The Uniform Distribution](http://en.wikipedia.org/wiki/Uniform_distribution_%28continuous%29) is the easiest distribution to understand. For all valid values of the distribution, the probibility is the same. If the minimum value is \\(a\\) and the maximum value is \\(b\\), then the CDF will look like this:


\\[CDF(x) = \\]
\begin{eqnarray}
&0& \text{ }\text{ }\text{ for }\text{ }\text{ } &x& < a \\\\ 
&\frac{x - a}{b - a}& \text{ }\text{ }\text{ for }\text{ }\text{ } &a& \le x < b \\\\ 
&1& \text{ }\text{ }\text{ for }\text{ }\text{ } &x& \ge b  
\end{eqnarray}



![Uniform Distribution CDF Examples](/img/uniform-cdf.png)

The discrete version of this distribution is all too common in probability lectures. Just think back to all of those coin flips, die rolls, and card draws. As the number of outcomes grows beyond 2, 6, and 52, however, it can be considered continuous at a certain point. You might say that even 1,000,000 discrete outcomes would not a continuous distribution make, but considering that in data science we are usually measuring real-world values, and since our measurements are not infinitely accurate, there will necessarily be some level of discretization in nearly everything we do anyway.

###The Exponential Distribution

[The Exponential Distribution](http://en.wikipedia.org/wiki/Exponential_distribution) is a good model for events that occur and random, independent intervals at a constant rate for some span of time. In reality, a pure constant rate can be hard to find, but narrowing the time span or considering confounding effects in your analysis can help correct these issues. For example, incoming phone calls to a call center won't come at a constant rate, but probably the incoming calls from 2pm to 4pm on a weekday come close.

The CDF of an exponential distribution is

\\[CDF(x) = 1 - e^{-\lambda x} \\]

and the \\(\lambda\\) parameter defines the shape of the distribution.

![Exponential Distribution CDF Examples](/img/exponential-cdf.png)

The mean of a exponential distribution is \\(\frac{1}{\lambda}\\). Using the call center example from earlier, if phone calls arrive at an average of 1 call per 2 minutes, then the distribution graph (with minutes on the x axis) would match the exponential distribution where \\(\lambda = 0.5\\).

###The Pareto Distribution

[The Pareto Distribution](http://en.wikipedia.org/wiki/Pareto_distribution) looks similar to the exponential distribution, but it has a heavier tail, meaning that as you move along the x-axis of the PDF, the probabilities don't shrink as rapidly (meaning that the CDF doesn't trend to 1 as rapidly). The reason for that is clear when looking at the CDF for this distribution. Unlike the exponential which approaches 1 at (_gasp!_) an exponential rate, the Pareto distribution rises at a fixed power rate.

\\[CDF(x) = 1 - \left(\frac{x}{x_m}\right)^\alpha, \text{ where } x_m \text{ is the minimum value of the distribution} \\]

Just like \\(\lambda\\) defined the shape of the exponential distribution, here, \\(\alpha\\) determines the shape.

![Pareto Distribution CDF Examples](/img/pareto-cdf.png)

Since the Pareto distribution is more heavily tailed than the exponential distribution, there are a range of examples that typically fall into this distribution. The most common are resources which follow the [80-20 rule](http://www.entrepreneurs-journey.com/397/80-20-rule-pareto-principle/), where 80% of the resources are owned by 20% of the people. This rule also extends to many other common real-world examples. The fact that the 80-20 rule also follows a power law distribution landed it its alternate name, the apropos [Pareto principle](http://en.wikipedia.org/wiki/Pareto_principle).

###The Normal Distribution

If you were familiar with any continuous distribution prior to reading this, then it was probably [the normal distribution](http://en.wikipedia.org/wiki/Normal_distribution). Its PDF is the ubiquitous bell curve that we all know and love. 

![Normal Distribution PDF Examples](/img/normal-pdf.png)

So far we've been looking at CDFs, so we'll stick with that here, too. The normal CDF has a sigmoid shape, which should be just a recognizable to a data scientist as the bell curve.

![Normal Distribution CDF Examples](/img/normal-cdf.png)

Its shape is defined by its mean and standard deviation, \\(\mu\\) and \\(\sigma\\), respectively.

####The Central Limit Theorem

The reason that the normal distribution is so ubiquitous is due to something called the [Central Limit Theorem](http://en.wikipedia.org/wiki/Central_limit_theorem). It states that, under certain conditions, if you take a bunch of values independently from any distribution and sum those values up, then repeat this many times, the collection of resulting sums will be normally distributed. This theorem that applies to a wide range of distributions, including all of the ones we've looked at up to this point. 

For example, if you sum 100 values drawn from a uniform distribution, and then repeat the process 10,000 times, the resulting plot will resemble a normal distribution.

{% highlight python %}
import random
#Generate a 2D list of uniformly distributed data points, 100 by 10000
data = [[random.random() for _ in range(100)] for _ in range(10000)]
sums = [sum(row) for row in data]
{% endhighlight %}

Running that python snippen and plotting `sums` in a histogram, we get the following:

![Monte Carlo Central Limit Theorem From Uniform Distribution](/img/monte-carlo-central-limit-theorem.png)

This fact is actually quite remarkable, and it's the reason that the normal distribution shows up in so many different areas. Due to limited knowledge, we are often performing [density estimation](http://en.wikipedia.org/wiki/Density_estimation) on unobservable, underlying PDFs. 

From Wikipedia: "In cases like electronic noise, examination grades, and so on, we can often regard a single measured value as the weighted average of a large number of small effects. Using generalisations of the central limit theorem, we can then see that this would often (though not always) produce a final distribution that is approximately normal." So even though we may not be able to see the underlying distribution, if we can measure some value which is an accumulation of underlying factors, then that posterior measurement will probably come together as a normal distribution with which we can work.

###Looking Ahead

Categorizing distributions in mathematical terms like we've done here is a very useful concept, and there is much more to discuss on the matter. There are many more distributions to analyze. You can find other posts on the subject with the <span class='tags'><span class='tag Distribution Exposition'><nobr>Distribution Exposition</nobr></span></span> tag. Also, keep an eye out for my next post where I'll show how you can test how well your data matches a given distribution no matter the shape of the distribution.
