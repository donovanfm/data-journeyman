---
layout: post
title: "Local Data Projects"
blurb: "Lately, I've been attending local meetups for civically minded data science projects. The one I attended last week had amazing projects and presenters."
thumbnail: correlation-logo.png
tags: 
  - DataSci for Good
  - Data Expert
  - Visualization
---

Last Thursday I attended the "Our Lives, Our Data" meetup in Santa Monica for spreading ideas about using data for good. There were six presenters, all of whom worked on very impressive data projects. Here, I'm copying my notes from my three favorite projects: LA's Clean Streets Index, Officer Involved, and Gender Domination in Movie Roles.

### LA's Clean Streets Index 
*by Lilian Coral // Chief Data Officer City of LA*

As part of Mayor [Eric Garcetti](https://en.wikipedia.org/wiki/Eric_Garcetti)'s [Clean Streets LA](http://www.cleanstreetsla.org) initiative, the City's Bureaus of Sanitation drove all of LA's public streets and alleys (traveling over 22,000 miles) and gave each block a "cleanliness score" from 1-3:

1. Clean
2. Somewhat Clean
3. Not Clean

They literally drove every mile of city streets to collect data. They created a clear methodology to standardize the scores, with a formula dependent on finding bulky items, loose litter, weeds, and/or illegal dumping (which resulted in an automatic 3). They also took images and used dash am footage to corroborate their scores. They tracked the trucks and the drivers  with GPS to further the analysis.

Of the 39,915 road segments, 61% were rated clean, 35% were rated somewhat clean, while streets rated unclean made up 4% of total street segments. This data has been aggregated and made into a tool which is open to the public to explore these street scores. The result was [an interactive map](http://www.cleanstreetsla.org/cleanstat/) that shows all of the current street cleanliness data. Also, all of the data is available from [geohub.lacity.org](http://geohub.lacity.org/datasets/661fe82f121a4eb795a1d3884a06f1da_0).

Finally, they wanted to glean insights from the data, to transform "what is" to "what should be". First, they wanted to make sure every child who walks to school has a clean street to walk on. Second, they wanted to prevent illegal dumping; most of it was happening under freeway overpasses, and knowing that allowed them to target this problem. Third, they looked at the placement of trash bins, and how this could be optimized to focus on dirtier streets.

This of all matters to the sanitation department because they have a metric to point to that shows their progress. Also, they have a timeline for eliminating 3 scores, which is possible because of this project.

### Officer Involved
*by Chris Keller // KPCC Data Editor, News Applications Developer*

Los Angeles is somewhat known for its tense relationship between its police force and some of its citizens. Chris Keller and his team wanted to make the problem accessible by visualizing the data from 2010 to 2014. Their report is called [Officer Involved](http://projects.scpr.org/officer-involved/).

They had to make the data themselves. Along the way, they found that CA has tough laws protecting peace officers' privacy. Available data is scattered, is focused on fatal shootings, and rarely has much detail. The only agency privy to the details sent them the records printed on paper, so they had to use OCR to digitize the data, a process that took about 3 months. There were many additional sources of data – such as the LA county medical examiner and PDFs from the LA county sheriff's departments and the California Department of Justice – that had to be combined to get a complete picture of the problem.

In order to help a reader understand the complex nature of the problem, Chris and his team tried to show both of a high level view of the data as well as a zoomed in narrative on individual cases to helper viewers understand the problem. According to Chris, "it's one thing to put data out there and let people explore it, but what's important is the story you're able to attach to it."

After this project, several policy changes have taken place. The LA Police Commision pledged to begin collecting and releasing officer involved shooting data. Also, the conversation around LAPD shootings sparked a GIS research project at California State University, Northridge.

### Gender Domination in Movie Roles
*by Matt Daniels // Founder Polygraph.cool*

Matt's project, in addition to being relevant to LA citizens, affects an even larger population becuase it investigates gender dialog trends in movies, breaking down films by gender and age. The impetus behind this project was [an article he wrote on the Bechdel Test](http://polygraph.cool/bechdel/). He wanted to dig deeper than just showing a movie's passing or failing the Bechdel Test, so he decided to analyze the percentage of female dialog versus male dialog in movie scripts. His first visualization let you filter by people who made the film and their demographic, but didn't get much positive feedback. Then, he moved on to a project called ["Film Dialogue from 2,000 screenplays, Broken DOwn by Gender and Age"](http://polygraph.cool/films/).

The hardest part of the project for Matt (as is often the case) was finding and cleaning the data. Here's what he said about that:

> There's no good place to find good, clean dialog data. I had to combine 30 (mostly illegal) sources to combine data to get everything I needed (about 8,000 film scripts). Somehow, I had to transform this into a number for male (or female) dialog in each film. So I combined the script data with IMDB data (men are actors and women are actresses ~99.5% of the time). Still, scripts themselves aren't perfectly structured. I had to write a parser to account for all of the different ways people write scripts. ([It's on github.](https://github.com/matthewfdaniels/scripts/)) For non PDF data, I had to run them through an OCR step, as well. From the 8,000 original scripts, I went with 2,000 for the final data set because it was big enough not to be dismissed, but I was able to reliably get data for that many scripts. Then, the final step was linking the parsed scripts with the IMDB data, which involved complicated mapping because it's not 1 to 1. Sometimes characters are added or removed or have their names changed.

He likens the process to [Zen and the Art of Motorcycle Maintenance](https://en.wikipedia.org/wiki/Zen_and_the_Art_of_Motorcycle_Maintenance). Matt says, "to repair a motorcycle, you have to take the bike completely apart, and if you put it back together wrong, you have to start all over again, and I found this project to be a lot like that."
