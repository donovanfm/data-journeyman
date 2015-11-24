---
layout: post
title: "Correlation Nation"
blurb: "'Correlation does not imply causation' is data science mantra, but in this post I take a look at another problem with reports of correlations."
thumbnail: logo.png
tags: 
  - Data Analysis
---

###Correlation Envy

The internet is abounding with articles and posts showing correlations between variables. Though [I have problems](http://www.datajourneyman.com/2014/09/12/thinking-with-data.html) with many of these posts even if they have a big, fat "Correlation does not imply causation" warning label, there is another problem with the abundance of these posts, and that is, "Where are all of the posts about the _absence_ of a correlation."

Data science is about uncovering knowledge, and that knowledge is valuable if it confronts our preconceived notions about how something works. Usually, one thinks that this means showing a relationship between features that was previously undiscovered. However, it could just as easily be a demonstration that no relationship exists where “common sense” would lead one to believe a relationship exists. Finding no relationship can feel less satisfying, but if an incorrect belief can be reversed, then it's just a valuable of a finding a strong relationship between two variables.

In a recent project I was working on, I very much expected to find a correlation between a school's revenue (per student enrolled) and its graduation rate for that year. However, I was very surprised to find no correlation at all, making this data narrative a very interesting one!

###The Case of the Missing Correlation

I was analyzing several variables' effects on a schools graduation rate, and my initial hypothesis was that of all of the variables I had, Revenue per Student would be the strongest predictor of Graduation Rate. But the more I explored the data, the more I became convinced that that wasn't the case. 

Take, for instance, this slope plot of the top 10 and bottom 10 schools ranked by overall Revenue per Student. Seeing where these schools ended up in the overall Graduation Rate rankings, it doesn't seem like getting a good rank in the first column ensures a good rank in the second.

<img alt="Graduation Rate and Revenue per Student Ranks" src="/img/grad-rate-ranks.png" class="full-size">

Then, I plotted the Graduation Rates and Revenues per Student for each state, showing that the states with high graduation rates don’t necessarily have high Revenues per Student and vice versa, further illustrating the lack of correlation between the two variables.

<img alt="Graduation Rate and Revenue per Student Heat Map by State" src="/img/grad-rate-by-state.png" class="full-size">

Finally, I plotted each school on a scatter plot of Graduation Rates versus Revenue per Student. I also fitted a [Generalized Additive Model](https://en.wikipedia.org/wiki/Generalized_additive_model) to the data. While there is a hint of a positive relationship between the two variables, the regression model shows that it is a tenuous relationship at best. In the upper and lower ranges for Revenue per Student, there aren’t many samples, so the variance is large. For the most dense section of the data, there isn’t a clear monotonic relationship, since the regression curve peaks and dips in several spots.

<img alt="Graduation Rate and Revenue per Student Scatter Plot" src="/img/grad-rate-scatter-plot.png" class="full-size">

Combined, these three plots demonstrate the lack of correlation between Graduation Rate and Revenue per Student. Granted, this finding can't be used to justify cutting school budgets country-wide or anything that drastic. There could be many reasons that confound some hidden relationship between these variables. For instance, the purchasing power in each state is very different. Or maybe school sizes should has something to do with it; perhaps as a school gets larger, the cost of adding additional students decreases, so these schools would have a lower Revenue per Student. Still though, the lack of a strong correlation raises a lot of questions, and points us in a direction for further investigation.