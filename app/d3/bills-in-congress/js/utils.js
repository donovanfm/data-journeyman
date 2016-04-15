// Gotten from http://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
function ordinalSuffixOf(i) {
  i = parseInt(i)
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

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