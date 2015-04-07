---
layout: post
title: "Confidence Intervals"
blurb: "A look at the concept of confidence intervals (as opposed to point estimators) by way of several examples, including one that introduces a new distribution, the t distribution."
thumbnail: confidence-int-logo.png
tags: 
  - Curriculum
  - Inferential Stats
  - Statistics
  - Video
  - Distribution Exposition
---

###Confidence Intervals Versus Point Estimators

In [a previous post](http://www.datajourneyman.com/2015/02/23/estimation.html) on estimation, we only looked at point estimators. A [point estimate](http://en.wikipedia.org/wiki/Point_estimation) is an estimator that only takes on a single value. Another approach would be to give a range of values. Then we could phrase estimation like, "There's a 95% probability that the true value falls within this range." These ranges of estimates are called [confidence intervals](http://en.wikipedia.org/wiki/Confidence_interval). We will explore this concept through a series of examples used in Khan Academy's _Inferential Statistics_ secion.

###Example 1: Finding the Confidence

> You sample 36 apples from your farm's harvest of over 200,000 apples. The mean weight of the sample is 112 grams (with a 40 gram sample standard deviation). What is the probability that the mean weight of all 200,000 apples is within 100 and 124 grams?

The probability we're looking for in mathematical notation is

\\[
\begin{eqnarray}
P&(&\left\| \mu - \bar{x} \right\| \le 12 \text{ })\\cr
P&(&\left\| \mu\_{\bar{x}} - \bar{x} \right\| \le 12 \text{ }), \text{ since } \mu = \mu\_{\bar{x}}\\cr
P&(&\left\| \mu\_{\bar{x}} - \bar{x} \right\| \le 1.8 \sigma\_{\bar{x}} \text{ }), \text{ since } \sigma\_{\bar{x}} = \frac{\sigma}{\sqrt n} \approx \frac{S}{\sqrt n} = \frac{40}{6}\\cr
P&(&\frac{\left\| \mu\_{\bar{x}} - \bar{x} \right\|}{\sigma\_{\bar{x}}} \le 1.8 \text{ })\\cr
P&(&-1.8 \le \frac{\mu\_{\bar{x}} - \bar{x}}{\sigma\_{\bar{x}}} \le 1.8 \text{ })\\cr
P&(&-1.8 \le z_{\bar{x}} \le 1.8 \text{ })
\end{eqnarray}
\\]

In the last probability expression, it's clear that we only need to see what the probability that the z-score of our sample's mean is within 1.8 standard deviations of the distribution's mean. Since we did all the work to convert the probability into terms of \\(z_{\bar{x}}\\), all we have to do is consult a [z-score calculator for 1.8](http://www.wolframalpha.com/input/?i=z+score+calculator&a=FSelect_**NormalProbabilities-.dflt-&f2=-1.8&f=NormalProbabilities.z_-1.8&a=*FVarOpt.1-_***NormalProbabilities.z--.***NormalProbabilities.pr--.**NormalProbabilities.l-.*NormalProbabilities.r---.*--&a=*FVarOpt.2-_**-.***NormalProbabilities.mu--.**NormalProbabilities.sigma---.**NormalProbabilities.z---). The confidence level (\\(\left\| z \right\| < 1.8\\)) is 0.9281, so there is a 92.81% chance that the population mean is within 100 and 124 grams.

###Example 2: Finding the Interval

> In a local teaching district, a technology grant is available to teachers in order to install a cluster of four computers in their classrooms. From the 6,250 teachers in the district, 250 were randomly selected and asked if they felt that computers were an essential teaching tool for their classrom. Of those selected, 142 teachers felt that computers were an essential teaching tool.
>
> 1. Calculate a 99% confidence interval for the proportion of teachers who felt that computers are an essential teaching tool.
> 2. How could the survey be changed to narrow the confidence interval but maintain the 99% confidence interval?

Since the outcome of the teacher survey is binary (yes or no), we're dealing with a Bernoulli Distribution. Using the samples we have data for, we can estimate that distribution's descriptors. 

\\[\bar x = \frac{\text{successes}}{n} = \frac{142}{250} = 0.568\\] 

\\[s^2\_{n-1} = \frac{\text{successes} \times (1 - \bar x)^2 + \text{failures} \times (0 - \bar x)^2}{n-1} = \frac{142 \times (1 - 0.568)^2 + 180 \times (0 - 0.568)^2}{250 - 1} = 0.246\\]

\\[s\_{n-1} = \sqrt{s^2\_{n-1}} = \sqrt{0.246} = 0.496\\]

\\[\sigma\_{\bar{x}} = \frac{\sigma}{\sqrt{n}} \approx \frac{s\_{n-1}}{\sqrt{n}} = \frac{0.496}{\sqrt{250}}\\]

Now that we have \\(\bar{x}\\) and \\(\sigma\_{\bar{x}}\\), we just need one more piece of information to start, and that is \\(z\_{0.995}\\) because that value will represent how far the confidence interval will stretch, since \\(z\_{0.995}\\) and \\(z\_{0.005}\\) are centered around the mean, and the area between them is 99%. Using an [inverse z score calculator](http://stattrek.com/online-calculator/normal.aspx), we get a value of 2.576. With these values, we can calculate the interval.

\\[
\begin{eqnarray}
P&(&\frac{\left\| \mu\_{\bar{x}} - \bar{x} \right\|}{\sigma\_{\bar{x}}} \le 2.576 \text{ }) = 0.99\\cr
P&(&\frac{\left\| \mu\_{\bar{x}} - 0.568 \right\|}{0.031} \le 2.576 \text{ }) = 0.99\\cr
P&(&\left\| \mu\_{\bar{x}} - 0.568 \right\| \le 0.08 \text{ }) = 0.99\\cr
\end{eqnarray}
\\]

So the 99% confidence interval for the true value of the average number of teachers who view the computer clusters as essential is \\(0.568 \pm 0.08\\) or \\([0.488, 0.648]\\).

For part 2 of the question, \\(\sigma_{\bar x}\\) decreases as the size of the sample increases, and this will narrow the final confidence interval, so the survey would need to be given to more than the current 250 teachers.

###Example 3: Small Samples and T-Distributions

>Seven patients' blood pressures have been measured after having been given a new drug for 3 months. They had blood pressure increases of 1.5, 2.9, 0.9, 3.9, 3.2, 2.1, and 1.9. Construct a 95% confidence interval for the true expected blood pressure increase for all patients in a population.

We can start out by calculating the descriptive statistics of the sample.

\\[\bar x = 2.34\\]

\\[s_{n-1} = 1.04\\]

\\[\sigma_{\bar x} = \frac{\sigma}{\sqrt n} \approx \frac{s}{\sqrt n} = \frac{1.04}{\sqrt 7} = 0.39\\]

In this example, since we're dealing with a small sample size, our sampling distribution won't be normal. It will have fatter tailes (i.e., a larger standard deviation). So if we used a z-score to calculate the confidence interval like we did in the previous examples, we would underestimate the range of the confidence interval.

The problem of working with small samples is so common, though, that there is a good alternative, the [t distribution](http://en.wikipedia.org/wiki/Student%27s_t-distribution). The t distribution is designed to handle the added uncertainty of working with small samples. The shape of the t distribution is dependent on the degrees of freedom of the sample, which is just \\(n - 1\\). As n increases, it becomes closer and closer to a normal distribution.

The following charts show various t distributions plotted againts a normal distribution. By 30 degrees of freedom, the two are extremely close to one another.

<img alt="T Distributions plotted against Normal Distributions" src="/img/t-dists.png" class="full-size">

To get a t value, we will consult a [t table](http://www.sjsu.edu/faculty/gerstman/StatPrimer/t-table.pdf) instead of a z table or z calculator. For a confidence level of 95% and 6 degrees of freedom, the t value is \\(t = 2.447\\).

So now we have everything to calculate the 95% confidence interval.

\\[
\begin{eqnarray}
P&(&\left\| \mu\_{\bar{x}} - \bar{x} \right\| \le \sigma\_{\bar{x}} \times t \text{ }) = 0.95\\cr
P&(&\left\| \mu\_{\bar{x}} - 2.34 \right\| \le 0.39 \times 2.447 \text{ }) = 0.95\\cr
P&(&\left\| \mu\_{\bar{x}} - 2.34 \right\| \le 0.954 \text{ }) = 0.95\\cr
CI\_{95} &=& 2.34 \pm 0.954 = [1.386, 3.294]
\end{eqnarray}
\\]