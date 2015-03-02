---
layout: post
title: "Estimation"
blurb: "The idea of estimating a distribution's parameters is often glossed over, but it's important to know the difference between an estimated parameter and a true parameter."
thumbnail: estimation-logo.png
tags: 
  - Curriculum
  - Think Stats
  - Statistics
  - Book
---

###Estimation

According to [the CDC](http://www.cdc.gov/nchs/fastats/body-measurements.htm), the mean height of men in the US over 20 is 69.3 inches. Of course, the CDC is a reputable source, but even if you were skeptical, you could download their data and crunch the numbers yourself. However, even going to those lengths cannot give you 100% confidence that you've found the true mean of that population. All you've done is find an estimate of the mean.

Imagine the true population of US men over 20. Think about magically recording all of their heights instantaneously. Then imagine writing a quick script to take the average. By the time the script has run, the answer is already wrong. Some men may have just turned 20 in the time it took your script to run. Some men may have grown or shrunk a little. Some men have died. Hopefully you can see the futility of chasing "true" parameters in many real world situations. And since we're stuck with estimation then, it's a good idea to know what exactly we're dealing with.

###Estimator Properties

####Notation

In general, an estimator will have a hat over it (though not always, as we'll see in the case of sample mean later). So the estimate for the \\(\lambda\\) parameter of an exponential distribution would be \\(\hat \lambda\\).

####Mean Squared Error

One metric of the quality of an estimator is it's [Mean Squared Error (MSE)](http://en.wikipedia.org/wiki/Mean_squared_error) with respect to the true parameter it's estimating. MSE is calculated as the average of the error squared, where error is the difference in the estimator value and the true parameter value. For a parameter, \\(\theta\\), MSE is defined as follows.

\\[MSE(\hat \theta) = E[(\hat \theta - \theta)^2] = \frac{1}{n} \sum_{i=1}^{n} (\hat \theta_i - \theta_i)^2\\]

####Maximum Likelihood Estimate

Another positive attribute of an estimator is if it's the Maximum Likelihood Estimate. In many cases this is the estimator that minimizes MSE, but it's not always the case. Take the example of three six-sided dice being rolled. The estimator that minimizes MSE is 10.5, but 10 and 11 are the MLEs since 10.5 is not a valid outcome.

####Estimator Bias

An unwanted property of an estimator is its [bias](http://en.wikipedia.org/wiki/Bias_of_an_estimator). An estimator's bias is the difference between the estimators expected value and the true parameter's value. Since it's directly related to the estimator's expected value, it naturally has an impact on the estimator's MSE. 

However, it's not the case that increased bias necessarily means an increase in MSE. MSE is a combination of bias and variance. Based on [the new definitions of accuracy, precision, and trueness](http://en.wikipedia.org/wiki/Accuracy_and_precision#Terminology_of_ISO_5725) (which I, myself, didn't know about until researching for this post), bias corresponds to poor trueness and variance corresponds to poor accuracy.

Here is a visual example of a biased estimator with a lower MSE than an unbiased estimator for the same parameter. The parameter being estimated is \\(\beta_0\\). \\(\hat \beta_1\\) is a biased estimator for \\(\beta_0\\), and \\(\hat \beta_2\\) is an unbiased estimator for \\(\beta_0\\). However, due to \\(\hat \beta_2\\)'s higher variance, calculating the MSE over the areas of both estimators would result in \\(\hat \beta_1\\)'s MSE being lower.

![MSE, Bias, and Variance Relationship](/img/bias-variance.png)

###Estimating Mean

So, what exactly does 69.3 inches represent with respect to over-20-year-old, US men's heights if it's not the mean (\\(\mu\\))? It's actually a quantity called the sample mean, often denoted \\(\bar x\\). \\(\bar x\\) is obtained by adding up all of the values of a distribution and dividing by the size of the sample. 

\\[E[\mu] = \bar x = \frac{1}{n} \sum_{i=1}^{n} x_i\\]

Contrast this with the method for obtaining \\(\mu\\) in [a previous post](http://www.datajourneyman.com/2014/11/06/probability-and-statistics-terms.html) using a PDF. (When I said "the mean of a data set" I am referring to "sample mean".)

This method for computing \\(\bar x\\) isn't always the best, though. Consider the case of a sample with outliers. If you have the set \\([0.45, -1.2, -0.23, 0.9, 245.3]\\), then, using the above definition, you would calculate \\(\bar x\\) to be 49.044, when realistically it should be much closer to 0. One option is to throw out any obvious outliers. Another option is to use the median as an estimate for \\(\mu\\).

If there are no outliers, \\(\bar x\\) minimizes MSE. Additionally, \\(\bar x\\) is unbiased.

For sufficient sample sizes of data that's gathered appropriately, \\(\mu\\) and \\(\bar x\\) are used interchangeably. Except in the most iron-clad of situations, though, it's a much better idea to keep the two values properly identified.

###Estimating Variance and Standard Deviation

Similarly to estimating \\(\mu\\) with the sample mean, we can estimate \\(\sigma^2\\) with the [sample variance](http://en.wikipedia.org/wiki/Variance#Sample_variance), \\(S^2\\). 

\\[E[\sigma^2] = S^2 = \frac{1}{n} \sum_{i=1}^{n} (x_i - \bar x)^2\\]

There's a catch though. Calculating sample variance this way yields a result that is off by a factor of \\(\frac{n-1}{n}\\). This effect is lessened as sample size (n) increases, but it's still enough to strip this estimator's "unbiased" badge away. To remedy this, there's another estimator you can use, \\(S^2_{n-1}\\).

\\[S^{2}\_{n-1} = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar x)^2\\]

\\(S^2_{n-1}\\) actually is an unbiased estimator, but our troubles don't end there. Unbiasedness is not preserved over non-linear transformations, so we run into a problem when trying to take the square root to find an estimator for the standard deviation. Finding [unbiased estimator for standard deviation](http://en.wikipedia.org/wiki/Unbiased_estimation_of_standard_deviation) is a complicated ordeal. Fortunately, this difficulty can be avoided by using industry standards like significance tests, confidence intervals, and Bayesian analysis, all of which we will get to in future posts.

These distinctions may seem painstakingly thorough and overall unneeded, but actually, the idea of estimation in data science should be much more fundamental. After all, it's going to be (and this is just an estimate) 99% of what any data scientist does in her day to day work. 
