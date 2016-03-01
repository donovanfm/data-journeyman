---
layout: post
title: "Data Visualization"
blurb: "This introductory post to data visualization will be the first of a several-week series on the subject."
thumbnail: bar-graph-logo.png
tags: 
  - Visualization
---

###Visualization, Why?

There are many ways to communicate your data to your audience, each with varying levels of effectiveness. The most effective (and thus, the most prevalent) for of this communication is data visualization, which can come in the form of charts, graphs, plots, sketches, illustrations, gifs, videos, interactions, and an increasing number of media.

Why are data visualizations so prevalent? Because evolution. The [human retina can transmit information](http://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0002NC) at the same rate as an Ethernet cable (1250 MB/s). That's 10 times the bandwidth of touch, and 100 times the bandwidth of hearing and smell, in terms of how efficient our brains are at processing information coming from those input senses. Furthermore, there is even a possibility that [visual encoding makes recalling information easier](http://www.radiolab.org/story/91711-limits-of-the-mind/).

<h1 class="pull-quote">The human retina can transmit information at the same rate as an Ethernet cable</h1>


Granted, there is still a big difference between understanding an abstract visualization and a physical activity such as reacting to visual stimuli while mountain biking. The latter is something our brains are much more adept at, since that activity more closely resembles the survival skills that got us as far along the evolutionary ladder as we've come. Still, using this visual predisposition of the human brain is an excellent way to convey information and relationships.

###Visualization, How?

There is so much literature out there regarding best practices for visualizing data. Some of it is even conficting. So it can be a little intimidating on deciding where to start, aside from just throwing together plots and graphs based on what "feels right" (which, admittedly, isn't a terrible hueristic for creating visualization, but is one that doesn't allow for introspection or much improvement).

Andrew Abela's "Chart Chooser" is one way to start reasoning about how to transform your data into a useful visualization. It starts by asking what relationship you want to show among your data, and branches out depending on the types of data you're dealing with.

<img alt="Andrew Abela's Chart Chooser" src="/img/chartchooserincolor.jpg" class="full-size">

Another way to start deciding on the right visualization is to look at your data types first, which serves to narrow down the appropriate types of visualizations very quickly. Stephen Few lists [7 quantitative relationships](http://www.perceptualedge.com/articles/ie/the_right_graph.pdf) that apply to various data types.

|  |  |
|--|--|
| **<nobr>Nominal Comparison</nobr>** | A simple comparison of the categorical subdivisions of one or more measures in no particular order |
| **<nobr>Time Series</nobr>** | Multiple instances of one or more measures taken at equidistant points in time |
| **<nobr>Ranking</nobr>** | Categorical subdivisions of a measure ordered by size (either descending or ascending) |
| **<nobr>Part-to-Whole</nobr>** | Measures of individual categorical subdivisions as ratios to the whole |
| **<nobr>Deviation</nobr>** | Categorical subdivisions of a measure compared to a reference measure, expressed as the differences between them |
| **<nobr>Frequency Distribution</nobr>** | Counts of something per categorical subdivisions (intervals) of a quantitative range |
| **<nobr>Correlation</nobr>** | Comparisons of two paired sets of measures to determine if as one set goes up the other set goes either up or down in a corresponding manner, and if so, how strongly | 

Stephen Few's rules cut up the visualization techniques of Andrew Abela's flow chart in a much different way (and several visualizations in each method are not captured by the other at all). See the following edited version of "Chart Chooser" to see how the visualizations in the two schemes are distributed differently.

<img alt="Andrew Abela's Chart Chooser Edited to Show Stephen Few's Qantitative Relationships" src="/img/chartchooserincolor_comparison.png" class="full-size">

<h1 class="pull-quote left">you must keep your audience in mind at all times</h1>

Both of these methods of narrowing down what visualizations to use are just two examples of the first step of the visualization process. There are many other ways you can get started, and after you've selected a visualization, there are many steps beyond that to end up with something that really speaks to your audience. No matter how you decide on your visualization, you must keep your audience in mind at all times to arrive at the most effective visualization possible.