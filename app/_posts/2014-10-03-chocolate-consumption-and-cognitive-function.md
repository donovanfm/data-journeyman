---
layout: post
title: "Chocolate Consumption and Cognitive Function"
blurb: "Dr. Messerli takes some liberties in his paper comparing chocolate consumption to cognitive abilities and reaches a dubious conclusion."
thumbnail: line-chart-logo.png
tags: 
  - Ice Cream Crimes
  - IPython
---

###The Paper

####The Hypothesis

In his paper "[Chocolate Consumption, Cognitive Function, and Nobel Laureates](http://www.nejm.org/doi/full/10.1056/NEJMon1211064)", published in The New England Journal of Medicine, Dr. Frank H. Messerli tries to defend his claim that "chocolate consumption could hypothetically improve cognitive function...in whole populations." 

Chocolate consumption data is pretty straightforward, but defining cognitive function is no small feat. Messerli uses Nobel laureates per capita to represent a country's cognitive function.

####The Data

The [Nobel laureate data](http://en.wikipedia.org/wiki/List_of_countries_by_Nobel_laureates_per_capita) includes awards from the prize's inception to October 10, 2011 for all of the award types (Chemistry, Literature, Peace, Physics, Physiology or Medicine, and Economics). The first five of those award types have been awarded since 1901, and the Economics prize has been awarded since 1968.

The chocolate consumption data used by Messerli is more of a hodge-podge. He got his data from [chocosuisse](http://www.chocosuisse.ch/chocosuisse/en/home), [Theobroma Cacao](http://www.theobroma-cacao.de/wissen/wirtschaft/international/konsum), and [Caobisco](http://caobisco.eu/), though the Caobisco link in his paper is no longer valid. I found a [news article](http://www.confectionerynews.com/Markets/Interactive-Map-Top-20-chocolate-consuming-nations-of-2012) on the site with data from 2012, but none of the data in the paper were that recent, the paper itself being published in October of 2012. From Messerli's paper: "Data were available from 2011 for 1 contry (Switzerland), from 2010 for 15 contries, from 2004 for 5 counties, and from 2002 for 1 country (China)."

####The Results

<img class="full-size" alt="Correlation between Countries' Annual Per Capita Chocolate Consumption and the Number of Nobel Laureates per 10 Million Population" src="/img/chocolate-consumption-vs-nobel-laureates.png">

Using the selected data, Messerli actually found a surprisingly strong linear correlation, \\(0.791\\). To take it a bit further, Messerli then calculated the correlation after taking Sweden out (due to possible patriotic bias in the Nobel Committee), pushing the value to \\(0.862\\). 

From there Messerli goes on to project that it takes 0.4 kg of chocolate consumption per capita for a country to earn a Nobel Prize, which in the United States would be an additional 125 million kg. He says there is a minimally effective does of 2 kg per person per year and that there is no apparent cap on this effect.

Messerli does cite the common mantra that correlation does not mean causation, but then he immediately goes on to say that due to previous research that he cited[^1] [^2] [^3] [^4] [^5], that "it seems most likely that in a dose-dependent way, chocolate intake provides the abundant fertile ground needed for the sprouting of Nobel laureates." The other options that he quickly dismisses are 1) that a country with higher than average cognitive performance (measured in Nobel laureates) encourages a heightened rate of country-wide chocolate consumption and 2) that some other cause (socioeconomic, geographic or climatic) might influence cognitive functiona and chocolate consumption in the same direction. Messerli writes off case 2 because it is "difficult to identify a plausible common denominator" and possible common denominators "fall short of fully explaining the close correlation observed."


###The Problems

There are many problems that undermine the justifications in this paper, but the first problem I had with the paper was that it was less than 3 pages long and it cost me $15 for access, which is an embarrassment in a post Aaron Swartz world, but I digress.

Beyond that, the data itself is problematic. The Nobel Prize data covers the entire 20th century and part of the 21st, but the chocolate consumption data is only for a single year per country, and it's not even the same year for each country. 

I tried finding annual chocolate consumption data for a single year for all of the countries as far back in time as I could (since Messerli's hypothesis of chocolate translating to the awarding of a Nobel Prize would surely take some time), but the best I could do was find 2004 data for all of the countries except Poland. Leaving Poland out, I found that the correlation with this chocolate consumption data and the most recent Nobel Prize data was \\(0.741\\), which is \\(0.05\\) lower than Messerli's lowest estimate. (See my calculations [here](https://github.com/dfmcmurray/data-journeyman/tree/gh-pages/ipython-notebooks/Chocolate Laureates).)

Due to the extremely small sample size of the data, it's not surprising that selecting new data points has an effect on the resulting correlation. The fact that the data is sparse (there have only been [561 prizes awarded](http://en.wikipedia.org/wiki/List_of_Nobel_laureates)) is itself a problem that diminishes the strength of the correlation. When trying to categorize the totality of human cognition, 561 data points is extremely limited.

Furthermore, Messerli uses no data to dismiss the counter arguments he mentions. A skeptical audience should not be placated so easily! Why isn't a country's socioeconomic status a valid hypothesis? After all, it makes sense that as a country reaches a certain level of economic luxury, items such as chocolate should become more prevalent, along with an increase in the time and funding to do the scientific, economic, medical, or literary work necessary to obtain a Nobel Prize. Or, what about cultural differences? The Nobel Committee has awarded a skewed number of prizes to Western countries (especially European countries), indicating bias in the committee's judgement and/or standards. Similarly, chocolate is more culturally prevalent in Western countries, with the [majority of chocolate being produced](http://www.icco.org/about-cocoa/chocolate-industry.html) in Western countries as well.

Messerli's hypothesis is a huge claim to make, and such a strong claim should have a similarly strong justification. His methodology just doesn't stack up, especially when there are so many viable alternative explanations.

<hr>

Footnotes:

[^1]: Nurk E, Refsum H, Drevon CA, et al. Intake of flavonoid-rich wine, tea, and chocolate by elderly men and women is associated with better cognitive test performance. J Nutr 2009;139:120-7.
[^2]: Desideri G, Kwik-Uribe C, Grassi D, et al. Benefits in cognitive function, blood pressure, and insulin resistance through cocoa flavanol consumption in elderly subjects with mild cognitive impairment: the Cocoa, Cognition, and Aging (CoCoA) Study. Hypertension 2012;60:794-801.
[^3]: Corti R, Flammer AJ, Hollenberg NK, Lüscher TF. Cocoa and cardiovascular health. Circulation 2009;119:1433-41.
[^4]: Sorond FA, Lipsitz LA, Hollenberg NK, Fisher ND. Cerebral blood flow response to flavanol-rich cocoa in healthy elderly humans. Neuropsychiatr Dis Treat 2008;4:433-40.
[^5]: Bisson JF, Nejdi A, Rozan P, Hidalgo S, Lalonde R, Messaoudi M. Effects of long-term administration of a cocoa polyphenolic extract (Acticoa powder) on cognitive performances in aged rats. Br J Nutr 2008;100:94-101.

