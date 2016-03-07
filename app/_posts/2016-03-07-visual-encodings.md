---
layout: post
title: "Visual Encodings"
blurb: "Visual encodings are the building blocks of data visualizations, so before we go any further with visualization posts, we need to go over them."
thumbnail: eye-logo.png
tags: 
  - Visualization
---

In my [last post](http://www.datajourneyman.com/2016/02/29/data-visualization.html), I gave a high-level introduction to data visualization. Now it's time to dig deep into some of the more "nuts and bolts" aspects of data visualization, specifically, visual encodings, which are like the atomic particles of data visualization, and just like physical atoms come together to form the molecules we interact with daily, visual encodings can be combined to create graphs.

###Visual Encodings

This [Udacity video](https://www.udacity.com/course/viewer#!/c-ud507/l-3068848585/m-3095208720) is a great introduction to visual encodings. It analyses a beautiful [Gapminder visualization](http://www.gapminder.org/world/#$majorMode=chart$is;shi=t;ly=2003;lb=f;il=t;fs=11;al=30;stl=t;st=t;nsl=t;se=t$wst;tts=C$ts;sp=5.59290322580644;ti=2015$zpv;v=0$inc_x;mmid=XCOORDS;iid=phAwcNAVuyj1jiMAkmq1iMg;by=ind$inc_y;mmid=YCOORDS;iid=phAwcNAVuyj2tPLxKvvnNPA;by=ind$inc_s;uniValue=8.21;iid=phAwcNAVuyj0XOoBL_n5tAQ;by=ind$inc_c;uniValue=255;gid=CATID0;by=grp$map_x;scale=log;dataMin=194;dataMax=96846$map_y;scale=lin;dataMin=23;dataMax=86$map_s;sma=49;smi=2.65$cd;bd=0$inds=;modified=60) (requires Flash) which utilizes a bunch of visual encodings in a very effective way. From the video, the most common visual encodings are position, size, orientation, coolor saturation, color hue, shape and texture.

<h1 class="pull-quote">A graphical method is successful only if the decoding is effective</h1>

Research was done on visual encodings as far back as the 1980s, most notably in a paper by Cleveland and McGill titled ["Graphical Perception and Graphical Methods for Analyzing Scientific Data"](https://web.cs.dal.ca/~sbrooks/csci4166-6406/seminars/readings/Cleveland_GraphicalPerception_Science85.pdf). The paper starts off by noting the following.

>When a graph is constructed, quantitative and categorical information is encoded, chiefly through position, shape, size, symbols, and color. When a person looks at a graph, the information is visually decoded by the person's visual system. A graphical method is successful only if the decoding is effective. No matter how clever and how technologically impressive the encoding, it fails if the decoding process fails. Informed decisions about how to encode data can be achieved only through an understanding of this visual decoding process, which we call graphical perception.

Cleveland and McGill performed a series of three experiements which tested subjects' accuracy at comparing visual encodings with other examples of the same encoding. For instance, to test a subject's ability to gage the value of an angle, one angle would be shown, and then a second, and the subject would be asked what the ratio of the two angles were (e.g., the second angle is 120% of the first angle). The accuracy values were recorded for an array of encodings across the three experiments, captured in this figure.

![Cleveland and McGill's visual encoding rankings](/img/visual-encoding-ranking.png)

Based on these results, Cleveland and McGill settled on the following ranking of visual encodings by effectiveness.

1. Position along a common scale
2. Position on identical but nonaligned scales (e.g., [small multiples](https://en.wikipedia.org/wiki/Small_multiple))
3. Length
4. Angle, Slope (when the angle is not close to 0, \\(\frac{\pi}{2}\\), or \\(\pi\\))
5. Area
6. Volume, Density, Color Saturation
7. Color hue

Whenever possible, you should use encodings higher up the list, since they're more effective, but of course as you introduce more variables into your visualization, encodings further down the list will have to be used. The best approach, then, is to use the more effective encodings for the more important features of your data.

###Encodings of Common Chart Elements

[According to Stephen Few](http://www.perceptualedge.com/articles/b-eye/encoding_values_in_graph.pdf), most relationships can be visually expressed with points, lines, and bars (or some combination). Let's consider which visual encodings each of these graphical components.

**Points**

- *Position:* since points generally have no meaningful height and width, they convey position with more precision than lines and bars
- *Size:* points can use size as an encoding (see [bubble charts](https://en.wikipedia.org/wiki/Bubble_chart)), however, since it gives substance to the points' height and width, the precision of their positions is reduced
- *Orientation:* if the shapes of your points are not symmetrical, then orientation could be an encoding, but it's not often used, and for good reason
- *Color Saturation/Hue:* scatter plots often use these two encodings, but there are wrong ways to do so (which we will see in an upcoming post exclusively about color)
- *Shape:* while it's possible to encode a categorical variable with a point's shape, it quickly leads to a cluttered graph and should be avoided
- *Texture:* since the small size of points make their position so precise, textures are too hard to distinguish and should be avoided

**Lines**

- *Position:* lines are most effectively used to connect two categorical data points, so the positions of the endpoints encode some quantitative property of the data points
- *Size:* lines have no width, so size here means length, which represents the amount of time between sampling (which is commonly constant throughout the graph, but not necessarily so)
- *Orientation:* the main reason to use lines is to compare changes from data point to data point, and the orientation of the line (slope) depicts this change, so orientation is a very salient encoding for line charts
- *Color Saturation/Hue:* it's possible to have multiple lines representing different categories of data, in which case color hue can encode these different categories, but color saturation is not appropriate for categorical variables and so should be avoided
- *Shape:* if a line were a different shape, then it wouldn't be a line, therefore shape is not applicable
- *Texture:* since lines have no width, texture would translate to dotted lines, which are too hard to distinguish, so texture as an encoding should be avoided

**Bars**

- *Position:* often bars are fixed to a meaningful zero value on one axis, so the position of its free endpoint can represent a quantiative value
- *Size:* since bars often have one endpoint fixed at zero, the size is a double encoding coupled with position, which is why bars are a great tool for emphasizing individual values; the main exception to this idea is a stacked bar chart since only the bottom bar is fixed to zero in that case, and size is the only encoding of the magnitude of the quantitative value in that case
- *Orientation:* Bars should be perpendicular to the axis of the categorical variable they're representing, so orientation is fixed and therefore not applicable
- *Color Saturation/Hue:* color hue is useful to distinguish bars from each other when multiple bars are used per category to represent different values, but saturation would be a much less effective encoding for bars
- *Shape:* just like with lines, a bar is defined by its shape, so shape is not an applicable encoding
- *Texture:* bars are weighty enough to support texturing, but often it's more effective to use color to this end

Knowing the strengths and weaknesses of these common chart components can be the ultimate visualization cheat sheet. If you have a clear understanding of your data and its variable types, it can often be quite easy to use this knowledge to come up with a simple representation as a starting point for more complex visualizations.

###Accentuate the Pertinent

Cleveland and McGill took their research one step further by offering examples of visualizations that can be improved by switching what variable is assigned to the effective encodings. These examples are incredibly illuminating. Each example shows the power of taking a less optimal encoding and changing the graph to use position instead (the top encoding according to their paper).

####Example 1: Replacing Slope with Position

![Slope being replace by position for increased interpretability](/img/accentuate-the-pertinent-1.png)

Say you want to highlight the change in CO2 levels from year to year. The default approach is to use a line graph to represent the values in this time series, as it's done in the top graph. However, that highlights the actual values, and the changes in CO2 from year to year is encoded with slope. In the bottom graph, the height of each point represents that year's CO2 levels minus the year before it. (In a mathematical sense, this graph is the derivative of the top graph.) So the pertinent data, the change in CO2 levels, has had its encoding upgraded from slope (#4) to position (#1), and the bottom graph is much clearer for it.

####Example 2: Replacing Length with Position

![Length being replace by position for increased interpretability](/img/accentuate-the-pertinent-2.png)

Next, say you want to compare the values of a subgroup (here, 1 throught 5) across different samples (A, B, C). The top graph does not make it easy to decipher exact values. The best you can say from the top graph are things like "The total value is smallest is sample B" and "Subgroup 4 decreases from A to B to C". Statements like "Subgroup 4 decreased by approximately 20% from sample A to sample B" are difficult to conclude on the top graph, but are easier to see on the bottom dot chart. In this example, the exact values of the subgroups have been changed from being encoded by length (#3) to being encoded by position (#1).

####Example 3: Replacing Length/Area with Position

![Length/Area being replace by position for increased interpretability](/img/accentuate-the-pertinent-3.png)

Finally, say you want to demonstrate the difference of two curves. Plotting the curves directly encodes their difference as the length between them at a given x point (or encodes it as area if you're considering an x range). The particular curves plotted in the top graph here appear to have their maximum difference near their peaks, somewhere around x=25. However, this is an optical illusion, because if you change the encoding from length (#3) or area (#5) to position (#1) by plotting the actual difference between the two curves, you can see that the difference between them is always decreasing from left to right.

###Takeaways

<h1 class="pull-quote right">Once you know the rules, you can know how to bend them</h1>

Knowing the fundamental components of a visualization, the encodings themselves, is vital to knowing what works (and what doesn't work) when it comes to data visualization. It takes you from "there's something about this chart that seems a little off" to "this chart isn't using optimal encodings, and this is how to fix it". In terms of design, these principals will get you to a sensible chart, but they won't necessarily get you to something that is aesthetically pleasing. For that, there are plenty of other design principals you can apply, as long as you're careful not to let adornments cloud the clarity of your visualization's foundation.

Lastly, these guidelines are not a set of unbreakable commandments. The authors themselves say that their results are not "a precise prescription for displaying data but rather is a framework within which to work." Once you know the rules, you can know how to bend them without losing the underlying message of your data.
