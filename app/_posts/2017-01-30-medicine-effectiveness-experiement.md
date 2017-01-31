---
layout: post
title: "Medicine Effectiveness Experiement"
blurb: "Two weeks ago I posted an experiement, and in this post I'm going to analyze the results."
thumbnail: medicine-logo.png
tags: 
  - Data Analysis
---

###First Things First

First off, thanks to everyone who participated in my experiement over the past two weeks!

I modelled the experiement on <a href="/pdf/Yarritu_et_al-2015-British_Journal_of_Psychology.pdf" download="Yarritu_et_al-2015-British_Journal_of_Psychology.pdf">a paper by Yarritu, Matute, and Luque</a>. You can read my full description and analysis of the paper [here](http://www.datajourneyman.com/2015/03/24/the-illusion-of-causality.html) and [here](http://www.datajourneyman.com/2015/06/01/the-illusion-of-causality-analysis.html). I requested that anyone familiar with the paper or those posts of mine not take the experiement, but, as is the problem with the internet, enforcing that requirement was not possible. 

Before we get started, let's define a few terms, just to avoid confusion:

**Stage:** one of two main sections of the experiment

**Trial:** an individual instance of a patient either receiving medicine or not

**Participant:** someone who took the experiement

**Patient:** each trial consisted a patient who either was cured or not at the end of the trial

###The Experiement

The experiement consisted of two stages. In the first stage, participants were shown a random trial that fit one of two scenarios. In Scenario A, the patient did not receive any medicine, and there was a 70% recovery rate. 

<img alt="Medicine Experiment: Scenario A" src="/img/experiment-scenario-a.png" class="full-size">

In Scenario B, the patient received a medicine (Aubina or Batatrim, which was randomized for each participant to avoid any influencing factor from either name), and there was a 70% recovery rate. 

<img alt="Medicine Experiment: Scenario B" src="/img/experiment-scenario-b.png" class="full-size">

Note that the medicine had no effect, since in both scenarios, the recovery rate is 70%.

When the participant started the experiement, they were randomly assigned to the *High-Illusory Group* or the *Non High-Illusory Group*. The High-Illusory Group saw Scenario A for 80% of the trials and Scenario B for 20% of the trials. The Non High-Illusory Group saw Scenario A for 20% of the trials and Scenario B for 80% of the trials. That is, the High-Illusory Group saw trials where the patient received medicine at a much higher frequency.

At the end of the 20 trials in Stage 1, the participant was asked to enter their confidence level (0-100) that the medicine had a curative effect on the patients.

Then in Stage 2, all participants (regardless of what group they were in during Stage 1) were shown Scenario A 50% of the time and Scenario C 50% of the time, where Scenario C was as follows:

<img alt="Medicine Experiment: Scenario C" src="/img/experiment-scenario-c.png" class="full-size">

Scenario A is unchanged, meaning that if the patient didn't receive medicine, then the recovery rate was 70%. In Scenario C where both medicines are administered, however, the patient has a 90% chance of recovery.

At the end of Stage 2, the participant was asked to enter their confidence that the *newly introduced medicine* was effective.

###The Analysis

The Yarritu paper found that the High-Illusory Group believed more strongly that the first medicine was effective than the Non High-Illusory Group did. Furthermore, they found that the High-Illusory Group was less convinced that the introduction of the new medicine was effective. This means that the High-Illusory Group's preconceived notion (the false idea that the first medicine was effective) actually inhibited their ability to make new conclusions later (even if the new conclusion was, in fact, valid).

So, the big question is, "Does my data support the result from the paper?"

And the answer is, "Inconclusive!"

I know, that's not exactly the result I was hoping for, since it's not as "interesting" as proving the hypothesis, but the data doesn't lie, and I will never lie for the data (or, more appropriately, for my own ego).

Actually, there was a difference in the two groups in my experiement. The High-Illusory Group became, on average, 3.96% more confident that the second medicine had an effect over their belief that the first medicine had an effect. The Non High-Illusory Group became 17.17% more confident in Stage 2 than in Stage 1. 

However, there was a lot of variation in the results. Remember, the final result could range from -100 (if a participant was certain that the first medicine was effective and certain that the second medicine was NOT effective) to 100 (if the participant's convictions were reversed). The standard deviation of the High-Illusory Group was 30.83 and the standard deviation of the Non High-Illusory Group was 26.49. So, the two results are less that one standard deviation away from each other, meaning it's completely rational to think that these numbers were pure chance, and not due to some underlying difference in the two groups.

###The Conclusion

It's important to note that my results do not disprove the result of the paper. There are some key differences that I'll talk about here. All it really amounts to is the fact that I would need more data to reach more conclusive findings.

One difference in the experiement in the paper and my experiment was the number of trials per stage. The paper uses 100 trials per stage, for a total of 200 trials. I knew I'd have a hard enough time getting people on the internet to commit to 40 trials, so I kept my experiement to 20 trials per stage. Even if I'd had more participants, I knew I ran the risk of finding no difference between the two groups. If this had happened, then it's reasonable to conclude that 20 trials is not enough for the "high illusory" bias to take hold in the participants.

In terms of sample size, I had 52 participants in total. They were mostly evenly split into the two groups, with 28 being in the High-Illusory Group and 24 being in the Non High-Illusory Group. Again, this sample size is too small to claim that the high illusory bias is absent. Had I reduced the number of trials further, perhaps I could have gotten more participants, but that would have made the experiment even less representative of the original from the Yarritu paper.

If you have any ideas of how better to adapt this experiment to the internet, please let me know in the comments!