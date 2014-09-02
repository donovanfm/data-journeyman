---
layout: post
title: "Data Tools"
blurb: "An overview of the tools that are used throughout this blog."
thumbnail: tool-logo.png
tags: 
  - Tools and Resources
  - iPython
---

###Tools

>Man is a tool-using animal. Without tools he is nothing, with tools he is all.
>
>-Thomas Carlyle

The human brain alone isn't capable of storing and performing operations on the amount of data that data projects entail, so tools are a necessity. And the tools we use are very important.

In this blog, at least at the beginning, we won't need the really heavy-lifting tools that allow humongous data sets. And also, as the blog progresses, new tools will surely be added and removed from the Data Journeyman toolbelt. This post is just about defining a starting place.

#### IPython Notebook

Work in data science isn't always about generating a complete, functioning program as an end result like typical programming is. Often what needs to be captured is a series of operations executed on a dataset. [IPython Notebook](http://ipython.org/notebook.html) is a great way to document this process. Many future posts will be accompanied by a notebook to show the transformation process on some data related to the post's topic. 

I'm not going to cover the installation process because it's been covered so well in other places. To get started, check out [this guide](http://ipython.org/ipython-doc/2/install/install.html).

Running IPython Notebook with the command `ipython notebook --pylab=inline` will automatically import NumPy and matplotlib for you. The examples in this blog will assume IPython Notebook is run this way.

[Here](/ipython-notebooks/Data\ Tools.ipynb)'s an example IPython Notebook that covers some of the tools in this post. Just download the file and run the above command in the folder containing it.

#### NumPy

[NumPy](http://www.numpy.org/) allows you to perform operations on large, multidimensional arrays. Since most data will fit nicely in this format, having an efficient tool for performing linear algebra and other mathematical functions will be very useful.

See the IPython Notebook for this post for a quick look at the library, and checkout out [this fantastic tutorial](http://wiki.scipy.org/Tentative_NumPy_Tutorial#head-6a1bc005bd80e1b19f812e1e64e0d25d50f99fe2) for a more in-depth look.

#### matplotlib

[matplotlib](http://matplotlib.org/) is a great library for basic plotting and visualization. It comes with several baked-in chart and graph types, including the basics like line graphs, bar graphs, histograms, box plots, and moving on to more advanced types. 

It's very easy to generate visualizations with, but typically the graphs will look rather unpolished. There are many other excellent libraries for data visualization, and many of them make very professional charts, but matplotlib has one of the lowest barriers to entry

There are some examples in the IPython Notebook.

#### pandas

[pandas](https://pypi.python.org/pypi/pandas) is a library for handling tabular data at a higher level than NumPy. It tries to make the process of accessing and manipulating data, even when there are missing values, as easy as possible. 

Its basic structures are Series – "1D labeled homogeneously-typed array" – and DataFrames – "General 2D labeled, size-mutable tabular structure with potentially heterogeneously-typed columns". It has great indexing features and moving window statistics. For more, see the [package overview](http://pandas.pydata.org/pandas-docs/stable/overview.html).

Again, check the IPython Notebook for some examples.

###References

In the short amount of time I've spent researching data science, I've come across so many great resources on the subject. I'm going to put a few here, but this list will be far from comprehensive. Please leave a comment if I'm missing any great references here and I'll add it to the list.

####Tutorials, Learning Materials, and Curricula

- [The Open-Source Data Science Masters](http://datasciencemasters.org/)
- [A Practical Intro to Data Science](http://www.zipfianacademy.com/blog/post/46864003608/a-practical-intro-to-data-science)
- [Udacity](https://www.udacity.com/courses#!/data-science) and [Coursera](https://www.coursera.org/courses?orderby=upcoming&cats=stats) have a bunch of Statistics and Data Analysis courses
- [PyData Videos on Vimeo](http://vimeo.com/pydata/videos)
- [Terms in data science defined in less than 50 words](https://github.com/rasbt/pattern_classification/blob/master/resources/data_glossary.md)

####Blogs and Newsletters

- [Mike Bostock's blog](http://bost.ocks.org/mike/)
- [Simply Statistics](http://simplystatistics.org/)
- [Leada Blog](http://blog.teamleada.com/)
- [Data Science Weekly Newsletter/Blog](http://www.datascienceweekly.org/)

####Communities

- [DataTau](http://www.datatau.com/)
- [r/DataIsBeautiful](http://www.reddit.com/r/dataisbeautiful)
