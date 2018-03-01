/*
DOESNT WORK IN FIREFOX BECAUSE FIREFOX READS YOU AS PRESSING THE <CIRCLE> </CIRCLE> TAGS
INSTEAD OF THE SVG
*/


//SVG
var svgContainer = document.getElementById("SVG");
//buttons
var clearButton = document.getElementById("clearButton");

//instance variables 
var tempX = null;
var tempY = null;
var clickX = null;
var clickY = null;

//functions
var clearSVG = function(){
    //clear SVG thing
    svgContainer.innerHTML = "";
    tempX = null;
    tempY = null;
};



var animate = function(e){
    var setVariables = function(){
        clickX = e.offsetX;
        clickY = e.offsetY;
        console.log("clickX: " + clickX + "    clickY: " + clickY);
    };
    var drawCircle = function (clickX,clickY){
        //draw the new point
        var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c1.setAttribute("cx", clickX);
        c1.setAttribute("cy", clickY);
        c1.setAttribute("r", 25);
        c1.setAttribute("fill", "#b0c4de");
        svgContainer.appendChild(c1);

        //see if this is the beginning of a point (the first point)
        if (tempX == null || tempY == null){
            tempX = clickX;
            tempY = clickY;
        }
        else{
            //if not first point, go to the previous point then draw a line to the clicked point
            var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", tempX);
            line.setAttribute("y1", tempY);
            line.setAttribute("x2", clickX);
            line.setAttribute("y2", clickY);
            line.setAttribute("stroke", "#00a86b");
            svgContainer.appendChild(line);
            tempX = clickX;
            tempY = clickY;
        }
    };
    setVariables();
    drawCircle(clickX,clickY);
   
};
//Add event listeners
svgContainer.addEventListener("click", animate);
clearButton.addEventListener("click", clearSVG);