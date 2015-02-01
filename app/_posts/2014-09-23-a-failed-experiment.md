---
layout: post
title: "A Failed Experiment"
blurb: "Trying to build a case for the claim \"Ice Cream Sales and Violent Crime Rates are positively correlated\" proves to be harder than I expected."
thumbnail: beaker-logo.png
tags: 
  - Data Analysis
  - IPython
  - Ice Cream Crimes
---

(Data and computations for this post can be found [here](https://github.com/dfmcmurray/data-journeyman/tree/gh-pages/ipython-notebooks/Ice Cream Crimes).)

###Correlating Ice Cream Sales and Violent Crime Rates

In [my last post](http://www.datajourneyman.com/2014/09/16/ice-cream-crimes.html), I said that several textbooks use the correlation between ice cream sales and violent crime rates to show that correlation does not imply causation. However, every textbook and article I found on the subject only stated this correlation and did little to back it up. 

When a source did include any evidence to back up the claim of ice cream sales and violent crime rates being positively correlated, the proof was rather weak. The data for ice cream sales usually came from business reports ([like this one](http://www.idfa.org/news-views/media-kits/ice-cream/ice-cream-sales-trends)) that only share their data for a steep price. And most of the crime reports ([like this one](http://sheridan.geog.kent.edu/pubs/2010-WCAS.pdf)) used to back up the claim are very location specific (usually within a single city), and the ice cream sales used to compare were not equivalently localized.

Wanting to do a thorough job in writing that post, I felt compelled to show this correlation myself.

###Hunting for the Data

The entire process of finding suitable data sets proved to be several degrees of magnitude harder than I expected. 

Initially, I tried finding current US ice cream sales data, but the only sources I could find charged a lot of money to get access, and this blog isn't a huge cash cow that affords me thousands of dollars to buy a single data set. I also tried open sources, but I never found any data that was recent enough or complete enough to be worth using. The only semi-usable ice cream data I found (from Ch 4 of [this textbook](http://eu.wiley.com/legacy/wileychi/verbeek2ed/datasets.html)) was from the 1950s, but hey, beggars can't be choosers.

So then I went on to try finding crime rates for the same time frame as the ice cream data. However, all the credible sources I could find only had crime statistics for more recent years. For example, the [FBI's crime statistics](http://www.ucrdatatool.gov/) only go back to 1960. So close!

My initial goal was to find recent and US-centric data. Since loosening the recency restriction prooved fruitless, I had no choice at this point but to relax the US-centric restriction and go global. I had much better luck going this route, and I found two data sets of recent (1995 to 2010) ice cream sales and homicide rates for a number of countries. Both data sets came from the United Nations.

__Sources:__

- [International Ice Cream Sales](https://datamarket.com/data/set/11fx/dairy-products-ice-cream-and-other-edible-ice#!ds=11fx!b00=7.23.2f.1r.v.1f.1t.2i.2e.a.s.1h.29.r.1x.1w.22.l.6.1o.1u.1.t.o.3.15.1z.1k.11.10.1i.1v.i.p.b.1n.17.12.e.1c.k.25.y.1d.2g.4:b01=3&display=line)
- [International Homicide Rates](https://data.un.org/Data.aspx?d=UNODC&f=tableCode%3A1)

###Crunching the Data

Excited to be done with the arduous search for data sets that matched on geographic location and time frame, I immediately jumped into prepping the data. I merged the two data sets on Year and Country so that I could easily compare, say, ice cream sales with the homicide rate in Albania in 2009.

There were some missing data, though, so I decided to drop all rows with any null values. That left me with 291 rows, which I felt was enough to show the correlations I was looking for.

So here I was, all of my data gathered and prepared, ready for that moment of glory when I would see a beautifully correlated graph between ice cream sales and violent crime rates, like I had been promised. I graphed all the data on a scatter plot of homicide rates vs ice cream sales, and was dismayed to see the result looking like this.

![Correlation between Ice Cream Sales and Homicides](/img/failed-experiment-graph.png)

The clear correlation I was expecting is no where to be seen. Using this data, the correlation between ice cream sales and homicides is only 0.135196. This graph is much less a proof of the correlation between ice cream sales and violent crime rates as it is an accurate representation of my tears upon realizing my utter failure.

![Correlation between Failed Experiments and My Tears](/img/failed-experiment-tears.png)

After a bit of reflection, though, I realized that the data had not failed me, but I had failed the data. In my eagerness to show a correlation that I was sure existed just to prove my point, I overlooked a glaring flaw in my choice of data sets.

Since I used global data, the [included countries' wealths](http://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal\)) varied tremendously. Consider Canada (ranked 11th by GDP) and Albania (ranked 125th by GDP), and imagine how their respective wealths impact their ice cream culture. The wealthier the country, the greater their access to ice cream. This global trend was much stronger than the correlation between ice cream sales and homicide rates, causing the data to be heavily weighted to the low-homicide-rate end of the graph, thus drowning out any small correlation there may have been between ice cream sales and homicides. 

###Lessons Learned

__Planning ahead can save you a lot of wasted time.__ If only I had listened to Max Shron's advice from a [previous post](http://www.datajourneyman.com/2014/09/12/thinking-with-data.html) of mine, I would have focused more on the planning aspect instead of jumping straight into playing with the data. If I'd given more thought to the global trends of ice cream consumption and wealth being heavily correlated, I could have avoided working with that data the way I did.

__Don't give in to temptation of bending the data to prove your point.__ After I felt the defeat of not being able to prove my point, I could have continued working to get the data to tell the story I wanted it to tell. I could have removed the rows that didn't fit into my narrative. But that would be the antithesis of Data Science and Science in general.

__Know when to give up.__ This again goes back to Max Shron's advice of focusing on the _why_ of your data project. I realized that maybe it wasn't necessary to show this correlation when I wasn't planning on using it for anything. I only needed it to justify my use of the phrase "Ice Cream Crimes" in future posts when pointing out other examples of poor data techniques. I decided it wasn't worth it to go back to the drawing board at this point and to spend even more hours on a fruitless endeavor that I'd probably start resenting soon. After all, ice cream tastes a lot better than sour grapes anyway.

