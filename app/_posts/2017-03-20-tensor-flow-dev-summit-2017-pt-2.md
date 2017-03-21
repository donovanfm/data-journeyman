---
layout: post
title: "TensorFlow Dev Summit 2017, Part 2"
blurb: "This post is Part 2 of my survey of the 2017 TensorFlow Dev Summit. In this round of videos, there are some impressive applications of TensorFlow."
thumbnail: tensorflow-dev-summit-logo.png
tags: 
  - TensorFlow
  - Machine Learning
  - Video
---

###Intro

This is the second post where I review videos from the [2017 TensorFlow Dev Summit](https://events.withgoogle.com/tensorflow-dev-summit/). You can find the first post [here](http://www.datajourneyman.com/2017/03/06/tensor-flow-dev-summit-2017.html).

###Videos

####[Skin Cancer Image Classification](https://www.youtube.com/watch?v=toK1OSLep3s&t=2s&list=PLOU2XLYxmsIKGc_NBoIhTn2Qhraji53cv&index=7)

1 in 5 Americans will develop skin cancer at some point in their life. When caught early, however, the survival rates are very good. The Artificial Intelligence Lab and the Medical School at Stanford used TensorFlow to classify malignant lesions. They used the Inception V3 architecture for their model. Their model acheived dermatologist-level performance. The presenter, Brett Kuprel, showed a demo running on an Android phone, which is promising for the future of healthcare that such a useful application can run on such a ubiquitous device.

####[TensorFlow at DeepMind](https://www.youtube.com/watch?v=VdDmhOCw6J0&index=9&list=PLOU2XLYxmsIKGc_NBoIhTn2Qhraji53cv)

To presenter Daniel Visentin's team, DeepMind, the machine learning platorm they build upon is vital to their success. They look for flexibility, usability, scalability, performance, and production readiness. Previously, they used Torch and DistBelief. As TensorFlow matured, they decided to move to it. TensorFlow has greatly simplified their work flow, allowing them to focus on the problems they're trying to solve. Daniel then goes into detail at how DeepMind uses TensorFlow to optimize data center cooling at Google (a project under DeepMind Applied). Another project that utilizes TensorFlow to great success is AlphaGo. AlphaGo was originally trained using Torch, but the speedup to training provided by TensorFlow pushed the project to the [high-profile win against Lee Sedol](https://www.theatlantic.com/technology/archive/2016/03/the-invisible-opponent/475611/) over a year ago. 

####[Mobile and Embedded TensorFlow](https://www.youtube.com/watch?v=0r9w3V923rk&index=10&list=PLOU2XLYxmsIKGc_NBoIhTn2Qhraji53cv)

Pete Warden goes through the ways to deploy TensorFlow applications on embedded devices, including Android, iOS, and even the Raspberry Pi. Pete goes through the technical concepts needed to use TensorFlow on these devices, which I won't replicate here, but if you're interested you can check out the following bookmarks into the video.

- [Android](https://youtu.be/0r9w3V923rk?list=PLOU2XLYxmsIKGc_NBoIhTn2Qhraji53cv&t=157)
- [iOS](https://youtu.be/0r9w3V923rk?list=PLOU2XLYxmsIKGc_NBoIhTn2Qhraji53cv&t=688)
- [Raspberry Pi](https://youtu.be/0r9w3V923rk?list=PLOU2XLYxmsIKGc_NBoIhTn2Qhraji53cv&t=931)

The second half of the video covers some debugging and optimizations necessary for running on embedded devices in general.

####[ML Toolkit](https://www.youtube.com/watch?v=Tuv5QYKU-MM&index=14&list=PLOU2XLYxmsIKGc_NBoIhTn2Qhraji53cv)

Ashish Agarwal talks about a toolkit of machine learning models that work out of the box. The included models are Linear/Logistic Regression, KMeans Clustering, Gaussian Mixture Models, WALS Matrix Factorization (Recommendation Systems), Support Vector Machines, Stochastic Dual Coordinate Ascent, Random Forests, and a host of deep neural network architectures. Ashish details the supported parameters for several of these built-in models. Based on the examples Ashish shows, this toolkit is a great entry point to TensorFlow for programmers who are familiar with other machine learning libraries (like scikit-learn) because the syntax is very similar. This toolkit affords newcomers all of the benefits of Tensorflow (performace, distributed computation, etc.) with minimal friction of adoption.

####[Case Study: TensorFlow in Medicine - Retinal Imaging](https://www.youtube.com/watch?v=oOeZ7IgEN4o&index=16&list=PLOU2XLYxmsIKGc_NBoIhTn2Qhraji53cv)

Lily Peng works on the Medical Imaging Team at Google Brain, and she talks about her efforts at diagnosing diabetic retinopathy, the leading cause of blindness. Guidelines for the condition recommend annual inspections to diagnose it. In many countries, there aren't enough doctors to perform the inspections. Another problem, though, is the high variability in the diagnoses of medium severity cases across different doctors. Lily's team gathered 880,000 diagnoses for training. They then tried to train an Inception-based model on the images, which achieved nearly the same performance as optimologists. Lily goes on to praise TensorFlow for its quick prototyping and ability to exeriment at scale.

####[Magenta: Music and Art Generation](https://www.youtube.com/watch?v=vM5NaGoynjE&index=18&list=PLOU2XLYxmsIKGc_NBoIhTn2Qhraji53cv)

Finally, in talk on a fun application of TensorFlow, Douglas Eck poses the question, "Can ML generate compelling media?" Art and technology have always co-evolved. The camera was originally seen as opposed to artists of the time, but now photography is an art in its own right. To Douglas, this is the goal of the Magenta project, to provide a tool for artists to use, push against, and play with to aid in the creation of art. He goes into some interesting examples: the first one is music generation and the second one is image and video style transfer.

