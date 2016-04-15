function updateChart(billData, sizeConfig){ 

  sizeConfig = sizeConfig || {};
  var margin = sizeConfig.margin || 75;
  var width = sizeConfig.width || 1400 - margin;
  var height = sizeConfig.height || 600 - margin;
  var barPadding = sizeConfig.barPadding || .48; //ratio
  var barLetterPadding = sizeConfig.barLetterPadding || 5; //pixels
  var billCountTextSize = sizeConfig.billCountTextSize || 0;
  var rotateXAxisLabels = sizeConfig.rotateXAxisLabels || false;
  var maxBarHeight = sizeConfig.maxBarHeight; // default value defined below

  var barTransitionDuration = 100;
  var slopeTransitionDuration = 200;
  var yAxisHeights = [10, 50, 100, 250, 500, 1000, 2000, 4000, 6000, 12000, 18000, 24000];

  var billStages = [
    "Introduced", 
    "Committee Consideration", 
    "Floor Consideration", 
    "Failed One Chamber", 
    "Passed One Chamber", 
    "Passed Both Chambers", 
    "Resolving Differences", 
    "To President", 
    "Veto Actions", 
    "Became Law"
  ];

  var displayedBillStages = [
    "Introduced", 
    "Floor Consideration", 
    "Passed One Chamber", 
    "Passed Both Chambers", 
    "Became Law"
  ]

  // Sum bill data so the chart can display total bills in each stage of legislation
  var data = [];
  _.each(billStages, function(stage){
    data.push({
      stage: stage,
      billCount: _.sum(_.map(billData, function(datum) { return datum.stages[stage]; }))
    });
  });

  // Set default maxBarHeight if not specified in sizeConfig
  maxBarHeight = maxBarHeight || _.find(data, {'stage': 'Introduced'}).billCount;

  // Remove previos svg is updateChart was called previously
  d3.select(".chart-container").select("svg").remove();

  // Initialize new svg to be drawn
  svg = d3.select(".chart-container")
    .append("svg")
      .attr("width", width + margin)
      .attr("height", height + margin + (rotateXAxisLabels ? 90 : 0))
    .append('g')
      .attr('class','chart');

  // Create x-axis scale mapping category -> pixels
  var stage_scale = d3.scale.ordinal()
    .rangeRoundBands([margin, width], barPadding, barPadding/2)
    .domain(displayedBillStages);

  // Create y-axis scale mapping bill counts -> pixels
  var bill_scale = d3.scale.linear()
    .range([height, margin])
    .domain([0, _.find(yAxisHeights, function(h) { return h > maxBarHeight })]);

  // Create axes
  var stage_axis = d3.svg.axis()
    .scale(stage_scale)
    .orient("bottom")

  var bill_axis = d3.svg.axis()
    .scale(bill_scale)
    .orient("left");

  // Draw the axes, and if necessary, rotate the x axis labels (for small screens)
  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(stage_axis)

  if (rotateXAxisLabels) {
    svg.select(".x.axis").selectAll("text")
      .attr("y", 0)
      .attr("x", 9)
      .attr("transform", "rotate(90)")
      .style("text-anchor", "start");
  }

  svg
    .append("g")
    .attr("class", "y axis")
    .attr("width", 1)
    .attr("transform", "translate(" + margin + ",0)")
    .call(bill_axis);

  // Filter out just the data needed for the visualization
  var barData = _.filter(data, function(d) { return _.includes(displayedBillStages, d.stage) });

  // Draw the bill count bars
  svg.selectAll(".bar")
    .data(barData)
  .enter().append("rect")
    .attr("class", "bar")
    .attr("width", stage_scale.rangeBand())
    .attr("x", function(d) { return stage_scale(d.stage); })
    .attr("y", bill_scale(0))
    .attr("height", 0)
    .transition()
    .attr("y", function(d) { return bill_scale(d.billCount); })
    .attr("height", function(d) { return height - bill_scale(d.billCount); })
    .duration(barTransitionDuration).delay(function(d, i){ return i*(barTransitionDuration+slopeTransitionDuration); })
    
  // Draw bill counts on top of the bars
  svg.selectAll(".bill-count-text")
    .data(barData)
  .enter().append("text")
    .attr("class", "bill-count-text")
    .attr("x", function(d) { return stage_scale(d.stage) + barLetterPadding; })
    .attr("y", function(d) { return bill_scale(d.billCount) - barLetterPadding; })
    .attr("font-size", billCountTextSize + "px")
    .attr("font-family", "sans-serif")
    .transition().delay(function(d, i){ return barTransitionDuration + i*(barTransitionDuration+slopeTransitionDuration)})
    .text(function(d) { return numberWithCommas(d.billCount) + " bills"; });

  // Draw connecting lines between adjacent bars to show downward trend 
  // (actually uses polygons to fill the space below the line with color)
  _.each(_.range(barData.length-1), function(i){
    svg.append("polygon")
      .attr("class", "slope")
      .attr("stroke-width", 0)
      .attr("points", [
        [stage_scale(barData[i].stage) + stage_scale.rangeBand(), bill_scale(barData[i].billCount)].join(","),
        [stage_scale(barData[i].stage) + stage_scale.rangeBand(), bill_scale(barData[i].billCount)].join(","),
        [stage_scale(barData[i].stage) + stage_scale.rangeBand(), height].join(","),
        [stage_scale(barData[i].stage) + stage_scale.rangeBand(), height].join(",")
      ].join(" "))
      .transition().attr("stroke-width", 1).ease("linear")
      .attr("points", [
        [stage_scale(barData[i].stage) + stage_scale.rangeBand(), bill_scale(barData[i].billCount)].join(","),
        [stage_scale(barData[i+1].stage), bill_scale(barData[i+1].billCount)].join(","),
        [stage_scale(barData[i+1].stage), height].join(","),
        [stage_scale(barData[i].stage) + stage_scale.rangeBand(), height].join(",")
      ].join(" "))
      .duration(slopeTransitionDuration).delay(barTransitionDuration+(barTransitionDuration+slopeTransitionDuration)*i);
  });

  // Draw the percentage total bar on the right of the graph to show a reference to the total bills introduced
  svg.append("rect")
    .attr("class", "percentage-total")
    .attr("x", stage_scale(_.last(displayedBillStages)) * 1.2)
    .attr("width", 20)
    .attr("y", bill_scale(0))
    .attr("height", 0)
    .transition()
    .attr("y", bill_scale(_.first(barData).billCount))
    .attr("height", height - bill_scale(_.first(barData).billCount))
    .duration(1).delay(displayedBillStages.length*(barTransitionDuration+slopeTransitionDuration))

  // Fill in the appropriate percentage of the percentage total bar to show the total bills that became law
  svg.append("rect")
    .attr("class", "percentage-passed")
    .attr("x", stage_scale(_.last(displayedBillStages)) * 1.2)
    .attr("width", 20)
    .attr("y", bill_scale(0))
    .attr("height", 0)
    .transition()
    .attr("y", bill_scale(_.last(barData).billCount))
    .attr("height", height - bill_scale(_.last(barData).billCount))
    .duration(1).delay(displayedBillStages.length*(barTransitionDuration+slopeTransitionDuration))

  // Draw text to show quantitative percentage of bills that became law
  svg.append("text")
    .attr("class", "percentage-text")
    .attr("x", stage_scale(_.last(displayedBillStages)) * 1.195 - 160 )
    .attr("y", ((bill_scale(_.first(barData).billCount) + bill_scale(0)) / 2) - 27)
    .attr("dy", 1)
    .text(getBillPercentage(barData, 2) + "% of the bills introduced became law")
    .call(wrap, 125)
    .attr("fill", "white")
    .transition()
    .attr("fill", "#444")
    .delay(displayedBillStages.length*(barTransitionDuration+slopeTransitionDuration))

  // Connect the percentage bars with the percentage text by drawing a curly brace between them
  svg.append("path")
    .attr("class","curlyBrace")
    .attr("d", function(d) { 
      return makeCurlyBrace(
        stage_scale(_.last(displayedBillStages))*1.195,
        bill_scale(_.first(barData).billCount),
        stage_scale(_.last(displayedBillStages))*1.195,
        bill_scale(0),
        40,
        0.6
      ); 
    })
    .attr("stroke-width", 0)
    .transition()
    .attr("stroke-width", 1)
    .delay(displayedBillStages.length*(barTransitionDuration+slopeTransitionDuration))

}