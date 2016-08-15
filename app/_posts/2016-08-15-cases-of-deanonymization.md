---
layout: post
title: "Cases of Deanonymization"
blurb: "The mantra of big data is 'more is more', but this sentiment must be tempered with a respect for privacy, in my opinion. In this post, I'll look at some cases where identities were exposed not by malice but by lack of rigor."
thumbnail: disguise-logo.png
tags: 
  - Ethics
---

###Privacy in the Digital Age

More and more each day, we have to make decisions about our privacy as more and more of our data becomes accessible online, from setting our privacy settings on Facebook to accepting the terms and conditions of our smart thermostats. Sometimes, taking reasonable precautions isn't enough, because even with the best intentions, organizations can release data that infringes on individuals' privacy. For the average person, the risk isn't enough to warrant removing him- or herself from the internet entirely or taking [other extreme measures](https://www.wired.com/2016/07/snowden-designs-device-warn-iphones-radio-snitches/) to ensure privacy. However, it's important to be a part of the conversation so that accidental publishings of sensitive data don't happen as often. The conversation, [as pointed out by Eleanor Sattia](http://www.datajourneyman.com/2016/05/23/data-ethics-and-privacy.html), is ongoing and of paramount importance to the future of data analysis.

###Early Data Dumps

Perhaps the most well know sensitive data dump was the [release of the Enron email data](https://www.technologyreview.com/s/515801/the-immortal-life-of-the-enron-e-mails/) in March of 2003. This data was initially released without any personal information taken out, including addresses, phone numbers, bank records, and Social Security Numbers. The data dump was handled very naively. Even though such a large corpus hasn't been released since, people have learned to handle even smaller data dumps with much more care.

Then, in August, 2006, [AOL Research released 3 months' worth of search data](https://en.wikipedia.org/wiki/AOL_search_data_leak), only to delete it 3 days later (but not after it had been mirrored elsewhere). While there weren't any blatantly sensitive pieces of information in the dataset, it proved a second lesson in anonymizing data dumps. All of the internet searches in the data set had a user id associated with them, [which could be used to figure out a given user's identity](http://query.nytimes.com/gst/abstract.html?res=9E0CE3DD1F3FF93AA3575BC0A9609C8B63), since many searches are location specific and give away other identifying factors (such as pet ownership) that, when combined, can be used to ascertain someone's identity.

###Identifying Potential Identifiers

Since those early days of the internet, researchers and data analysts have been much more careful in the data that they release. In [Ethical Privacy Guidelines for Mobile Connectivity Measurements](https://www.oii.ox.ac.uk/archive/downloads/research/files/Ethical_Privacy_Guidelines_for_Mobile_Connectivity_Measurements.pdf), Zevenbergen, Brown, Wright, and Erdos lay out 3 levels of identifiable information, from most direct to least in terms of identification:

1. Identifiers – name, address, social security numbers, mobile phone number, IMEI number
2. Key-Attributes – age, race, gender, date of birth and place of residence
3. Secondary Attributes – settings in an application, the battery level measured over time, or location patterns

The "Identifiers" category is an obvious violation of security (except for that first Enron data dump), but the other attributes are trickier. For instance, some of that data might be crucial to making certain discoveries in the data. To ask the question, "How likely are young people to use paper phone books?" you need to ask the respondents' age. The key to the problem of deanonymization is knowing how combinations of this data and the contexts of the data factor in to how easily identifiable any record in your data is.

###Subtler Deanonymization Cases

To illustrate how subtle these identifiers can be in your dataset, we'll look at 3 recent deanonymization cases where it wasn't obvious at first that there were any problems with the data being released.

A [2009 paper from Golle and Partridge](http://crypto.stanford.edu/~pgolle/papers/commute.pdf) used Bayesian techniques on U.S. Census data to show that "disclosing both the census tracts where one lives and where one works places 24.2% of the working population in an anonymity set that contains 5 or fewer individuals, and 7.4% in a set of 2 or fewer individuals." While somewhat surprising, they were able to hone in on individuals to this degree for specificity with only their work location and home location at the granularity of a census tract. They recommend "a considerable amount of location obfuscation (at the granularity of counties)...to protect the anonymity of location traces."

A [2013 paper from Gymrek et al.](http://science.sciencemag.org/content/339/6117/321.full) lays out a method for using public records on genetics and ancestry datasets to identify the surnames of individuals based on segments of their DNA. According to Gymrek, "sharing sequencing data sets without identifiers has become a common practice in genomics." Despite these data sets not having identifying information in them, the paper goes on to show that by using the numerous databases and websites with "hundreds of thousands of surname-haplotype records", these sequences can be deanonymized, since surnames are generally passed down paternally, and haplotypes are found on Y chromosomes (which are also passed down paternally).

Then in 2014, Vijay Pandurangan was able to [identify specific NYC taxi routes from an official data release](http://arstechnica.com/tech-policy/2014/06/poorly-anonymized-logs-reveal-nyc-cab-drivers-detailed-whereabouts/), despite attemps to anonymize the records. Each taxi has some unique identifiers, which were hashed using a one-way hash function ([MD5](https://en.wikipedia.org/wiki/MD5)) to obfuscate their true values. However, due to the small domain size of the original id values, Pandurangan was able to run through all possible ids, matching them to their hash values, all within a couple of hours.

These three last cases of deanonymization techniques are not as obvious as the Enron and AOL cases above, but they're no less dangerous in a world of sophisticated deanonymization techniques. These cases are eye-opening warning stories reminding us to think before releasing data.