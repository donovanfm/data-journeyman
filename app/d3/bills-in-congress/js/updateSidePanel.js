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

function updateSidePanel(data) {
	d3.select(".house-members").selectAll(".member-box").remove();
	d3.select(".senate-members").selectAll(".member-box").remove();
	d3.select(".house-members").selectAll("br").remove();
	d3.select(".senate-members").selectAll("br").remove();

	d3.select("#side-panel-title")
		.text(ordinalSuffixOf(data.congress) + " Congress");

	d3.select("#house-rep")
		.text((data.house.Republicans || 0) + " Republicans");

	d3.select("#house-dem")
		.text((data.house.Democrats || 0) + " Democrats");

	d3.select("#house-ind")
		.text((data.house.Independents || 0) + " Independents");

	d3.select("#senate-rep")
		.text((data.senate.Republicans || 0) + " Republicans");

	d3.select("#senate-dem")
		.text((data.senate.Democrats || 0) + " Democrats");

	d3.select("#senate-ind")
		.text((data.senate.Independents || 0) + " Independents");

	_.each(_.range(data.house.Republicans), function(){
		d3.select(".house-members")
			.append("div")
			.attr("class", "member-box rep")
	});

	d3.select(".house-members")
		.append("br")
	d3.select(".house-members")
		.append("br")

	_.each(_.range(data.house.Democrats), function(){
		d3.select(".house-members")
			.append("div")
			.attr("class", "member-box dem")
	});

	d3.select(".house-members")
		.append("br")
	d3.select(".house-members")
		.append("br")

	_.each(_.range(data.house.Independents), function(){
		d3.select(".house-members")
			.append("div")
			.attr("class", "member-box ind")
	});

	_.each(_.range(data.senate.Republicans), function(){
		d3.select(".senate-members")
			.append("div")
			.attr("class", "member-box rep")
	});

	d3.select(".senate-members")
		.append("br")
	d3.select(".senate-members")
		.append("br")

	_.each(_.range(data.senate.Democrats), function(){
		d3.select(".senate-members")
			.append("div")
			.attr("class", "member-box dem")
	});

	d3.select(".senate-members")
		.append("br")
	d3.select(".senate-members")
		.append("br")

	_.each(_.range(data.senate.Independents), function(){
		d3.select(".senate-members")
			.append("div")
			.attr("class", "member-box ind")
	});

	d3.select("#president-name")
		.classed("rep-label", false)
		.classed("dem-label", false)
		.classed("ind-label", false)
		.classed(data.party.slice(0,3).toLowerCase() + "-label", true)
		.text(data.name);

}