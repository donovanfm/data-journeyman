---
layout: post
title: "Thinking With Data"
blurb: "In this post I'll take a look at Max Shron's book <i>Thinking With Data: How to Turn Information into Insights</i>."
thumbnail: book-logo.png
tags: 
  - Data Analysis
  - Book
  - Video
---

###The Author and The Book

[Max Shron](http://shron.net/) is a data strategy consultant who focuses on strategy and the implementation of business plans based on data. He founded his consultancy firm, [Polynumeral](http://www.polynumeral.com/), in 2012, which has served the data analysis needs of New York Public Radio, Warby Parker, and, a personal favorite of mine, DonorsChoose.org. 

In [Thinking With Data: How to Turn Information into Insights](http://shop.oreilly.com/product/0636920029182.do), Shron gives a high level look at data analysis from his perspective as a business consultant. It's definitely not a technical read, but it is still offers a very important perspective for anyone working in a data-centered field to keep in mind. At times, though, it can come across as a little generic with its "business speak" tone.

![Synergy](/img/synergy.gif)

The book actually focuses on what surrounds the typical data science work, and he only tangentially touches on statistical models, data cleaning, visualization and other standard techniques. This context of what occurs before and after the nitty gritty technical work is a great place for us to start. In the book, Shron takes a step back to consider the entire process of providing a business solution using data, especially focusing on framing the problem correctly before wasting time down fruitless paths and how to meaningfully deliver results that can be used after the work is done. 

If you can't read the book but still want more detail and some good examples of his ideas in practice, check out [this video](http://vimeo.com/98768831) of Shron talking about the book.

###Scoping a Project

When working with data, it can be extremely easy to find yourself going down a rabbit hole. That's probably because there is instant gratification with each relationship you devine out of the data, begging you to search just a little further. By putting "why" and "so what" before "how" and "with what", avoiding the rabbit hole is much more likely. Using a structured approach can help you avoid fruitless paths. Always work within the scope of a project.

Shron breaks this scope down into four parts (CoNVO):

- context
- needs (to be met)
- vision (for success)
- outcome (or, how to respond to the results)

####Context

>The context provides a project with larger goals and helps to keep us on track. Contexts include larger relevant details, like deadlines, that will help us to prioritize our work.

Who is your client? What is their business? What is their customer demographic. What is the timeline for this project (both the data analyst's involvement with it and beyond)? All of these questions help define the context for a problem.

####Needs

>A need that can be met with data is fundamentally about knowledge, fundamentally about understanding some part of how the world works.

Needs are action oriented, not just knowledge for its own sake. The need asks, "What is the particular knowledge we are missing?"

####Vision

>The vision is a glimpse of what it will look like to meet the need with data.

The vision is your best guess at what your deliverable will look like. It might be a graph or document, or it might be a statistical model encoded into an excell sheet. What form it takes will depend on the context, the needs, the outcome, and your intuition as to what the data at hand can feasibly deliver.

This step that most depends on experience, according to Shron. Additionally, this is the step which will receive the most attention in the iteration phase, eventually evolving into the final deliverable.

__Tactics for creating the vision:__

- __Mock ups__ – sentences, simple graphs, user interface sketches that outline what a solution would look like (with fake figures)
- __Argument sketches__ – descriptions of compnents of a convincing argument in a given domain

####Outcome

>The outcome is distinct from vision; the vision is focused on what form the work will take at the end, while the outcome is focused on what will happen when we are "done".

The path forward after the vision is delivered.

Who will handle this next? Who/what will keep this work relevant? What will be different? How will we know if we are correct?

###Moving Toward the Vision

With a framework for the problem in place, the next step should be moving toward the vision, refining it as necessary. This can be done in a variety of ways.

- __Kitchen Sink Interrogation__ – generating questions, not necessarily looking for answers; getting a lay of the land
- __Working Backward__ – starting from the mockups or arguments sketches and imagining each step between the vision and where you are now
- __Interviews__ – talking to the experts in your domain
- __Rapid Investigation__ – creating crude documents, graphs, estimates to build intuition
- __More Mockups__ – iterating on the mockups, getting them closer to the real thing
- __Role Playing__ – pretend you are the final consumer/user; think aloud about the process of using the finished product

Refining the vision is where most typical data science tasks fall: data cleaning, experimentation, organization, interpretation, visualization, etc.

###Making Arguments

>Arguments are what make knowledge out of observations.

>An argument moves from statements that the audience already believes to statements they do not yet believe.

After you've refined the vision into some sort of deliverable, you'll need to use that artifact to convince people, otherwise there was no point in generating it. Maybe you will be convincing them of some fact about the world and you need your artifact to aid you in that. Or perhaps your artifact will be used in decision making processes in the future, and you need to convince people that the artifact is a good method by which to make those decisions. Either way, an understanding of arguments is important for data analysts.

####Argument Components:

The statements that you hope to convince your audience of are called claims.

- __Claim__ – a statement that the audience does not yet believe
- __Prior Knowledge__ – agreed upon facts, may be taken for granted
- __Evidence__ – interpreted data (arrived at from the vision)
- __Justification__ – logical connections; why is the evidence proof of the claim?
  - possibly self-evident
  - easy to identify visual relations
  - cross validation with other data
- __Rebuttals__ – points of potential weakness in your argument that you have to defend
- __Qualifications__ – degree of certainty in your conclusions
  - possible, probable, very likely, or definite

####Categories of Disputes:

A point of dispute is where a skeptical audience will push back. Arguments must be backed up with facts, but what an audience takes as fact will vary. You must consider what a reasonable truth condition is and whether that truth condition is satisfied.

- __Fact__ – Are all of the details of the argument correct?
 - What is a reasonable truth condition for a claim?
 - Is that truth condition satisfied for a particular case?
- __Definition__ – What is the meaning of a term or label?
 - Does a general term fit our specific case?
 - Does this definition make a meaningful distinction? (Is it useful?)
 - How well does this definition fit with prior ideas? (Is it consistent?)
 - What, if any, are reasonable alternatives, and why is this one better? (Is it the best?)
- __Value__ – How good is a given metric at validating our claim?
 - A metric must balance ease of interpretability, precision, predictive validity, elegance, completeness, etc.
 - How do our goals determine which values are the most important for this argument?
 - Has the value been properly applied in this situation?
- __Policy__ – Is this the right course of action?
 - Is there a problem in the first place? (ill)
 - Where is credit or blame due? (blame)
 - Will the proposal solve it? (cure)
 - Will it be better on balance? (cost)

####Patterns of Arguments

When making arguments, it's useful to have some templates from which to work, choosing the best one (or combination) to address your particular problem.

- __Specific-to-General__ – using data to construct a statistical model (deduction)
- __General-to-Specific__ - using beliefs about general patterns to infer results for particular examples (induction)
- __Argument by Analogy__ 
 - literal – comparing two like things 
 - figurative – comparing two things of different types (e.g., a mathematical model)
- __Comparing Things By Degree__
- __Comparing Sizes__
- __Considering the Possible as Opposed to the Impossible__

There are also many argument classifications that are more specific to data analysis.

- __Optimization__ – finding the best way to do something
 - making a value judgement about the right thing to be optimized is often far more interesting and controversial than the process itself
- __Bounding Case__ – setting reasonable high/low bounds on a parameter
 - Sensitivity Analysis – look at the results given best/worse case values
- __Cost/Benefit Analysis__ – consideration, based on a common unit of one course of action over another
 - related to value and policy disputes
 - minimize costs and maximize benefits

###Causality

Arguing causality is a strong claim to make, and therefore it's difficult to do so. There is a spectrum of causality, which should be taken into acout with along with the qualifications you include as part of your argument.

_Causal Spectrum:_

- Taxonomy, clustering, illustrations
- Predictive relationships (most statistical models fall here)
- Designs: grouping units of analysis to reduce uncertainty in understanding cause and effect
  - e.g. [within-subject designs](http://en.wikipedia.org/wiki/Repeated_measures_design) and [randomized control trials](http://en.wikipedia.org/wiki/Randomized_controlled_trial)
- Closed Systems; Physical Laws

However, even with the use of qualifications in your argument, someone reading it will still interpret it as causal. It's human nature to want some sort of meaningful "takeaway" from any argument. Even explicitly stating that "correlation does not imply causation" is not enough, and so you really have to try your hardest to find causal relationships, even if you can only attain [quasi-experimental designs](http://en.wikipedia.org/wiki/Quasi-experiment) as opposed to random trials. It's a well-informed data science community's responsibility to be diligent about the claims it puts forth. 

###Final Thoughts

Most of what data science is traditionally thought to be, and what will be the topic of many future posts on this blog, falls into the __Refining the Vision__ category. However, it's important to keep the context, needs, and outcome in mind when doing data work, since you might be refining a suboptimal vision without it. 

Furthermore, the concept of causality is a crucial one, and we'll definitely be delving deeper into that one in future posts. Shron recommends [Counterfactuals and Causal Inference](http://www.amazon.com/Counterfactuals-Causal-Inference-Principles-Analytical/dp/0521671930) for further reading on the subject.