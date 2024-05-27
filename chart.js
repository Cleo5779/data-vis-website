function init(){

    var w = 1000;
    var h = 600;

    var projection = d3.geoMercator();

    var path = d3.geoPath()
                .projection(projection);

    var svg = d3.select("#chart")
                .append("svg")
                .attr("width", w)
                .attr("height", h);
    
}
window.onload = init;