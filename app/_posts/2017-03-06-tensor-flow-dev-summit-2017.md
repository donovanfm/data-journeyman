---
layout: post
title: "TensorFlow Dev Summit 2017, Part 1"
blurb: "After the TensorFlow introduction from my last post, I thought it would be interested to take stock in where the community is currently from their 2017 developer summit."
thumbnail: tensorflow-dev-summit-logo.png
tags: 
  - TensorFlow
  - Machine Learning
  - Video
---

###Intro

Since I introduced TensorFlow in [my last post](http://www.datajourneyman.com/2017/02/20/intro-to-tensor-flow.html), I thought it would be a great time to review all of the videos from the TensorFlow Dev Summit that just happened to get a sense of where things are with the project. Watching the videos was a very illuminating and exciting exercise, so I recommend you watch some of them, and I hope the summaries of each video below are useful to you.

###Videos

####[TensorFlow: Machine Learning for Everyone](https://www.youtube.com/watch?v=-F-TQJtbFMs&index=2&list=PLOU2XLYxmsIKGc_NBoIhTn2Qhraji53cv)

An exciting marketing video that highlights recent adoption and achievements of TensorFlow within Google – including Google Translate, Gmail Smart Reply, Diabetic Retinopathy Recognition, and many other applications and improvements – which show the tremendous momentum TensorFlow has.

####[Keynote](https://www.youtube.com/watch?v=4n1AHvDvVvw&index=3&list=PLOU2XLYxmsIKGc_NBoIhTn2Qhraji53cv)

In the keynote presentation, Jeff Dean emphasizes how TensorFlow was created for everyone. TensorFlow has its roots in DistBelief, but is redesigned to be more flexible and general-purpose, serving research and production use cases. 

Ragat Monga goes into more depth on the performance of the recent 1.0 release. He also introduces some of the new high-level APIs: Layers for deep learning model building; Estimator and [Keras](https://keras.io) for easy creation, training and evaluating of models; and Canned Estimators for some preconfigured models. He also goes into some hardware integrations and mentions the new TensorFlow compiler, both of which increase performace greatly.

Megan Kacholia dives deeper into the performance improvements by analyzing benchmarks on two specialized deep learning machines, the [NVIDIA DGX-1](http://nvidianews.nvidia.com/news/nvidia-launches-world-s-first-deep-learning-supercomputer) and the [NVIDIA K80 GPU](http://www.nvidia.com/object/tesla-k80.html). The specific model architecture in the tests is the [Inception v3](https://github.com/tensorflow/models/tree/master/inception) architecture. Testing on synthetic benchmarks and real data acheive near ideal speedup with TensorFlow 1.0. Megan then goes through a number of exciting research and production applications that user TensorFlow, inside and outside of Google.

Finally, Jeff comes back to talk about some unique uses for TensorFlow:

-[Cucumber Recognition](http://workpiles.com/2016/02/tensorflow-cnn-cucumber/)
-[Diabetic Retinopathy Recognition](http://jeffreydf.github.io/diabetic-retinopathy-detection/)
-[Skin Cancer Recognition](http://news.stanford.edu/2017/01/25/artificial-intelligence-used-identify-skin-cancer/)

####[XLA: TensorFlow, Compiled!](https://www.youtube.com/watch?v=kAOanJczHA0&index=4&list=PLOU2XLYxmsIKGc_NBoIhTn2Qhraji53cv)

Chris Leary starts off this talk by listing the strengths of TensorFlow: flexibility, expressiveness, and extensibility. These strengths are core to TensorFlow, so the compiler needs to embrace them as well, which is accomplished by just-in-time compilation. 

XLA stands for Accelerated Linear Algebra, and it takes in a TensorFlow graph and outputs optimized assembly code for better performance than running TensorFlow in a purely interpreted manner. But wait, there's more! There's also an ahead-of-time- compilation option, and this can greatly reduce the size of your model by turning it into an executable. 

Chris gives a lot of details about these optimizations in the video, if you want to learn more about how it works. Todd Wang then goes even more in depth, showing how the source code for XLA is structured, how the actual compilation works, and how to enable XLA in your project. Todd then gives some actual examples of performance improvements on various model architectures.

####[Hands-on TensorBoard](https://www.youtube.com/watch?v=eBbEDRsCmv4)

> Everyone knows that neural networks can sometimes be a bit of a black box. So we want TensorBoard to be a flashlight.

Dandelion Mané opens this video with the above statement. I think it's a great way to frame TensorBoard, a very exciting tool to someone like me, who is just starting to wrap my head around TensorFlow. 

The TensorBoard tool can do a lot of things, including visualizing your tensor graph, viewing your model's performance over time, comparing various hyperparameter settings, and projecting the processed data into a 3D space to see how well your model is discriminating among different data points. Future functionality includes debugging features for finding bad values in your data pipeline, the ability to add plugins for custom visualizations, and easy sharing withing organizations.

The whole video is full of great visualizations that are too numerous to reproduce here, so I recommend checking out the video.

####[TensorFlow High-Level APIs: Models in a Box](https://www.youtube.com/watch?v=t64ortpgS-E&index=6&list=PLOU2XLYxmsIKGc_NBoIhTn2Qhraji53cv)

Martin Wicke admits in this video that TensorFlow is very low level, which is one of its strengths. However, this can be a barrier to adoption since even common machine learning tasks can become unwieldy to implement. Fortunately, TensorFlow core will soon include some higher-level abstractions to alleviate those pain points. These high level APIs promote faster iteration, using best practices and standardizing code, and better compatibility with other high level machine learning libraries (like Keras).

Layers are used to construct complex models by assembling layers of data processing to define a model. Estimators abstract away the training process for whatever model you're using. Canned Estimators are fully-packaged machine learning models that make common model architectures very simple to call. Layers are currently in the core release, while Estimators and Canned Estimators are in the contrib release and should be finalized and included in the more stable core release in the coming months.

####[Integrating Keras & TensorFlow: The Keras Workflow, Expanded](https://www.youtube.com/watch?v=UeheTiBJ0Io)

Francois Chollet, the primary author of Keras, talks about using TensorFlow and Keras together. Keras furthers the intentions of the the high-level APIs of the previous video. The Keras specification has already been established, and is available in Theano and is coming to other deep learning tools as well. Chollet explains that the Keras spec is being implemented directly into TensorFlow, which is a great way to bring the power and performance of TensorFlow to a larger population of developers and machine learning practitioners.

Chollet goes through a complex example that requires video/image recognition and natural language processing to answer questions about the contents of 40-frame videos. I admit that I was vary impressed by how simply such a complex system could be expressed in Keras.

The Keras integration into TensorFlow isn't available just yet, but it should be coming very soon (version 1.1 and version 1.2).

###Outro

I'm excited to watch and summarize the remaining TensorFlow Dev Summit videos in my next post. The remaining videos go into some specific use cases for TensorFlow, which reveal how its being used to solve real problems and where it can be expected to show up in the future.

