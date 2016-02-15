---
layout: post
title: "Uncertainty in Data Science"
blurb: "What is the role of uncertainty in data science? It definitely needs to be part of the equation. Um...probably."
thumbnail: question-logo.png
tags: 
  - Ethics
---

In line with my [previous post](http://www.datajourneyman.com/2016/02/08/being-scientifically-minded.html) about the need for uncertainty in all aspects of a scientifically-minded individual's life, I will continue that reasoning for data science. 

The end goal of a data science projet is a visualization or a writeup or a model or some other tool that others will use to make decisions based on your work. In one form or another, this end goal is the creation of knowledge, and to borrow some tired clichés, knowledge is power and with great power comes great responsibility, therefore the object of data science work comes with a great responsibility to be clear and not to mislead. To me, this should be the prime directive of data science.

<h1 class="pull-quote">Data Science's Prime Directive:<br/>Be Clear and Don't Mislead</h1>

All models make assumptions and simplifications of reality. These are just necessary steps to making something we can handle and manipulate to generate something useful. If we stopped to take care of every possibility, we would never finish our project, like [Zeno's arrow](https://en.wikipedia.org/wiki/Zeno%27s_paradoxes#Arrow_paradox), stuck in between the idea and the implementation of our model. So there is no crime in making these assumptions and simplifications. The crime would be not to communicate these uncertainties in your final product, so that your audience (who may not be the audience you expect, and therefore may not have the same training you expect) can judge your points fairly.

<h1 class="pull-quote right">People want bullet-proof answers, even when they don't exist</h1>

Speaking in uncertainties isn't always easy or natural. After all, people often want bullet-proof answers, even when such an answer doesn't exist. Again, just look at my [previous post](http://www.datajourneyman.com/2016/02/08/being-scientifically-minded.html) to see my opinion on the danger of convictions. However, it's human nature to listen to the loudest, most confident voice. It's the same principal that causes exaggerated and outlandish headlines to become the most shared on the internet. 

Even when equipped with amazing truth discovering tools that are afforded by data-science-related fields, we are better to remember that we're never seeing the entire picture, but more like the shadow's on the wall of [Plato's cave](https://en.wikipedia.org/wiki/Allegory_of_the_Cave). In fact, there are many times when [we're completely unaware of the underlying biases of our data](http://www.slate.com/articles/technology/future_tense/2016/02/how_to_bring_better_ethics_to_data_science.html). So a data scientist should always strive to educate himself on ethics, proper statistical methods, and social constructs which will influence the interpretations of her work.

I will leave you with a manifesto of a repentant quantitative analyst (the finance world's data scientists) after his part in the 2008 financial crisis. Emanuel Derman wrote the following "to justify a career spent in financial modeling" and it is an example of the dangers of excessive hubris when wielding powerful modeling tools.

> <b>The Modelers’ Hippocratic Oath</b>
>
> ~ I will remember that I didn’t make the world, and it doesn’t satisfy my equations.
>
> ~ Though I will use models boldly to estimate value, I will not be overly impressed by mathematics.
>
> ~ I will never sacrifice reality for elegance without explaining why I have done so.
>
> ~ Nor will I give the people who use my model false comfort about its accuracy. Instead, I will make explicit its assumptions and oversights.
>
> ~ I understand that my work may have enormous effects on society and the economy, many of them beyond my comprehension.