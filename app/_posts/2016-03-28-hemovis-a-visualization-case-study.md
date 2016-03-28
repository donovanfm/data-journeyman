---
layout: post
title: "HemoVis: A Visualization Case Study"
blurb: "My visualization posts so far have covered a lot on the theory side of things. Armed with that background of theory, we can appreciate a very inspiring case where data visualization actually saved lives."
thumbnail: health-logo.png
tags: 
  - Visualization
---

###Medical Background

[According to the Center for Diseas Control](http://www.cdc.gov/heartdisease/facts.htm), heart disease is the number one killer of Americans. And of all of the types of heart disease, coronary artery disease (CAD) is the most common, killing 370,000 Americans annually. 

There is a method which takes data from a patient's Computed Tomography Angiography, which is a non-invasive diagnostic technique, combined with simulations of blood flow, and from this the Endothelial Shear Stress (ESS) in the coronary arteries can be calculated, which is an indicator of CAD. Doctors can't be expected to crunch these numbers in their heads, and (for the time being) no Machine Learning algorithm, like IBM's [Watson](http://www.businessinsider.com/how-ibm-watson-is-transforming-healthcare-2015-7) and Google's [DeepMind Health](https://deepmind.com/health), is currently adept enough to handle these diagnoses of CAD. So for now, we need doctors to diagnose CAD, and doctors need a reasonable tool to assess a patient's ESS. And a better visualization tool is exactly what Michelle A. Borkin, et al, delivered in their paper [Evaluation of Artery Visualizations for Heart Disease Diagnosis](http://gvi.seas.harvard.edu/sites/all/files/borkin-InfoVis2011_camera-ready.pdf).

<img alt="Artery Visualizations" src="/img/artery-visualizations.png" class="full-size">

In this figure, the two left visualizations are what existed prior to Borkin's work. The two visualizations on the right come from Borkin's paper, the bottom right figure (D) fixing the color scale and the top right (B) being a new way to visualize arteries as "a novel 2D tree diagram representation that presents all the data at once while still encoding pertinent anatomical information such as vessel circumference and branch structure."

###The Research

Borkin's team worked with medical researchers and practicing medical professionals to arrive at their final visualization. It's a great example of the "always design for your audience" rule. The original visualization prototypes included interactivity and the ability to hide parts of the visualization, but the medical professionals discouraged these features in favor of a single "standard" view that could be easily compared from patient to patient. The idea of a standard view without too much interactivity is also what made the 3D view inferior, since there will always be occlusion in the visualization, necessitating the ability to rotate the view.

In the area of color, however, this "listen to your audience" approach was not ideal, because the medical professionals too heavily weighted certain color schemes based on what they were used to. In fact, of the 8 color options presented, they universally picked the rainbow color scale, which [we've seen is a terrible choice](http://www.datajourneyman.com/2016/03/14/color.html#color-antipattern-rainbow-color-scale). 

![Color Options Explored by Borkin's Team](/img/artery-visualization-colors.png)

Borkin's team went on to do a scientific experiment to test the effects of 2D/3D representations of arteries and the color scale used in the visualization. 

<h1 class="pull-quote">One can only wonder in just how many other instances we make our task more difficult than it needs to be simply by maintaining the status quo</h1>

2D representations won hands down over 3D for accuracy and speed tests. Additionally, since 3D representations necessitated rotation to see the entire structure, participants found it very difficult to remember where they had previously noted a low ESS region, since the position of that region changes when the figure is rotated.

As for color scales, a divergent color scale made participants much more accurate in identifying ESS levels, but they were actually a little faster with the rainbow scale. However, in a combined measure of both accuracy and speed (total time spent on an image divided by the number of low ESS regions identified), the rainbow color scale's lead in effiency becomes statistically insignificant in the 2D case. The paper goes on to say, "This work not only shows a real world example demonstrating just how significant an impact rainbow color can have on a user’s task, but also a way for other researchers to counter this issue by demonstrating to their users how color impacts their task performance."

###The Result

The final product of this research is a Processing program called HemoVis, which employs the visualization discoveries Borkin's team made in its initial phase of testing medical professionals and its research phase of quantitatively comparing different visualizations. Here are two screens from HemoVis.

<img alt="Screenshot of Final HemoVis Program, Tree Mode" src="/img/hemovis_treemode.jpg" class="full-size">

<img alt="Screenshot of Final HemoVis Program, Individual Mode" src="/img/hemovis_individualmode.gif" class="full-size">

There are several interactive components, including (1) the ability to see the entire coronary artery tree or an individual artery in isolation, (2) the ability to see additional simulation data sets (for the same patient) side by side by clicking the triangle icon next to an artery, and (3) the ability to change the color scale to make the viewer comfortable with the visualization she's using.

From initial conception to the research phase to the final product, Borkin's team did amazing work to give medical professionals a solid tool for visualizing a very important component of a patient's heart health. In the process, they even conviced some medical professionals to move away from techniques they previously held as superior. One of these medical professionals goes on to say, "One can only wonder in just how many other instances we make our task more difficult than it needs to be simply by maintaining the status quo." 

Borkin's team set an standard we can all aim to acheive in our visual projects whether they're life saving or not.