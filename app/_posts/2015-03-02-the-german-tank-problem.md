---
layout: post
title: "The German Tank Problem"
blurb: "With the concept of estimators in hand, we'll take on an actual wartime usage of the concept."
thumbnail: tank-logo.png
tags: 
  - Curriculum
  - Think Stats
  - Statistics
  - Book
---

###The Problem

You're probably familiar with Alan Turing's work on [cracking the Enigma code](http://en.wikipedia.org/wiki/Cryptanalysis_of_the_Enigma) in World War II, especially with the recent Oscar-nominated [film](http://www.imdb.com/title/tt2084970/) on the subject. There is a lessor known nerd victory for the Allies in that war too, though. It's been coined the [German tank problem](http://en.wikipedia.org/wiki/German_tank_problem).

__Definition:__ Estimate the maximum of a [discrete uniform distribution](http://en.wikipedia.org/wiki/Uniform_distribution_(discrete)) from a given sample (without replacement).

In tank terms, suppose Germany is producing tanks for war that have sequential serial numbers (for simplicity, starting with 1). You see a certain number of tanks and their serial numbers. With this information alone, estimate how many tanks Germany has produced to date in total.

###Historical Interlude

During WWII, the Allies were naturally very interested in the number of tanks the Germans possessed, and they went about predicting that number in two main ways. The first was conventional intelligence gathering and from that, educated guessing. The other way was to use statistical estimation. Of course, the two methods were used in combination, as well.

Now that we have the actual historical numbers of German wartime tank production, we can judge how well each of these methods did separately. The intelligence estimates represent "the combined views of American and British intelligence at the time." (from [Ruggles and Brodie, 1947](https://engineering.purdue.edu/~ipollak/ece302/FALL09/notes/An_Empirical_Approach_to_Economic_Intelligence_in_World_War_II_Ruggles_Brodie_1947.pdf))

| Month | Statistical Estimate | Intelligence Estimate | German Records | 
|-------|----------------------|-----------------------|----------------|
| June 1940 | 169 | 1,000 | 122 |
| June 1941 | 244 | 1,550 | 271 |
| August 1942 | 327 | 1,550 | 342 |

Clearly, the statistical estimate comes much closer to the correct value. Given these tangible benefits of statistical estimation, let's work out how it's done.

###Simplification: The Locomotive Problem

In _Think Stats_, a simplified version of the problem is examined, called the locomotive problem. The locomotive problem is equivalent to the German tank problem where you only see one tank. We will continue talking in terms of tanks in this post, whereas in _Think Stats_ they use train cars instead.

So, say you come accross a tank with a serial number of 60. How many total tanks do you think there are? You may be thinking it's crazy to even make a guess with such little data, but if it's all you have, a weak guess is better than no guess at all. And there are many different ways to estimate the total number of tanks. An interesting thing about using a sample of one to form the estimates is that this case maximizes the divergence of the different estimators.

####The Maximum Likelihood Estimator

If we approach the problem looking for the maximum likelihood estimator, then the estimator \\((\hat N)\\) for the total number of tanks \\((N)\\) will be equal to the serial number we saw – in this case 60. For any given value of \\(N\\), the likelihood that we see a particular serial number is \\(\frac{1}{N}\\). So to maximize the likelihood of seeing 60, \\(\hat N\\) would have to be 60 because for any \\(\hat N\\) greater than 60, \\(\frac{1}{N}\\) would be less, and for \\(\hat N\\) less than 60, the probability is 0 since we just saw a tank with a serial number of 60.

If this answer seems dissatisfying, then you're probably sensitive to the intuition that this approach doesn't do well to minimize the error in our estimate. And you're right. So let's move on to an estimate that does take this error into account.

####Minimizing Mean Squared Error

Instead of taking \\(\hat N = 60\\), let's try finding a multiplier, \\(a\\), to get a better estimate, where \\(\hat N = a \times 60\\). If we repeated the problem \\(N\\) times, seeing each possible serial number, \\(i\\), then our mean squared error would be defined as follows:

\\[MSE = \frac{1}{N} \sum_{i=1}^{N} (ai - N)^2\\]

Since this MSE function is [convex](http://en.wikipedia.org/wiki/Convex_function), we can find the minimum by setting the derivative equal to 0.

\\[\frac{dMSE}{da} = \frac{1}{N} \sum_{i=1}^{N} 2i(ai - N) = 0\\]

(If you're unsure of where the 2i comes from, maybe you need a refresher in the [chain rule](https://www.math.ucdavis.edu/~kouba/CalcOneDIRECTORY/chainruledirectory/ChainRule.html) like I did.)

Then, solve for \\(a\\). To do so, we'll need to recall some [algebra of summation notion](https://www.math.ucdavis.edu/~kouba/CalcTwoDIRECTORY/summationdirectory/Summation.html).

\\[\sum_{i=1}^{N} (2ai^2 - 2Ni) = 0\\]

\\[2a \frac{N(N+1)(2N+1)}{6} - 2N \frac{N(N+1)}{2} =0\\]

\\[\frac{a(2N+1)}{3} - N = 0\\]

\\[a = \frac{3N}{2N + 1}\\]

This value of \\(a\\) isn't useful since it's in terms of \\(N\\), and if we knew \\(N\\) we wouldn't have to estimate anything in the first place. However, since for large values of \\(N\\) the right hand side tends toward \\(\frac{3}{2}\\), so \\(\hat N = \frac{3}{2} \times 60 = 90\\).

####An Unbiased Estimator

We're not guaranteed that the above estimators are unbiased. In fact, by computing the mean error, we could see that they're not.

\\[ME = \frac{1}{N} \sum_{i=1}^{N} (ai - N)\\]

To find an unbiased estimator, we need to fine a value of \\(a\\) where \\(ME = 0\\).

\\[\frac{1}{N} \sum_{i=1}^{N} (ai - N) = 0\\]

\\[\frac{a(N+1)}{2} - N = 0\\]

\\[a = \frac{2N}{N+1}\\]

This value for \\(a\\) tends toward 2 for large values of \\(N\\), so \\(\hat N_{unbiased} \approx 2 \times 60 = 120\\).

###Back to the General Problem

All of the estimators we've considered so far take only one tank sighting into account, but remember, the original problem is for \\(k\\) tank sightings.

####The Minimum-Variance Unbiased Estimator

Since we've seen the [variance-bias tradeoff](http://en.wikipedia.org/wiki/Bias%E2%80%93variance_tradeoff) before, we can talk about the [minimum-variance unbiased estimator](http://en.wikipedia.org/wiki/Minimum-variance_unbiased_estimator) or MVUE. The MVUE might not be the estimator with the lowest variance, but it does have the lowest variance of any unbiased estimators. 

For the general German tank problem with k tanks observed, the MVUE is the maximum serial number observed (m) plus the average gap between observed serial numbers. Here we'll accept the estimator on intuition. See the derivation [here](http://en.wikipedia.org/wiki/German_tank_problem#Derivation).

\\[\hat N_{MVUE} = m + \frac{m - k}{k} = m + mk^{-1} - 1 = m(1 + k^{-1}) - 1\\]

If \\(k = 1\\), then we're back to our unbiased estimator from the locomotive problem. If \\(k = m\\), then \\(\hat N_{MVUE} = m\\). That is, if you've seen 100 tanks and they are all numbered 1 through 100, then you're best bet is to guess that you've seen them all.

###The Other Side of the Problem

We've seen how valuable estimation can be on the guessing side of the tank problem, but what about if you're producing tanks and you know your opponent has a top-notch team of statisticians on hand who are capable of estimating your tank production?

One option is to exclude serial numbers altogether, but this might not be possible or ideal.

Another option would be to have a lookup table that assigns the serial number to a random sequence of characters. Such a lookup table would have to be very large. In fact, it would have to be set up such that the number of digits possible is twice the number of digits in the number of tanks produced to avoid an otherwise high chance of collisions (due to the effect of [the birthday problem](http://www.datajourneyman.com/2014/09/06/birthday-paradox.html)).

Whichever side of the war you're on, being statistically inferior to your opponent will definitely put you at a severe disadvantage.