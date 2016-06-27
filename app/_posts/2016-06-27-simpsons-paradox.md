---
layout: post
title: "Simpson's Paradox"
blurb: "People say 'You can make statistics say anything', but that's only true if you don't know how to spot the warning signs of bad statistics."
thumbnail: anova-logo.png
tags: 
  - Ice Cream Crimes
  - Statistics
  - Video
---

### The Paradox

[Simpson's Paradox](https://en.wikipedia.org/wiki/Simpson%27s_paradox) occurs when a trend within different groups of data exists in one direction, but when the groups are combined, the trend is reversed. [This video](https://www.youtube.com/watch?v=ZDinnCwP3dg) does a great job of explaining the problem in terms of fruit sellers. 

<img alt="Simpon's Paradox Fruit Example" src="/img/simpsons-paradox-fruit.png">

The underlying problem is when there is a "lurking" variable that causes the overall trend in the data, but the data groups are sliced along a different variable. In the fruit example from the video, if you look at each fruit seller's percentages, then you'd think that Bob is the overall better choice. However, due to the unbalanced way that each seller stocks fruit, it's could be the case that both fruit sellers have the same supplier. The real pattern in the data, then, is that bananas tend to have a better fresh-to-rotten ratio than apples, not that one seller has a better stock than the other. Also, if you only wanted a piece of fruit and didn't care if it was a banana or apple, then you'd be much better going to Alice.

### Oh, people can come up with statistics to prove anything, Kent.

An actual example of Simpson's Paradox is the [Berkeley Graduate Admissions Gender Bias case](http://homepage.stat.uiowa.edu/~mbognar/1030/Bickel-Berkeley.pdf) from the 1970s. Berkeley was accused of not admitting female applicants at the same rate as male applicants. When examined on the whole, it appeared that the Berkeley graduate school discriminated against women.

|     | Applicants | Admitted |
| --- | ---------- | -------- |
| Men | 8442 | 44% |
| Women | 4321 | 35% |

However, if you look at each department individually, you find that most of them actually accept women at a higher rate.

<table style="text-align: center">
	<tr>
		<td rowspan="2"><h4>Department</h4></td>
		<td colspan="2"><b>Men</b></td>
		<td colspan="2"><b>Women</b></td>
	</tr>
	<tr>
		<td><b>Applicants</b></td>
		<td><b>Admitted</b></td>
		<td><b>Applicants</b></td>
		<td><b>Admitted</b></td>
	</tr>
	<tr>
		<td>A</td>
		<td>825</td>
		<td>62%</td>
		<td>108</td>
		<td><b>82%</b></td>
	</tr>
	<tr>
		<td>B</td>
		<td>560</td>
		<td>63%</td>
		<td>25</td>
		<td><b>68%</b></td>
	</tr>
	<tr>
		<td>C</td>
		<td>325</td>
		<td><b>37%</b></td>
		<td>593</td>
		<td>34%</td>
	</tr>
	<tr>
		<td>D</td>
		<td>417</td>
		<td>33%</td>
		<td>375</td>
		<td><b>35%</b></td>
	</tr>
	<tr>
		<td>E</td>
		<td>191</td>
		<td><b>28%</b></td>
		<td>393</td>
		<td>24%</td>
	</tr>
	<tr>
		<td>F</td>
		<td>373</td>
		<td>6%</td>
		<td>341</td>
		<td><b>7%</b></td>
	</tr>
</table>

Just like we saw in the fruit seller example, there is a lurking variable in the Berkeley admissions data. In this case, the lurking variable is the department to which a prospective student applied. These departments have different acceptance rates, and it turns out that women applied more often to departments with low acceptance rates, which (despite them being more likely to be accepted within most departments) lowered the overall rate of accepted women. The graph below shows the correlation of women tending to apply to departments with lower acceptance rates.

<img alt="Correlation showing women applied to departments with lower acceptance rates" src="/img/simpsons-paradox-berkeley-correlation.png" class="full-size">

So overall summary statistics don't always tell the whole story and can obscure multiple underlying trends that interact with each other. It's always important to go back to the raw data and comb over any conclusions drawn from that data to look for mistakes in the analysis. Unfortunately, sometimes the data isn't always available. Considering that the Berkeley admissions data is very sensitive, they may have chosen not to release it at a level of granularity where the Simpson's Paradox was apparent. It goes back to the [Transparency vs Privacy](http://localhost:9000/2016/02/21/transparency-versus-privacy.html) dilemma that I've talked about before. But as a whole, remaining skeptical of data-drawn conclusions (even your own) will always serve you well.

