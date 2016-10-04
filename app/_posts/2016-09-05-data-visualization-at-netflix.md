---
layout: post
title: "Data Visualization at Netflix"
blurb: "A look into how data science is used at Netflix, a company that relies heavily on data-driven functionality."
thumbnail: video-player-logo.png
tags: 
  - Data Expert
---

Data visualization is useful for exploratory data analysis, validating data or models, and conveying and understanding trends in the data. Data Scientists at Netflix use visualization for all three purposes. 

The following ideas come from some engineers working at Netflix who were asked about data science and data visualization. The people interviewed are [Kanishka Bhaduri](http://www.csee.umbc.edu/~kanishk1/index.html), Senior Data Scientist, [Fernando Amat](http://www.fernandoamat.com), Senior Research Engineer, [Hossein Taghavi](https://www.linkedin.com/in/mhtaghavi), Senior Research Engineer, and [Kenny Xie](https://www.linkedin.com/in/huizhi-kenny-xie-25522323), Data Scientist.

###EDA at Netflix

Visualization is a major part of every step of the data science process. If you want to see the distribution of your data, you first have to plot your data. If you're going to assume your data is Gaussian, then you first need to verify that fact. You also need to check for outliers, which is a very important step. You want to plot your data and make sense of it visually. You might find some patterns that you wouldn't have though about just looking at the numbers.

###Validation at Netflix

You need to see how your model performs, or you might have multiple models to choose from, so you want to compare their performances. Also, if you want to deploy a model to production, you need to monitor its behavior, which visualization can be critical for. At Netflix, there are many ways to customize the experience. If we show someone an ad, we want it to include a show that they will like, or a collection of shows they'll like. We can visualize the engagement of each ad. Also, in the Netflix application, we want to show people rows of video content that keeps the content they most want to see at the top of the page, so we can visualize how high up the thing they eventually watch is on a given layout. 

###Understanding Data at Netflix

Visualization can be one of the most critical aspects of being a data scientist, since visualization can help put an order to the things your interested in. If you have a very large data set of very high dimensions, you can't visualize the entire data set, so you need to do something intelligent with the data. This is where domain scientists play a huge role: they can point you toward the most important features to explore. As another example, results from AB Testing can be communicated using visualization by color coding different statistical significance levels. This is how the AB Testing Dashboard works at Netflix.
