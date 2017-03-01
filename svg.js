var s = document.getElementById("vimage");
var prevX=null;
var prevY=null;

s.addEventListener("click", connect);

function connect(e) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", "10");
    c.setAttribute("fill","blue");
    s.appendChild(c);
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    if (prevX != null) {
	line.setAttribute("x1", prevX);
	line.setAttribute("y1", prevY);
	line.setAttribute("x2", e.offsetX);
	line.setAttribute("y2", e.offsetY);
	line.setAttribute("stroke-width","2");
	line.setAttribute("stroke","black");
	s.appendChild(line);
    }
    prevX = e.offsetX;
    prevY = e.offsetY;
    
}


var clear = document.getElementById("clear");
clear.addEventListener("click", function(e) {
    while (s.lastChild) {
        s.removeChild(s.lastChild);
    }
    prevX=null;
    prevY=null;
});
