---
layout: post
title: "Preattentive Processing"
blurb: "Tying together concepts from the past three posts, the principals of preattentive processing give your visualization that extra punch that can make communication with your audience more effective."
thumbnail: scatter-brain-dark-logo.png
tags: 
  - Visualization
---

###Visualization Recap

Before getting into the crux of this post, I'd like to take stock of what we've covered in this series of posts on Data Visualization so far, and how the information in those posts relates to the topic of this one: [preattentive processing](https://en.wikipedia.org/wiki/Pre-attentive_processing).

####Post 1: [Data Visualization](http://www.datajourneyman.com/2016/02/29/data-visualization.html)

In the first post on visualization, I showed how the visual system dominates over the other human senses in terms of bandwidth. This extraordinary processing power is what enables preattentive processing. Since the brain's ability to process visual information is so great, much of it happens outside of the slower mechanism of attention.

####Post 2: [Visual Encodings](http://www.datajourneyman.com/2016/03/07/visual-encodings.html)

In the second post on visualization, the paper I cited by Cleveland and McGill tests each visual encoding's effectiveness by measuring preattentive processing, or as the authors put it, the "instantaneous perception of the visual field that comes without apparent mental effort." This stage of preattentive processing affected the overall accuracy of the viewer when judging value changes across various visual encodings.

####Post 3: [Color](http://www.datajourneyman.com/2016/03/14/color.html)

Color, with its ability to highlight pertinent information, is an excellent tool for triggering preattentive processing of salient data. In [the words of Maureen Stone](https://www.perceptualedge.com/articles/b-eye/choosing_colors.pdf), "Contrasting colors are different, analogous colors are similar. Contrast draws attention, analogy groups." As we'll see in this post, this effect of grouping and separating items based on color happens at the preattentive stage.

###Preattentive Processing

To take advantage of the huge bandwidth of the visual system, you must convey information to the viewer at the preattentive level because preattentive processing is parallel, whereas attentive processing is serial. It is actually now accespted that attention plays a critical role in the entire visual process, but this terminology is still used since it's intuitive that attention as we think of it is a slower process. 

<h1 class="pull-quote">The human brain is able to spot the salient information in a fraction of a second</h1>

Stephen Few goes into this visual process in his article [Tapping the Power of Visual Perception](http://www.perceptualedge.com/articles/ie/visual_perception.pdf). Take the following example of his to illustrate the power of preattentive processing. Assume the most salient information in this visual is the number of fives present. In the top box, all of the numbers are the same color, and no preattentive processing occurs. In the second box, the fives have a different color value, and are therefore trivially easy for the viewer to pick out and count.

<img alt="Preattentive Processing Example" src="/img/preattentive-fives.png" class="full-size">

It's important to note that preattentive processing is only effective if it's used to emphasize the salient information. If the most important thing for the viewer to see is the number of sixes in the visualization, then there is no advantage from preattentive processing in either box.

The following diagram (adapted from Alan D. Baddeley's [The Psychology of Memory](http://media.johnwiley.com.au/product_data/excerpt/1X/04700914/047009141X.pdf)) demonstrates where preattentive processing occurs on the memory pipeline. Note that this diagram is very much a simplification.

<img alt="Memory Model: Preattentive Attention, Short Term Memory, Long Term Memory" src="/img/memory-model.png" class="full-size">

Taking this memory model into consideration, short term memory is really the bottleneck of the whole process, since it can only hold 5 to 9 chunks of information at any given time. We can reduce this problem by allowing preattentive processing to handle some of the information load by chunking the data in a meaningful way. Furthermore, animation and interaction can allow emphasis to be given to different parts of the data at different times, allowing the viewer to take in the information at a more manageable rate. 

To illustrate just how fast preattentive processing is, you can watch [this three minute video](https://www.youtube.com/watch?v=wnvoZxe95bo&ebc=ANyPxKoPKNVc2XI1vQuAwQxnL9TejWaWuwLxVU0axqAG2OyUL9sPfPO5c-TimZiLh1SLnIzKcLlM). The human brain is able to spot the salient information (the anomaly in the data) in a fraction of a second. If you have a lot of data to present, using methods that utilize the viewer's preattentive processing capabilities can steer her to the most important data to remember first, since after making around 7 observations, the short term memory capacity will have been met.

###Methods for Activating Preattentive Processing

A [2012 IEEE paper by Healy and Enns](http://www.csc.ncsu.edu/faculty/healey/download/tvcg.12a.pdf) describes preattentive processing as "the way human vision rapidly and automatically categorizes visual images into regions and properties based on simple computations that can be made in parallel across an image." They cover the human visual system and the various theories around preattentive processing very thoroughly, so if you're interested in going further into this topic, I highly suggest you read their paper.

Not every visual encoding can be used to trigger preattentive processing. In fact, sometimes a particular encoding is effective only in certain cases. Healy and Enns reference a work by A. Treisman that showed "a sloped line in a sea of vertical lines can be detected preattentively, but a vertical line in a sea of sloped lines cannot." Here is a list of features that can trigger preattentive processing (defined as "tasks that can be performed on large multi-element displays in less than 200-250 milliseconds").

<img alt="Examples of Preattentive Features" src="/img/preattentive-features.png" class="full-size">

####Similarity Theory

<h1 class="pull-quote right">there has to be some background data for anything to appear in the foreground</h1>

You might notice that there's a common component in each of the preattentive feature visualizations above that allows certain data elements to pop out: a sort of background of uniform objects. That requirement is accounted for in Duncan and Humphreys' Similarity Theory. In this theory, the search time for "target" elements depends on two measures: T-N Similarity and N-N Similarity. T-N Similarity is the amount of similar features shared by targets and nontargets, and as it goes up, it's harder to detect the target. N-N Similarity is the amount of similarity within the nontargets themselves, and as it goes up, it's easier to detect the target.

![Preattentive Processing Example of Confounding Factors](/img/preattentive-example.png)

In the above figure, the task is to determine which images have a red circle in each pairing (a-b, c-d, e-f). The a-b and c-d pairs are easy to figure out quickly because all of the nontarget elements are identical. However, when the two nontarget elements are combined for e-f, N-N Similarity is reduced, and therefore it's harder to detect the red circle.

Similarity Theory effect is closely related to the [principals of Gestalt](http://graphicdesign.spokanefalls.edu/tutorials/process/gestaltprinciples/gestaltprinc.htm). These principals are useful if you want to group certain data elements together, or make data elements stand out. Remember, when emphasizing data, there has to be some background data for anything to appear in the foreground. 

####Ranking Preattentive Features

As for whether certain preattentive features are more effective than others, the answer is yes, but it's a complicated yes. Healy and Enns refer to this ordering as "rough", and many of these features in the ranking, such as 3D layout, are not even that appropriate for the typical visualization of abstract information. The ranking goes as follows.

1. Determine the 3D layout of a scene;
2. Determine surface structures and volumes;
3. Establish object movement;
4. Interpret luminance gradients across surfaces; and
5. Use color to fine tune these interpretations.

Typically, when any of these features interfere with each other, it's the feature earlier on the list that takes precedence. Again though, this list is hardly an excuse to start using 3D embellishments on your graphs, and preattentive features in visualizations should be designed not to conflict anyway. After all, data visualization is a medium that is under much more control than the visual scenes our brains evolved to handle, and that should be used as an advantage.

###Further Research on the Visual System

There is plenty of additional research on this topic, as well. Similarity Theory hypothesizes about bottom-up processes that don't account for other top-down processes, like someone with a particular goal in mind would have. This goal could be internal or external. In the case of the Similarity Theory example above, the participant has an external goal since she is told to look for a red circle, and this directive influences how the participant perceives the figure. More advanced theories account for top-down processes as well, like [Guided Search Theory](https://en.wikipedia.org/wiki/Visual_search#Guided_search_model) by Wolfe et al. 

Beyond that, researchers have even found that more information can be taken in during the preattentive stage than just singular attributes. For instance, D. Ariely showed that "observers could extract the average size of a large number of dots from a single glimpse of a display. Yet, when observers were tested on the same displays and asked to indicate whether a specific dot of a given size was present, they were unable to do so. This suggests that there is a preattentive mechanism that records summary statistics of visual features without retaining information about the constituent elements that generated the summary." 

Knowing the tendencies and capabilities of human perception and the brain is crucial for a data visualizer. Remember what I said in a previous post, that "you must keep your audience in mind at all times to arrive at the most effective visualization possible." This advice applies to every aspect of your audience, even the parts that they themselves aren't aware of.
