function init(){

    var w = 1000;
    var h = 600;

    var projection = d3.geoEquirectangular()
                        .scale([130])
                        .center([0, 20])
                        .translate([w / 2, h / 2]);

    var path = d3.geoPath()
                .projection(projection);

    var svg = d3.select("#chart")
                .append("svg")
                .attr("width", w)
                .attr("height", h)
                .attr("fill", "grey");

    d3.json("globe.json").then(function(json) {

        svg.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path);
    })
    
}
window.onload = init;