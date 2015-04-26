---
layout: post
title: "The Button: An Alternate Timeline"
blurb: "A simple April Fool's Day stunt turned into a fascinating social experiment, but was derailed weeks into it by technical issues. I'll offer an analysis that will hopefully bring closure to those who were invested in the experiment."
thumbnail: the-button-logo.png
tags: 
  - Personal
  - Data Analysis
  - IPython Notebook
---

###A Brief Overview

On April 1, Reddit announced a simple new subreddit named [/r/thebutton](http://www.reddit.com/r/thebutton). The rules are simple. There is a button at the top of the page next to a timer. The timer counts down from 60 seconds. When someone pushes the button, the timer resets. That person will recieve an indicator (flair) next to his or her username indicating the time when the button was pressed that's color-coded based on approximately 10 second intervals. And once you've pushed the button, you can't press it again.

![Image of The Button](/img/the-button.png)

That's it. It's so simple. Not the kind of thing that you would think an entire statistics post could be based on. But what has come out of this experiment is by no means simple. There are a plethora of [factions](http://imgur.com/gallery/ue3Wt)/[religions](http://www.reddit.com/r/thebutton/comments/31709l/official_survey_of_the_buttons_religions_record/), [propoganda](http://imgur.com/a/kX0h1) [posters](http://imgur.com/a/89i6z), [fan art](http://www.reddit.com/r/thebutton/comments/31mdkf/the_huge_list_of_everything_button/), and even [conspiracy theories](http://www.reddit.com/r/thebuttonisalie) and [sabotage campaigns](http://www.reddit.com/r/thebutton/comments/328wod/warning_avoid_these_plugins_one_of_them_is/). It's a veritable Game of Chromes, survival of the quickest, and it is no less than legendflairy (Guys, are we still doing [legendary puns](http://i3.kym-cdn.com/photos/images/original/000/706/483/60e.png)? Guys?)

###The Shape of the Data So Far

Get the IPython Notebook used in this analysis [here](https://github.com/dfmcmurray/data-journeyman/tree/master/app/ipython-notebooks/The%20Button)

The data naturally trends downward for two reasons. Every minute, there are fewer eligible people to press (account created on or after April 1 cannot press). Also, since low-numbered flairs are more rare, some people will hold out for them.

There were many external forces that influenced the shape of the data. Media attention around April 12 brought a lot more activity to the button (and subsequenly, higher minima for the next 2 or 3 days). Then, on Friday night, April 17th, a server failure caused many participants to be unable to press the button, allowing [/u/GyroDawn](http://www.reddit.com/user/GyroDawn) to snag an 8s flair, far before such a low time would have occurred naturally. This outlier has been removed from the dataset used here.

This leads us to the even more unfortunate technical glitch that forever altered the fate of the button. A little before 2pm EDT on Saturday, April 25, another server failure allowed the button to reach 0, with many people gaining very low flair, including 1s flair and even the seemingly impossible 0s flair.

![Button Presses Plot](/img/button-presses.png)

This graph roughly shows the local minima of the button timer. The data is periodic, having a period of 24 hours, with the lowest lows coming while most Americans are asleep in the wee hours of the morning (around 5am EDT). It's hard to miss that blue segment stretching down to 0 on <nobr>4-25</nobr>, which was a result of that second, catastrophic glitch. This glitch caused many to lose interest in what is now a compromised experiment.

###An Alternate Timeline

But what if I could offer you an alternate timeline, a possible outcome of the button without this damaging <nobr>4-25</nobr> glitch?

![Doc Brown Alternate Timeline Picture](/img/alternate-timeline.jpg)

The timer started counting down from 60 and reached 0 at index 1841914, so I'm calling that index the apocalyptic index. Removing all the data starting with the apocalyptic index, we have a purer data set to work from.

![Button Presses (Pre-Apocalyptic)](/img/button-presses-trimmed.png)

We can strip away a lot of the complexity of the data by only looking at the absolute minimum for each day. The following graph is a plot of the minimum for each day.

![Button Presses Daily Minima](/img/button-presses-daily-minima.png)

Performing a linear regression on the daily minimum graph yields a really good fit. 

![Button Presses Daily Minima Linear Regression](/img/button-presses-daily-minima-regression.png)

Extrapolating into the future, it follows that the minimum daily value would have reached zero on the 34th day, meaning that the button would have ended on that day. Since I started counting with day 1 for April 1st, the 34th day would be May the 4th, a popular estimate for the end of the button due to its relation to the Star Wars quote.

![May the 4th Be With You Picture](/img/may-the-4th-be-with-you.jpg)

So, to give some closure to myself and anyone else who felt a little let down by the anticlimatic ending to the button (though, technically, it's currently still running after being reset), I feel like this analysis is a good place for me to leave it. I appreciate everyone who made the button community so fun to observe while it lasted. Good night, sweet button.
