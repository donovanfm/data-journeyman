---
layout: post
title: "Wikipedia With Academic Styling"
blurb: "Wikipedia is an unrivaled source of information, but who says you can't have brains and looks?"
thumbnail: Wikipedia-logo.png
tags: 
  - Tools and Resources
---

###Styling Wikipedia

Since most of the Wikipedia articles I link to on this blog are formula-heavy and require a deep reading (as opposed to skimming or skipping to a particula section), how the site is laid out can be important. There's a useful, pure-CSS tool that allows you to do just that. It's called [WiTex](https://github.com/AndrewBelt/WiTeX), and it has the all too appropriate tagline: "If Donald Knuth had designed Wikipedia." This is in reference to Knuth's typesetting program, LaTeX, which is used to write most mathematical and scientific papers.

To apply the CSS, first install the [Stylebot Chrome plugin](https://chrome.google.com/webstore/detail/stylebot/oiaejidbmkiecgbjeifoejpgmdaleoha) (if you're using another browser then you'll have to find your own solution, or you can use the Wikipedia Preference option that the WiTeX README mentions). Once Stylebot is installed, you should see its icon at the top of chrome. Do a secondary click on the icon, and select "Stylebot Options" > "Styles" > "Add a new style...". For the URL enter "*.wikipedia.org". Then, simply copy and paste the contents of [WiTeX's stylesheet](https://raw.githubusercontent.com/AndrewBelt/WiTeX/master/style.css) into the text area like below.

![Stylebot Screenshot](/img/stylebot.png)

And that's it! Your wikipedia pages will look something like this excerpt from the page on the Normal Distribution.

![WiTex Example](/img/wikipedia-formatted.png)

Of course, this is entirely a personal preference thing, but if you're like me, you'll appreciate this improved layout for the rest of your Wikipedia-ing days.