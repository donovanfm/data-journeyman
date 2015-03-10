---
layout: post
title: "Correlation"
blurb: "This week we wrap up our studies on the <i>Think Stats</i> book with the subject of its final chapter, correlation."
thumbnail: correlation-logo.png
tags: 
  - Curriculum
  - Think Stats
  - Statistics
  - Book
  - Tools and Resources
---

###Preface: Another Worthwhile Blog

Before we dig into the material of the final chapter of _Think Stats_, I want to point out a great new blog on probability, [Count Baysie](http://www.countbayesie.com/). It's written by the lead data scientist of the analytics company [KISSmetrics](https://www.kissmetrics.com/). As luck would have it, his latest post is titled [Understanding Variance, Co-Variance, and Correlation](http://www.countbayesie.com/blog/2015/2/21/variance-co-variance-and-correlation), and due to its clarity on the topic, I'll be weaving in several of his explanations with the structure of _Think Stat_'s take on the topic to maximize the intuition around the idea of correlation. 

###Variance Revisited

Recall from [a previous post](http://www.datajourneyman.com/2014/11/06/probability-and-statistics-terms.html) that the definition of variance is 

\\[Var(X) = \sum_{\forall i} (X_i - \mu)^2 \times P(X_i) = E[(X - \mu)^2]\\]

Another way to write variance, since \\(\mu = E(X)\\), would be

\\[
\begin{eqnarray}
Var(X) &=& E[(X - E[X])^2]\\cr
&=& E[X^2 - 2X E[X] + (E[X])^2]\\cr
&=& E[X^2] - 2 E[X] E[X] + (E[X])^2\\cr
&=& E[X^2] - 2 (E[X])^2 + (E[X])^2\\cr
&=& E[X^2] - (E[X])^2
\end{eqnarray}
\\]

which is also called "mean of square minus square of mean" as a way to remember it, and it's a great way to think about covariance. 

###Covariance

Covariance is a measure of how two variables correspond to one another. 

If we take where we ended up with variance above, and write out the exponents as multiplication, we can replace one of the \\(X\\) random variables with a different random variable \\(Y\\) to get a measure of covariance between the two random variables.

\\[
\begin{eqnarray}
Var(X) &=& E[X X] - E[X] E[X]\\cr
Cov(X, Y) &=& E[XY] - E[X]E[Y]
\end{eqnarray}
\\]

In other words, variance can be calculated by plugging in the same random variable for both parameters of the covariance function (i.e., \\(Cov(X, X)\\)).

####Problems with Covariance

One problem with covariance is the units it's in, namely the units of X times the units of Y. 

Another problem with covariance is that it's hard to interpret because its magnitude is subject to the respective variances of the original distributions. For distributions \\(X' = cX\\) and \\(Y' = dY\\), where c and d are constants,

\\[
\begin{eqnarray}
Cov(X', Y') &=& Cov(cX, dY)\\cr 
&=& E[cXdY] - E[cX]E[dY]\\cr 
&=& c \cdot d \cdot E[XY] - c \cdot d \cdot E[X]E[Y]\\cr
&=& c \cdot d \cdot (E[XY] - E[X]E[Y])\\cr
&=& c \cdot d \cdot Cov(X, Y) 
\end{eqnarray}
\\]

So, this is definitely a problem, because what we would really like is a measure that tells us how much we know about one variable if we know the value of the other, regardless of the variation within each distribution and between them. 

###Correlation

We can fix both the dimension problem and the scaling problem with one change to the covariance function, and this resulting value will be correlation.

\\[Corr(X, Y) = \frac{Cov(X, Y)}{\sqrt{Var(X) \cdot Var(Y)}}\\]

Now we have a dimensionless measure for the relationship between X and Y. Additionally, correlation is always between -1 and 1. A correlation of 1 means that the if you know one of the variables, you can perfectly predict the other. A correlation of -1 means you can make perfect predictions as well; it's just that the variables are moving in opposite directions from each other. A correlation of 0 means that no predicioon can be made. And anything in between just means that an imperfect prediction is the best you can do, getting better as the magnitude of the correlation approaches 1.

![Examples correlations](/img/correlations.png)

There are several things to note about the figure above. First is that the "fuzzier" the data, the closer the correlation is to 0. Second is that some of the datasets have nonlinear relationships that correlation doesn't pick up at all. Third is that, of the datasets with a correlation of 1 or -1, the correlation doesn't tell you anything about the slope of the line. This third point can be addressed with Simple Linear Regression, or the Lease Squares Fit.

###Least Squares Fit

The idea of linear regression is to pick a line (\\(y_i = \alpha + \beta x_i\\)) that best matches your data. Then, if you have a new x value, you can approximate the corresponding y value. But unless your data has a correlation of 1 (or -1), then there is no perfect line that you can draw to capture your data. That is, there will necessarily be some error, \\(\epsilon_i = \alpha + \beta x_i - y_i\\). 

A linear regression technique will minimize this error. Least Squares Fit, like the name suggests, minimizes the square of the errors.

\\[\min_{\alpha, \beta} \sum \epsilon^2_i\\]

There are a number of good reasons for choosing Least Squares Fit.

1. Squaring treats positive and negative errors the same.
2. Squaring gives larger errors more weight, so in minimizing we correct for greater errors more.
3. Under certain conditions (errors are independent of x, random, and normally distributed), then the Least Squares Fit estimators for \\(\alpha\\) and \\(\beta\\) are their Maximum Likelihood Estimators.

For Least Squares Fit, the estimators for \\(\alpha\\) and \\(\beta\\) are

\\[\hat \alpha = \bar y - \hat \beta \bar x\\]
\\[\hat \beta = \frac{Cov(X, Y)}{Var(X)}\\]

###Conclusion

We will undoubtably use Least Squares Fit and the related concepts in many future applications. In fact, _Think Stats_ has provided us with an amazing jumping off point into the world of data, which must be rooted in the world of probability and statistics. 
