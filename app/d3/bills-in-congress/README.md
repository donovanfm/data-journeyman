#U.S. Legislative Process Visualization

[See it in action.](http://www.datajourneyman.com/d3/bills-in-congress/)

![Screenshot of the U.S. Legislative Process Visualization](https://raw.githubusercontent.com/dfmcmurray/data-journeyman/master/app/d3/bills-in-congress/img/viz-final.png)

##Summary

On the whole, Americans don't know as much about their government as they should. One of the backbones of the American government is the legislative process through which new laws are created. The objective of this visualization is to show a glimpse into that legislative process. Specifically, there are two narratives that this visualization aims to convey.

1. A very small number of bills become law compared to the amount that are introduced into Congress. 
2. Years where different parties control the different governing entities have even fewer bills become law.

There is a lot of friction in this process that keeps the vast majority of bills from getting through. I hope that upon seeing how many bills fail, the viewer will be curious to find out the ways in which bills fail and will continue learning about the process from other sources to understand why so many bills fail.

##Design

I went through several design iterations before settling on the general layout of the visualization. 

####Design Stage 1

My first idea was to lay out the different governing entities spatially, and show the progression of bills as they pass through those entities. Ultimately, I felt like this wasn't the most straightforward way to tell the two data stories above, and I also found [another visualization](http://legex.org/process/index.html) that already does a similar thing.

![Visualization Sketch 1](https://raw.githubusercontent.com/dfmcmurray/data-journeyman/master/app/d3/bills-in-congress/img/viz-stage-1.png)

####Design Stage 2

I then switched to a new layout that showed a histogram of bills at different stages of the legislative process. I also added some details about the current Congress to provide context for the viewer.

![Visualization Sketch 2](https://raw.githubusercontent.com/dfmcmurray/data-journeyman/master/app/d3/bills-in-congress/img/viz-stage-2.png)

####Design Stage 3

The next iteration only had minor changes. I moved the Congress detail to the left and separated the bars from each other, connecting them with a slope line to put more emphasis on the drop in the number of bills at each stage.

![Visualization Sketch 3](https://raw.githubusercontent.com/dfmcmurray/data-journeyman/master/app/d3/bills-in-congress/img/viz-stage-3.png)

####Design Stage 4

Then, to show the changes within each party better, I unstacked the bar chart, splitting it into 3 charts. This helps the viewer see how many bills failed at each stage by party, since the bill counts are encoded by length and y position instead of just length, like it is in the stacked bar chart of Stage 3.

![Visualization Sketch 4](https://raw.githubusercontent.com/dfmcmurray/data-journeyman/master/app/d3/bills-in-congress/img/viz-stage-4.png)

####Design Stage 5

The main change I made at this stage of my ideation was to allow the viewer to control which party was displayed, so that only one chart has to be displayed at a time. This reduces visual clutter and allows the chart to be bigger.

![Visualization Sketch 5](https://raw.githubusercontent.com/dfmcmurray/data-journeyman/master/app/d3/bills-in-congress/img/viz-stage-5.png)

##Feedback

After implementing the visualization from Stage 5, I showed my interactive visualization to 3 people to get their feedback.

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

##Resources

Most of my conceptual understanding of data visualizations and d3.js came from Udacity's "Data Visualization with d3.js" course.

I also used all of the references I wrote about in my data visualization blog posts:
[Data Visualization](http://www.datajourneyman.com/2016/02/29/data-visualization.html)
[Visual Encodings](http://www.datajourneyman.com/2016/03/07/visual-encodings.html)
[Color](http://www.datajourneyman.com/2016/03/14/color.html)
[Preattentive Processing](http://www.datajourneyman.com/2016/03/21/preattentive-processing.html)

Finally, I used several utility functions that I got from various online sources:
http://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
https://bl.ocks.org/mbostock/7555321
http://bl.ocks.org/alexhornbake/6005176
