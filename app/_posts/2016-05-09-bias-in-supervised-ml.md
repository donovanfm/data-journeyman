---
layout: post
title: "Bias in Supervised Machine Learning"
blurb: "Algorithmic bias can pop up in unexpected places if you don't safeguard against it."
thumbnail: logo.jpeg
tags: 
  - Ethics
  - Video
---

Mike Williams is a Research Engineer at [Fast Forward Labs](http://www.fastforwardlabs.com), which is a business consulting firm based heavily on data science and machine learning. There, Williams does what he calls applied industrial research on a variety of topics. In a [recent talk](http://blog.dominodatalab.com/video-how-machine-learning-amplifies-societal-privilege/) at the Domino Data Science Pop-up in Austin, TX, Williams went into detail about the biases that creep into supervised machine learning algorithms and how to avoid them.

At Fast Forward Labs, they release regular reports on academic data science techniques that have commercial potential. All of their reports have an ethical section (which in my opinion should be common practice with data science and machine learning reports). In the Domino Data Science Pop-up talk, Williams goes into his research on "Sentiment Analysis on Social Media". Sentiment Analysis is the bread and butter of social media analytics. It's appealing to companies because the data is free as opposed to polling or focus groups. It's a problem commonly approached with supervised machine learning techniques.
 
<div class="pull-quote">"Supervised machine learning is a formalized method for finding useful rules of thumb"</div>

According to Williams, the discrimination problem with Sentiment Analysis follows this logic:

1. Our system attempts to algorithmic ally identify 'negative sentiment'
2. It does a better job of finding strident, unambiguous expressions of emotion
3. Men are more likely to make such expressions
4. Men therefore attract disproportionately more attention from brands using these products
5. We amplified their privilege

Williams goes on to say

> We've got this system that algorithmically identifies negative sentiment. Why are we interested in negative sentiment? For the same reason that Uber [or any company] is. We want to find complaints, either so that we can respond to them individually...or we want to learn on average what kinds of people don't like our product or what kinds of complaints there are about our product, so we can change our product in response to that.

So, extreme expressions of sentiment are easier to detect, and men are more likely to make these extreme expressions. Therefore, companies that that change their products to diminish these negative sentiments are aligning their products more with men, thus increasing male privilege. Supervised Machine Learning is a formalized method for finding useful rules of thumb. Since rules of thumb about people are really just stereotypes, it logically follows that "applied to human beings, supervised machine learning is a formalized method for finding useful stereotypes." Williams elaborates on this by saying

> Commercially, if you build a system that pays attention only to a subset of the population that you're actually interested in, you are leaving money on the table.... Machine learning inherently depends on...bias in your training set. If there are no biases, there are no patterns in your training set, then the system is not going to work... It's up to you think about which kinds of [biases] are harmful.

<div class="pull-quote left">Applied to humans, supervised machine learning is an attempt to discover which stereotypes are true</div>

Williams also speaks to the legal ramifications around these kinds of algorithmic biases. He admits that for the most part, algorithms get a free pass on discrimination. However, this could of course change, and ethically, it's wise to apply the societally accepted laws around discrimination to your Machine Learning algorithm, as well. The Civil Rights Act in the U.S. outlaws two types of discrimination: disparate treatment and disparate impact. The former is intentional (in the machine learning domain, an example would be having race as a feature) and the latter is unintentional, but very likely to arise from a machine learning algorithm since there are so many biases in available data sets which might be used for training your model.

To summarize, Williams gives the following pieces of advice:

- Automated sentiment systems are used to 'learn what people think' on social media
- In practice they amplify the voices of men, enhancing their privilege
- Applied to humans, supervised machine learning is an attempt to discover which stereotypes are true
- When you build a model, consider the ethical, legal and commercial consequences of the choices you make
