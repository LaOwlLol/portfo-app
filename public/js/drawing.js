/* Nate Gillard
 * csid: gnate
 * date 9/23/2014
 * course: cs410
 * file: drawing.js
 * Description: draws a spinng shape according to assingment 2 description.
 * Code highly inspired by Ross Beveridge's html5 example 12 Pacemane goes for a spin.  (www.cs.colostate.edu/~cs410/yr2014fa/aplay/loc06/canvas12.html)	 
*/

var   gcx  = 0.50; 
var   gcy  = 0.50;
var   gr   = 0.2;
var   max = 10;
var theta  = 0.0;
var rotdel = (1.0/max);

function drawIt() {
	if (theta >= 1)
		theta = 0.0;
	else
	{
		if (theta <= .7)
			drawShape(gcx, gcy, gr)
		theta = theta + rotdel;
	}
}

/*clear the whole screen. */
function clearIt() {
	ctxt.save();
	ctxt.setTransform(1, 0, 0, 1, 0, 0);
	ctxt.clearRect(0, 0, w, h);
	theta = 0.0;
	ctxt.restore();	
}

function drawShape(cx, cy, r) {
	ctxt.save();
	ctxt.transform(1.0, 0.0, 0.0, 1.0, cx, cy);
	ctxt.rotate(theta * 2.0 * Math.PI);
	ctxt.globalAlpha = 1.0 - theta;
	ctxt.fillStyle = "#339966";
	ctxt.strokeStyle = "#339966";
	ctxt.beginPath();
	ctxt.moveTo(0.0, 0.0);
	ctxt.lineTo(r, r);
	ctxt.lineTo(0.0, r);
	ctxt.closePath();
	ctxt.fill();
	ctxt.stroke();
	ctxt.strokeStyle = "#cc0033";
	ctxt.fillStyle = "#cc0033";
	ctxt.beginPath();
	ctxt.moveTo(0.0, 0.0);
	ctxt.lineTo(((2/3)*r), ((2/3)*r));
	ctxt.lineTo(0.0, ((2/3)*r));
	ctxt.closePath();
	ctxt.fill();
	ctxt.stroke();	
	ctxt.strokeStyle = "#ccff66";
	ctxt.fillStyle = "#ccff66";
	ctxt.beginPath();
	ctxt.moveTo(0.0, 0.0);
	ctxt.lineTo(((1/3)*r), ((1/3)*r));
	ctxt.lineTo(0.0, ((1/3)*r));
	ctxt.closePath();
	ctxt.fill();
	ctxt.stroke();
	ctxt.restore();
}

function init() {
	drcan = document.getElementById("tributeCan");
	ctxt  = drcan.getContext('2d');
	w = drcan.width;
	h = drcan.height;
	ctxt.setTransform(h, 0.0, 0.0, -h, 0.0, h);
	ctxt.lineWidth=0.01;

	ctxt.fillStyle = "#3366cc";
	ctxt.strokeStyle = "#3366cc";
	ctxt.fillRect(0.0, 0.0, 1.0, 0.33);
	ctxt.fillRect(0.0, 0.66, 1.0, 0.34);
	ctxt.fill();
	
	setInterval(function() {drawIt();}, 1000);
}
