function updateChart(billData, sizeConfig){ 

  // Gotten from http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function getBillPercentage(barData, decimalPlaces) {
    var percentage = _.last(barData).billCount / _.first(barData).billCount * 100;
    var roundedPercentage = Math.round(percentage * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces)
    return roundedPercentage ;
  }

  // Gotten (and modified) from https://bl.ocks.org/mbostock/7555321
  function wrap(text, width) {
    var words = text.text().split(/\s+/).reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1.1, // ems
      x = text.attr("x")
      y = text.attr("y"),
      dy = parseFloat(text.attr("dy")),
      tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  }

  // Gotten from http://bl.ocks.org/alexhornbake/6005176
  //returns path string d for <path d="This string">
  //a curly brace between x1,y1 and x2,y2, w pixels wide 
  //and q factor, .5 is normal, higher q = more expressive bracket 
  function makeCurlyBrace(x1,y1,x2,y2,w,q)
  {
    //Calculate unit vector
    var dx = x1-x2;
    var dy = y1-y2;
    var len = Math.sqrt(dx*dx + dy*dy);
    dx = dx / len;
    dy = dy / len;

    //Calculate Control Points of path,
    var qx1 = x1 + q*w*dy;
    var qy1 = y1 - q*w*dx;
    var qx2 = (x1 - .25*len*dx) + (1-q)*w*dy;
    var qy2 = (y1 - .25*len*dy) - (1-q)*w*dx;
    var tx1 = (x1 -  .5*len*dx) + w*dy;
    var ty1 = (y1 -  .5*len*dy) - w*dx;
    var qx3 = x2 + q*w*dy;
    var qy3 = y2 - q*w*dx;
    var qx4 = (x1 - .75*len*dx) + (1-q)*w*dy;
    var qy4 = (y1 - .75*len*dy) - (1-q)*w*dx;

    return ( "M " +  x1 + " " +  y1 +
          " Q " + qx1 + " " + qy1 + " " + qx2 + " " + qy2 + 
            " T " + tx1 + " " + ty1 +
            " M " +  x2 + " " +  y2 +
            " Q " + qx3 + " " + qy3 + " " + qx4 + " " + qy4 + 
            " T " + tx1 + " " + ty1 );
  }

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

  var data = [];

  _.each(billStages, function(stage){
    data.push({
      stage: stage,
      billCount: _.sum(_.map(billData, function(datum) { return datum.stages[stage]; }))
    });
  });

  maxBarHeight = maxBarHeight || _.find(data, {'stage': 'Introduced'}).billCount;

  d3.select(".chart-container").select("svg").remove();

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
  // var bill_scale = d3.scale.pow().exponent(.6)
  var bill_scale = d3.scale.linear()
    .range([height, margin])
    // .domain([0, _.find(data, {"stage": "Introduced"}).billCount]);
    // .domain([0, 24000]);
    .domain([0, _.find(yAxisHeights, function(h) { return h > maxBarHeight })]);

  var stage_axis = d3.svg.axis()
    .scale(stage_scale)
    .orient("bottom")

  var bill_axis = d3.svg.axis()
    .scale(bill_scale)
    .orient("left");

  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(stage_axis)

  if (rotateXAxisLabels) {
    svg.select(".x.axis").selectAll("text")
      .attr("y", 0)
      .attr("x", 9)
      // .attr("dy", ".35em")
      .attr("transform", "rotate(90)")
      .style("text-anchor", "start");
  }

  svg
    .append("g")
    .attr("class", "y axis")
    .attr("width", 1)
    .attr("transform", "translate(" + margin + ",0)")
    .call(bill_axis);

  var barData = _.filter(data, function(d) { return _.includes(displayedBillStages, d.stage) });

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