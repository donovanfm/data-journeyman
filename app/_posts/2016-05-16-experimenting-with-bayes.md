---
layout: post
title: "Experimenting with Bayes"
blurb: "The kind of statistics that have been covered in previous posts has mostly been Frequentist statistics. This post goes into the basics of Bayesian statistics with a look at experimental design."
thumbnail: beaker-logo.png
tags: 
  - Bayesian
  - Statistics
  - Research Paper
---

Science isn't perfect.

This can be a hard pill to swallow, but it's the truth. The only thing that is perfect is dogma, and perfection and usefulness are not the same thing. Being scientifically minded, [as I've written about before](http://www.datajourneyman.com/2016/02/08/being-scientifically-minded.html), involves a certain level of uncertainty and humility. Just because the scientific method is imperfect doesn't mean that all hope is lost, however. It means that we should always look to our methods with the same skepticism we give to the results of those methods.

In traditional hypothesis testing, which permiates experimentation across all of the sciences, statistical significance is determined by frequentist methods, looking to pass some significance threshold to dismiss the lack of an effect. Many assumptions are made in this method: the distribution of the underlying data; the ability of the significance threshold to weed out signals from noise; the idea of certain experimental results being more extreme than others.

Beyond these fundamental assumptions, using a significance threshold for measuring experimental effects has a host of other problems, such as the ones [listed here by the American Statistical Association](https://www.amstat.org/newsroom/pressreleases/P-ValueStatement.pdf): 

1. "P-values can indicate how incompatible the data are with a specified statistical model."
2. "P-values do not measure the probability that the studied hypothesis is true, or the probability that the data were produced by random chance alone."
3. "Scientific conclusions and business or policy decisions should not be based only on whether a p-value passes a specific threshold."
4. "Proper inference requires full reporting and transparency."
5. "A p-value, or statistical significance, does not measure the size of an effect or the importance of a result."
6. "By itself, a p-value does not provide a good measure of evidence regarding a model or hypothesis."

Additionally, there are social problems within the scientific community that amplify the problems with statistical significance. The fact that papers which don't reach statistical significance are less likely to be published results in a phenomenon called [p-hacking](http://www.vox.com/2016/3/15/11225162/p-value-simple-definition-hacking). And then the communication of these "significant" results are even further distorted to a degree that's so bad, it's reached a level of popular culture infamy by [its portrayal on the HBO series
Last Week Tonight with John Oliver](https://youtube.com/watch?v=0Rnq1NpHdmw).

Not all of these problems can be done away with all at once, but one school of thought promotes an alternative methodology that can at least help with many of these problems. Bayesian statistics revolves around defining your beliefs beforehand, looking at some data, and then updating your beliefs. When applied to hypothesis testing, this means declaring the prior probability of each hypothesis being true, then gathering or observing some experimental data, and then reporting the updated probabilities. 

That is to say, the Bayesian approach still has its critics, and I still have a lot to learn in the ways of Bayes. This blog will dip into the Bayesian pool many times in the future, since a well rounded exploration of Data Science wouldn't be complete without it. As a high level opinion in favor of the Bayesian approach, I'll leave here with the 4 conclusions that Dennis V. Lindley came to in [his 1993 paper](http://www.datajourneyman.com/pdf/bayes-intro-1.pdf):

- "Since the significance level is typically less than the posterior probability of the null hypothesis and a small value of the former, like 5%, is going to cast doubt on the null hypothesis, it follows that the null hypotheses will be more easily discounted using [a traditional Frequentist approach] rather than the Bayesian approach."
- "The Bayesian analysis provides the scientist with what he requires. He is interested either whether or not the null hypothesis is true or in the magnitude of the effect being investigated or both....This is in marked contrast to the significance level which provides a probability for something that did not happen on a hypothesis that may not be true."
- "The Bayesian analysis distinguishes between [different prior beliefs]"
- "The Bayesian Method is comparative. It compares the probabilities of the observed event on the null hypothesis and on the alternatives to it. In this respect, it is quite different from [the Frequentist] approach which is absolute in the sense that it involves only a single consideration, the null hypothesis. All our uncertainty judgements should be comparative: there are no absolutes here."