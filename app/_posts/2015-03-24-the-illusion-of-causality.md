---
layout: post
title: "The Illusion of Causality"
blurb: "Incorrectly recognizing a relationship as causal is so hard wired into the human psyche, experts have given it a name: causal illusion."
thumbnail: scatter-brain-dark-logo.png
tags: 
  - Ice Cream Crimes
---

###Psychological Coping Methods

In this Ice Cream Crimes post, instead of looking at an example of bad data, we're going to look at an underlying mechanism that lets bad data stick in terms of accepted knowledge. A recent post by FiveThirtyEight called [Your Brain is Primed to Reach False Conclusions](http://fivethirtyeight.com/features/your-brain-is-primed-to-reach-false-conclusions/) led me to an interesting study by Yarritu, Matute, and Luque on how bad data can inhibit people's acceptance of good data. You can download the paper <a href="/pdf/Yarritu_et_al-2015-British_Journal_of_Psychology.pdf" download="Yarritu_et_al-2015-British_Journal_of_Psychology.pdf">here</a>.

There is a psychological theory that states that the human brain has developed "cognitive illusions" in order to better cope with reality. These illusory mechanisms include [illusory correlation](http://en.wikipedia.org/wiki/Illusory_correlation), [illusion of control](http://en.wikipedia.org/wiki/Illusion_of_control), and [causal attribution bias](http://en.wikipedia.org/wiki/Attribution_bias). There are other theories that state that these suboptimal tendencies are just byproducts of an evolved cognitive data processing system (human brains). In any case, they are documented and exist, so as data scientists, we must deal with them.

Underlying many of the cases of cognitive illusions is the illusion of causality. Causal attribution bias is a mistake in causality for a person's behaviour. The illusion of control is a mistake in one's own ability to affect a situation. When it comes to illusory correlation, it's very hard for people to make the correlation jump without also attributing some level of causality to the mix.

Furthermore, there have been studies to analyze the effect of prior causal knowledge on new causal knowledge. For example, if you believe in a causal relationship, A -> Outcome, then it will be harder for you to switch your thinking to a different causal relationship, B -> Outcome, than it would have been if you had never believed in A -> Outcome. This is called [the blocking effect](). The real danger is when A -> Outcome is illusory, but B -> Outcome is supported by evidence.

###The Experiment

The Yarritu, et al., experiment was a two-phase experiment. Participants were asked to play the part of a medical doctor and to determine the effectiveness of two imaginary medicines in curing an imaginary illness. 

In Phase 1, the participants saw 100 virtual patients and were told whether the patient had taken Medicine A or no medicine at all. The participants were asked to predict whether the patient would be cured or not. Then it was revealed whether the patient was cured. At the end of Phase 1, participants stated the probability that Medicine A cured the illness (from 0% likely to 100% likely). 

In Phase 2, the whole process was repeated, but the patients either took Medicine A and Medicine B, or they didn't take any medicine at all. After the 100 trials of Phase 2, the participants were asked to rate the probability that Medicine B cured the illness.

Participants in the experiment were divided into two groups, a high-illusory group and a low-illusory group. The aim of Yarritu, Matute, and Luque was to instill a higher conviction of causality of Medicine A curing the illness in the high-illusory group (an illusion to be verified by that group's prediction of Medicine A's curing power at the end of Phase 1). Then the experimenters observed how this illusion affected the high-illusory group's predictions of Medicine B's curing power.

####Phase 1

The two groups were shown 100 cases pulled from the following two models. Notice that each population has an identical recovery rate.

#####Population 1: No Medicine (70% recovery rate)

![Infographic showing a 70% recovery rate of people who took no medicine](/img/causal-illusion-pop-1.png)

#####Population 2: Medicine A (70% recovery rate)

![Infographic showing a 70% recovery rate of people who took Medicine A](/img/causal-illusion-pop-2.png)

For the high-illusory group, the probability of seeing a case in Population 1 was 0.2, and the probability of seeing a case in Population 2 was 0.8. For the low-illusory group, the probabilities were reversed: 0.8 for Population 1 and 0.2 for Population 2.

This lead to a higher rate of conviction that Medicine A had an effect on the illness in the high-illusory group. According to that group, the mean likelihood that Medicine A was effective was \\(\mu = 65.42\\) with a standard deviation of \\(\sigma = 2.00\\). In the low-illusory group, the mean was lower, \\(\mu = 47.95\\), with a standard deviation of \\(\sigma = 2.58\\). Since both populations had a 70% recovery rate, the higher likelihood in the high-illusory group was, in fact, illusory.

####Phase 2

Then, the two groups were shown 100 cases from Population 1 and a new model, Population 3. This time, though, the probability of seeing each population was 0.5 for both groups.

#####Population 1: No Medicine (70% recovery rate)

![Infographic showing a 70% recovery rate of people who took no medicine](/img/causal-illusion-pop-1.png)

#####Population 3: Medicine A and Medicine B (90% recovery rate)

![Infographic showing a 90% recovery rate of people who took Medicine A and Medicine B](/img/causal-illusion-pop-3.png)

Since the data shown to each group in this phase is the same, the reason for any discrepancy at the end of the trials will be due to the interference of Phase 1.

After Phase 2 when asked to comment on the likelihood that Medicine B was effective, the high-illusory group's collective judgement for Medicine B's effectiveness was \\(\mu = 67.42, \sigma = 2.49\\), while the low-illusory group's was \\(\mu = 74.36, \sigma = 2.31\\). So the high-illusory group was less able to recognize the effectiveness of Medicine B, an effect which actually exists.

In the words of Yarritu, et al., "[W]hen the probability of the outcome is high, a high probability of the potential cause leads to a stronger illusion of causality than does a low probability....Thus, as expected, previous training on an illusory belief about Medicine A exerted an influence over the establishment of a true evidence-based belief concerning the effectiveness ofMedicine B."

###Takeaways

My opinion of what makes a good scientist is someone who can abandon personal theories in the light of contradicting evidence. This ideological reversal is a very hard – even painful – change to make. But what is even harder than that is to effect this change in _someone else_. 

Now, in order to reach those who stubbornly cling to illusions of causality, we need to add psychological prowess to our data scientist toolbelt. There are a few hueristics that I think can get the job done without too much expertise, though.

1. When trying to convince someone with data, tell a narrative that takes them from their current world view to one that is congruent with the data.
2. Listen to their objections and validate them ("I can see how that seems plausible"; "You're definitely not the only one who sees it that way"; "Before these new studies, I myself believed the same thing").
3. Adjust your narrative to meet new points of view they introduce. Don't just stick to a script.
4. Above all, be patient.

In a future post, after we've finished the Khan Academy Inferrential Statistics curriculum, we will take a very close look at this experiment's numbers to determine exactly how strong the results are. After all, we don't want to get seduced by bad data, even when it's trying to implicate other instances of bad data.
