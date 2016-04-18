---
layout: post
title: "U.S. Legislative Process Visualization"
blurb: "A visualization project I did for my Udacity nano degree program."
thumbnail: congress-logo.png
tags: 
  - Visualization
---

As I've written about previously, I'm currenlty enrolled in Udacity's Data Analyst Nano Degree program. For my most recent project, I had to create a compelling data visualization. Using [d3.js](https://d3js.org/), I created an interactive visualization of the U.S. Legislative Process that goes more in depth than the [Schoolhouse Rock! video](https://www.youtube.com/watch?v=tyeJ55o3El0) that most people know. 

[See it in action.](http://www.datajourneyman.com/d3/bills-in-congress/)

<img alt="Screenshot of the U.S. Legislative Process Visualization" src="https://raw.githubusercontent.com/dfmcmurray/data-journeyman/master/app/d3/bills-in-congress/img/viz-final.png" class="full-size">

###Summary

On the whole, Americans don't know as much about their government as they should. One of the backbones of the American government is the legislative process through which new laws are created. The objective of this visualization is to show a glimpse into that legislative process. Specifically, there are two narratives that this visualization aims to convey.

1. A very small number of bills become law compared to the amount that are introduced into Congress. 
2. Years where different parties control the different governing entities have even fewer bills become law.

There is a lot of friction in this process that keeps the vast majority of bills from getting through. I hope that upon seeing how many bills fail, the viewer will be curious to find out the ways in which bills fail and will continue learning about the process from other sources to understand why so many bills fail.

###Design

I went through several design iterations before settling on the general layout of the visualization. 

####Design Stage 1

My first idea was to lay out the different governing entities spatially, and show the progression of bills as they pass through those entities. Ultimately, I felt like this wasn't the most straightforward way to tell the two data stories above, and I also found [another visualization](http://legex.org/process/index.html) that already does a similar thing.

<img alt="Visualization Sketch 1" src="https://raw.githubusercontent.com/dfmcmurray/data-journeyman/master/app/d3/bills-in-congress/img/viz-stage-1.png" class="full-size">

####Design Stage 2

I then switched to a new layout that showed a histogram of bills at different stages of the legislative process. I also added some details about the current Congress to provide context for the viewer.

<img alt="Visualization Sketch 2" src="https://raw.githubusercontent.com/dfmcmurray/data-journeyman/master/app/d3/bills-in-congress/img/viz-stage-2.png" class="full-size">

####Design Stage 3

The next iteration only had minor changes. I moved the Congress detail to the left and separated the bars from each other, connecting them with a slope line to put more emphasis on the drop in the number of bills at each stage.

<img alt="Visualization Sketch 3" src="https://raw.githubusercontent.com/dfmcmurray/data-journeyman/master/app/d3/bills-in-congress/img/viz-stage-3.png" class="full-size">

####Design Stage 4

Then, to show the changes within each party better, I unstacked the bar chart, splitting it into 3 charts. This helps the viewer see how many bills failed at each stage by party, since the bill counts are encoded by length and y position instead of just length, like it is in the stacked bar chart of Stage 3.

<img alt="Visualization Sketch 4" src="https://raw.githubusercontent.com/dfmcmurray/data-journeyman/master/app/d3/bills-in-congress/img/viz-stage-4.png" class="full-size">

####Design Stage 5

The main change I made at this stage of my ideation was to allow the viewer to control which party was displayed, so that only one chart has to be displayed at a time. This reduces visual clutter and allows the chart to be bigger.

<img alt="Visualization Sketch 5" src="https://raw.githubusercontent.com/dfmcmurray/data-journeyman/master/app/d3/bills-in-congress/img/viz-stage-5.png" class="full-size">

###Feedback

After implementing the visualization from Stage 5, I showed my interactive visualization to 3 people to get their feedback. Then, I received feedback from my reviewer at Udacity, which I didn't implement, but it gave me great ideas for future visualizations.

####Feedback Stage 1

- The Congress drop down only had the number of the congress (114, 113, etc.), so the first participant found it confusing what exactly she was selecting. This was addressed in the final visualization.
- The Congress details side panel was always shown, and it was the first thing she saw. It took her a lot of time to figure out what it meant, and only then did she even start looking at the main chart, so I decided to hide that side panel by default, and give the user the ability to toggle its visibility.
- The party filter controls were next to the Congress drop down, and it was unclear to her what the controls did, so I moved the less important controls (the party filter) below the chart.
- There was no percentage information, and she said she was very interested in an exact percentage because it would help her compare different charts.
- Overall, she liked the visualization, and she picked up on my first data story, saying "They don't get much done, do they?"

####Feedback Stage 2

- The second participant didn't realize he could interact with the visualization, so I made the interactive components more prominent. I increased the size of them so that they draw more attention, and I changed the "Show Congress Details" toggle from a link to a button.
- He picked up on my second data story, saying "The Democrats get a lot done when it was all Democrat controlled."

####Feedback Stage 3

- After the improvements from stages 1 and 2, the third participant saw things in the correct order and understood the visualization and interactive elements quickly.
- His first critique was that he didn't like how the y axis changed. He wanted the ability to compare Democratic/Republican bills for a given Congress without the y axis changing. I implemented this feature, but I still allow the y axis to change if a new Congress is selected, since these values can vary by a lot.
- He also suggested slowing down the chart animation, but I decided to keep it at the same speed because I want to encourage people to choose a lot of different configurations, so I don't want the animation to slow them down since the animation is a very minor part of the visualization.

####Udacity Feedback

Even though my project met all of the requirements, my reviewer gave me some further feedback to consider, which I found very helpful.

> One suggestion may be adding more broad perspective, like visualizing all the Congresses in one graph (using a percentage of passed bills) and trying to explain (or connect to some historical reasons) different performance. Such line can also serve as control element like a slider for very fast switching between different years and quick comparisons.

> In addition to previous section suggestion, consider showing both Republicans and Democrats at the same chart -- just draw one part above the x-axis and second below. It will allow to eliminate switch and show all the data at the same time and also highlight differences when one or another party dominates.

I think both of these pieces of advice are spot on, and I will consider the general ideas in future visualizations.
