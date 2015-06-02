---
layout: post
title: "The Illusion of Causality Analysis"
blurb: "We previously looked at a paper that showed a concept called the illusion of causality. Now that we have the tools to check the results of that paper, we're going to do just that."
thumbnail: scatter-brain-dark-qestion-logo.png
tags: 
  - Ice Cream Crimes
  - Inferential Stats
---

###A Brief Recap
In a [previous post](http://www.datajourneyman.com/2015/03/24/the-illusion-of-causality.html), we looked at something called the illusion of causality. I won't rehash the details of the experiment in full, but I will very quickly recap the general idea.

Basically, the researchers wanted to test how an incorrect belief in a causal relationship could actually inhibit future, true causal relationships to be adopted. In Phase 1, two groups were shown the same data but with different frequencies. The goal was to put a false causal relationship in the minds of the high-illusory group. Then, in Phase 2, both groups saw the exact same data (with the same frequencies), and any difference in the subjects' interpretation of Phase 2 was attributed to the illusions planted in Phase 1.

###The Results
As was just mentioned, the subjects were split into two groups (high-illusory and low-illusory). But also, within each group, the subjects were then split into two sub-groups to counterbalance any effect the naming of the drugs may have ("Batatrim" and "Aubina"). So all the subject fell into a 2x2 grid (with one axis for the high- and low-illusory group division and the other axis for the drug name counterbalancing subgroup).

The researchers performed ANOVA on this grid across the counterbalanced groups to determine if there were any effects of the naming of the drugs. In Phase 1, they found the F-statistic to have a p-value of more than 0.13, which is not statistically significant. In Phase 2, the naming was even less indicative of the results, with a p-value of more than 0.37.

With the possible confounding effects of the naming out of the way, the actual experimental variables could be analyzed. This is basically just ANOVA performed on the other axis of the 2x2 grid (the high- and low-illusory group division). 

Since there are only two groups on this axis, the d.f. for SSB is 1. Since there were 147 participants in the study, and they were broken into 4 groups in total, each group would have its last participant's results fixed, so the overall d.f. for SSW is 143.  

After Phase 1, the F-statistic between the experimental groups is calculated to be 28.17, which has a significance level of 0.000015, well below even a conservative p-value of 0.01. This shows that the intended effect of creating the illusion was very likely successful.

After Phase 2, the F-statistic between the experimental groups is calculated to be 4.05, which has a significance level of 0.05, which would just pass for a p-value of 0.05, but it's still significant enough to assume there was an effect.

###Discussion

One problem with the paper is that the researchers didn't declare their p-values before getting their results. They should have justified a certain p-value before performing the experiment so that the results could be more objectively measured. Still though, the results are sound and statistically significant enough to be taken seriously.

An interesting future study would have a similar Phase 1, but then would have Phase 2, 3, 4, etc to test how much data is required to "overwrite" the illusion implanted in Phase 1. That is, how much more data is needed to undo an illusion that it took to create it in the first place?