---
layout: post
title: "Chi-Squared Tests"
blurb: "We've done some hypothesis tests for normal distributions (and t distributions when appropriate). Now we'll look how we can use the chi-squared distribution to perform hypothesis tests on other distributions."
thumbnail: chi-squared-logo.png
tags: 
  - Curriculum
  - Inferential Stats
  - Statistics
  - Video
  - Distribution Exposition
---

###Chi-Squared Distribution

In [the last post](http://www.datajourneyman.com/2015/05/11/comparing-populations.html), we saw what happened when we composed distributions with addition and subtraction, but what if we look at a non-linear composition? If you have n normal random variables (\\(X_1, X_2, \dots, X_n\\)), then we can define Q as the sum of their squares. What distribution would Q belong to? The answer: a chi-squared (\\(\chi^2\\)) distribution.

\\[
\begin{eqnarray}
X_i & \widetilde{  } & N(0, 1)\\cr
Q &=& \sum_i X_i^2\\cr
Q & \widetilde{  } & \chi_{n}^2
\end{eqnarray}
\\]

The n subscript on the \\(\chi^2\\) distribution that Q is a member of denotes the degrees of freedom for the distribution. It represents the minimum number of values you need defined to fully describe the distribution. In this case, the degrees of freedom is just n, but that won't always be the case, as we'll soon see.

Chi-squared distribution values are always positive (since they're sums of squares), and they're very useful in the analysis of error. We can use this distribution to test experimental values with a theoretical distribution (goodness of fit) or to test the independence (or alternatively, contingency) of outcomes along two experimental axis (test of independence). Let's look at two examples of chi-squared tests to see how.

###Chi-Squared Tests

####Restaurant Patronage Example (Goodness of Fit)

A restaurant owner has come up with a theoretical distribution based on her experience running a restaurant for a few years. She might want to make some decisions to alter the menu based on this model, so she wants you to verify whether it's right. 

In this table are her theoretical percentages for each day (she's closed on Sunday) as well as last week's actual patronage numbers.

|  | Mon | Tue | Wed | Thu | Fri | Sat |
| Theoretical % | 10 | 10 | 15 | 20 | 30 | 15 |
| Actual Numbers | 30 | 14 | 34 | 45 | 57 | 20 |

We can use the chi-squared distribution to test how well the actual number fit the theoretical distribution. Let's perform a hypothesis test to see whether the owner's assumptions are valid. We will use an alpha value of 0.05.

\\[H_0: \text{Owner's distribution is correct}\\]
\\[H_1: \text{Owner's distribution is not correct}\\]

Assuming \\(H_0\\), we can use the theorectical distribution to calculate exactly how many customers we would expect to see each day while keeping the total number of customers the same (200).

|  | Mon | Tue | Wed | Thu | Fri | Sat |
| Expected Numbers | 20 | 20 | 30 | 40 | 60 | 30 |

Now we will use [Pearson's chi-squared test](http://en.wikipedia.org/wiki/Pearson%27s_chi-squared_test) to generate our chi-squared statistic to be compared with the chi-squared distribution. (Pearson's method is the most common, but you should be aware that there are other methods out there, like [Yates's](http://en.wikipedia.org/wiki/Yates%27s_correction_for_continuity).)

Pearson's chi-squared test is defined as follows:

\\[\chi^2 = \sum_i \frac{(O_i - E_i)^2}{E_i} \\]

So in the restuarant example:

\\[\chi^2 = \frac{(30-20)^2}{20} + \frac{(14-20)^2}{20} + \frac{(34-30)^2}{30} + \frac{(45-40)^2}{40} + \frac{(57-60)^2}{60} + \frac{(20-30)^2}{30} = 11.44\\] 

The degree of freedom is 5 because we fixed the total number of customers, so if you know the first five days, the sixth day is fixed.

Now if we look at a [chi-squared table](http://sites.stat.psu.edu/~mga/401/tables/Chi-square-table.pdf), we can find the column that corresponds with our alpha value (0.050) and the row that corresponds with our degrees of freedom (5) and we get a value of 11.07, which we will call our critical value. 

Since our calculated chi-squared statistic is greater than the critical value, getting that much error has less than a 5% chance of happening by chance, and we can reject the null hypothesis.

####A Note on Normality

You can see that since we could use the chi-squared test to test how well the data matched this arbitrary theoretical distribution, you could use it for any distribution that you had a definition for, whether it's laid out for each value (like it is in this example) or if its PDF is given. 

But remember, the chi-squared distribution is a sum of squares of _normal_ random variables. The normal distribution comes into play here because we're squaring the error (the difference between the observed value and the expected value) and this error is expected to be normal.

####Medical Herbs Example (Test of Independence)

We can also use the chi-squared distribution to test whether different populations have different experimental outcomes or if each population's result is independent of its population. This relationship is often captured in a [contingency table](http://en.wikipedia.org/wiki/Contingency_table). 

Suppose you want to test the effectiveness of two herbs on the recovery rate of an illness. You run an experiment with 380 subjects, breaking them up into three groups for Herb 1, Herb 2, and a control group that gets a placebo. At the end of the trial, you record who is still sick and who isn't.

|   | Herb 1 | Herb 2 | Placebo | Total |
| # sick | 20 | 30 | 30 | 80 |
| # not sick | 100 | 110 | 90 | 300 |
| Total | 120 | 140 | 120 | 380 |

The bottom row and right column have the marginal totals, and the bottom-most, right-most cell is the grand total.

So, let's perform a hypothesis test with a significance level (\\(\alpha\\)) of 0.01.

\\[H_0: \text{The herbs do not affect recovery rate}\\]
\\[H_1: \text{The herbs have an effect on recovery rate}\\]

Assuming \\(H_0\\) to be true, all three groups had no medical benefit, so the illness has a \\(\frac{80}{380} = 21\%\\) recovery rate. Keeping the totals constant in each group, we can calculate the expected outcomes.

|   | Herb 1 | Herb 2 | Placebo | 
| expected # sick | 25.2 | 29.4 | 25.2 | 
| expected # not sick | 94.8 | 110.6 | 94.8 |

The degree of freedom here is only 2, though. That's because we have not only have the grand total, but we have the marginal totals which are fixed and can be used to solve the last value in each row/column. The general formula for degrees of freedom with a contingency table is <nobr>(r - 1) * (c - 1).</nobr> Here, that works out to be <nobr>(2 - 1) * (3 - 1) = (1) * (2) = 2.</nobr>

Now we need to calculate our chi-squared statistic.

\\[\chi^2 = \frac{(20-25.2)^2}{25.2} + \frac{(30-29.4)^2}{29.4} + \frac{(30-25.2)^2}{25.2} + \frac{(100-94.8)^2}{94.8} + \frac{(110-110.6)^2}{110.6} + \frac{(90-94.8)^2}{94.8} = 2.53\\] 

Using the chi-squared table from before, we can use our degrees of freedom (2) and our alpha (0.01) to determine our critical value is 4.60. Since our calculated chi-squared statistic is less than our critical value, we cannot reject the null hypothesis in this case.

###Wrapping Up

Next week, we'll look at another method (ANOVA) for hypothesis testing contingency table data under slightly different circumstances than above. We'll use the chi-squared distribution to derive another distribution that will help us there. And that will bring us to the end of our look at inferential statistics, with many of the most common experimental methods in our toolbelt.