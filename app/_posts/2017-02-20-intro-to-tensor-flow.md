---
layout: post
title: "Intro to Tensor Flow"
blurb: "This week we dip our toes into Google's open source machine learning library and get our hands dirty with an example program. Wait, so are we washing our feet or dirtying our hands? Oh, never mind."
thumbnail: tensor-flow-logo.png
tags: 
  - TensorFlow
  - Machine Learning
  - Video
  - Tools and Resources
---

###The State of the Art

Chances are you already know a thing or two about Nueral Nets (aka Deep Learning). I'm not going to write another blog post about the basics of Nueral Nets because that's been done so many times elsewhere. However, for the uninitiated and the familiar alike, I highly recommend [this video of Geoffrey Hinton describing the recent history and current state of deep learning for language understanding](https://www.youtube.com/watch?v=o8otywnWwKc). It's a great perspective from Hinton, the Google reasearcher, University of Toronto professor, and machine learning royal himself.

Near the end of the video, Hinton admits that while the current state of the art systems are extremely good and ever improving, there are some things that humans do with ease that is still beyond the abilities of these machine learning systems. The example he uses are the two sentences below.

> The trophy would not fit into the suitcase because it was too big.

> The trophy would not fit into the suitcase because it was too small.

Humans, being physical creatures with a lot of experience in the physical world, are able to figure out what antecedent makes sense for "it" in both of the above sentences, most of the time without conscious realization that there is an ambiguity at all. Here's the correct matching for each sentence.

> The **trophy** would not fit into the suitcase because **it** was too big.

> The trophy would not fit into the **suitcase** because **it** was too small.

However easy it is for a human to figure out the proper matchings in this example, current machine learning system, according to Hinton, are no better than a flipped coin at figuring out the correct antecedent. Furthermore, Hinton says that he's not certain when these systems will be able to get this right. He notes that the human brain has 100,000 times the weights that these systems do. That shortcoming, combined with the limitations on transistor size and energy constraints that suggest that [the traditional vehicle that drives Moore's Law is coming to an end](https://arstechnica.com/information-technology/2016/02/moores-law-really-is-dead-this-time/?comments=1), means that your laptop probably won't become sentient any time soon.

What is a burgeoning Data Journeyman to do? 

###Enter Tensor Flow

[Tensor Flow](https://www.tensorflow.org) is Google's open source machine learning library. It's specifically designed to do deep learning in an efficient and distributed manner. The recent 1.0 release [is fast!](https://9to5google.com/2017/02/15/google-releases-tensorflow-1-0-w-better-performance-new-api-modules-more/) Furthermore, since the slowing of Moore's Law will very likely increase the necessity for powerful, cloud-backed systems, it's only natural to go with a library designed to integrates with [Google's massive cloud platform](https://cloud.google.com/ml/).

The Tensor Flow docs have great examples for everything from simple linear regression to advanced applications of deep learning models. A great place to start is the "Hello, World!" of the machine learning domain, [the TensorFlow MNIST classification tutorial](https://www.tensorflow.org/get_started/mnist/beginners).

###We've Only Just Begun

This post is meant to set the stage for a string of posts on TensorFlow. I hope I answered several of the Whys you might have for using TensorFlow. I plan to have many more posts that dive deeper into TensorFlow for a variety of applications, so check back soon. 

