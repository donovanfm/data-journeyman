---
layout: post
title: "Hypothesis Testing"
blurb: "We will look at hypothesis testing by way of an example problem."
thumbnail: null-hypothesis-logo.png
tags: 
  - Curriculum
  - Inferential Stats
  - Statistics
  - Video
---

###The Null Hypothesis

In any science (data or otherwise), it is impossible to prove a hypothesis with 100% certainty. A very accepted workaround for this delimma is to disprove the opposite of the effect you're expecting to see. This method is called rejecting the [null hypothesis](http://en.wikipedia.org/wiki/Null_hypothesis), \\(H_0\\). If you think that a drug will decrease a patient's blood pressure, then the null hypothesis for this experiment will be that the blood pressure medicine increases or has no effect on the patient's blood pressure. If the experiment suggests that the assumption of the null hypothesis is highly unlikely, then you're left with the other option: the expected effect, also called the alternative hypothesis, \\(H_A\\) or \\(H_1\\).

In the book [The Design of Experiments](https://books.google.com/books?id=TV5XRAAACAAJ&dq=isbn:0028446909&hl=en&sa=X&ei=MfMrVbb-MceVNvOdgeAC&ved=0CB4Q6AEwAA), where Ronald A. Fisher introduced the concept of the null hypothesis, he says

>...it should be noted that the null hypothesis is never proved or established, but is possibly disproved, in the course of experimentation. Every experiment may be said to exist only in order to give the facts a chance of disproving the null hypothesis.

Let's first examine the concept of the null hypothesis by way of [an example](https://www.khanacademy.org/math/probability/statistics-inferential/hypothesis-testing/v/hypothesis-testing-and-p-values) from Khan Academy's _Inferential Statistics_ section.

###An Example Experiment

>A neurologist is testing the effect of a drug on response time by injecting 100 rats with a unit dose of the drug, subjecting each to a neurological stimulus, and recording its response time. The neurologist knows that the mean response time for rats not injected with the drug is 1.2 seconds. The mean of the 100 injected rats' response times is 1.05 seconds with a sample standard deviation of 0.5 seconds. Do you think that the drug has an effect on response time?

\\[
\begin{eqnarray}
H_0 &:& \text{ drug has no effect, } &\mu\_{\text{w/ drug}} = 1.2s\\cr
H_1 &:& \text{ drug does have effect, } &\mu\_{\text{w/ drug}} \ne 1.2s
\end{eqnarray}
\\]

First, assume \\(H_0\\) is true. Then ask "What is the probability of observing the given sample?" This is similar to Example 1 in the [previous post](http://www.datajourneyman.com/2015/04/06/confidence-intervals.html) on confidence intervals.

\\[\mu_{\bar{x}} = \mu = 1.2\\]

\\[\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}} \approx \frac{s}{\sqrt{n}} = \frac{0.5}{10} = 0.05\\]

\\[z_{\bar{x}} = \frac{1.2 - 1.05}{0.05} = 3\\]

This means that the question we're asking is "What is the probability of getting a result 3 or more standard deviations from the mean of the population, which is 1.2 since we're assuming \\(H_0\\) to be true?"

The answer to that question is that the probability of getting a more extreme z-score is 0.003, so the more likely case is that \\(H_0\\) is incorrect, meaning \\(H_1\\) can be assumed to be true.

###Significance Level

The probability of seeing our experimental results given \\(H_0\\) was 0.003, so we said it was a safe bet to toss \\(H_0\\) out. But what if it had been a probability of 0.03? 0.3? Where do we define the cutoff?

Before an experiment is run, a significance level should be decided on. The [significance level](http://en.wikipedia.org/wiki/Statistical_significance), denoted by \\(\alpha\\), is the amount of certainty you feel you need to reject the null hypothesis. 

Your probability of seeing the experimental results assuming \\(H_0\\) is known as your experiment's p-value. Earlier, our p-value was 0.003. If you p-value is less than or equal to \\(\alpha\\), then you can reject \\(H_0\\). The significance level should be chosen prior to te experiment so that you're not tempted to choose an \\(\alpha\\) that just squeaks by in rejecting the null hypothesis.

Common significance levels are 0.05 and 0.01. Too strict a significance level (e.g., 0.00001), may never be attainable. Setting \\(\alpha\\) any higher opens you up to too much risk that the experimental observations are actually just a result of chance, which is called Type I Error.

###Type I Error and Type II Error

__Type I Error:__ Rejecting \\(H_0\\) even though it is true

__Type II Error:__ Assuming \\(H_0\\) is true when actually it isn't

You can remember the distinction because Type I Error is more dangerous. You're making a claim that isn't statistically significant, which could mislead people (including yourself) into believing that an effect exists when none is present. 

The other error is Type II Error, which is just saying that there isn't enough evidence to make the claim that it's reasonable to assume \\(H_0\\) to be false, when it actually is the case that \\(H_0\\) is false. 

While it's still ideal to make neither Type I nor Type II Errors, Type II is less damaging because it only suggests that more data is needed. Remember, \\(H_0\\) can never proven anyway, only confidently ruled out.

###One-Tailed Tests vs Two-Tailed Tests

In the example above, we performed a two-tailed test. That's because our alternative hypothesis didn't make a claim about the direction of the effect of the drug. We could have rejected the null hypothesis if the response times of the rats had been much _longer_ than the control group's.

If we had performed a one-tailed test, our hypotheses would have looked like this.

\\[
\begin{eqnarray}
H_0 &:& \text{ drug doesn't lower response time, } &\mu\_{\text{w/ drug}} \ge 1.2s\\cr
H_1 &:& \text{ drug lowers response time, } &\mu\_{\text{w/ drug}} < 1.2s
\end{eqnarray}
\\]

A few differences arise from this structure. For one, there is no longer one value for \\(\mu\\), but a range of values (1.2 or greater). So to be as fair to the null hypothesis as possible, you pick \\(\mu\\) to be the most likely mean to yield your experimental group's mean. In this case, that value is still 1.2, though. Had our experimental group had response times of 1.5s, then we would choose \\(\mu\\) to be 1.5, too.

Another difference is that our one-tailed z-score now represents a probability of our value being observed in one direction only. In our case, our p-value drops to 0.0015 because of this.

###Small Samples

The same rules for confidence intervals apply to hypothesis testing:

\\[
\begin{eqnarray}
&n < 30,& \text{ use t-statistic (if parent population is normal)}\\cr
&n \ge 30,& \text{ use z-statistic}
\end{eqnarray}
\\]