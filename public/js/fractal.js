
function init() {
	drcan = document.getElementById("fractal-canvas");
	
		
	
	formIn = document.getElementById("fractal-form");
	
	escapeIn = document.getElementById("escape");
		
	ctxt  = drcan.getContext('2d');
}

function getRFromHexColor(hex) {
	hex = hex.replace(/[^0-9A-F]/gi, '');
	var bigint = parseInt(hex, 16);
	var r = (bigint >> 16) & 255;

	return r;
}

function getGFromHexColor(hex) {
	hex = hex.replace(/[^0-9A-F]/gi, '');
	var bigint = parseInt(hex, 16);
	var g = (bigint >> 8) & 255;

	return g;
}

function getBFromHexColor(hex) {
	hex = hex.replace(/[^0-9A-F]/gi, '');
	var bigint = parseInt(hex, 16);
	var b = bigint & 255;

	return b;
}

function componentToHex(c) {
    return c.toString(16);
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function generateFractal() {

	var escapeVal = escapeIn.value;
	var xMin = document.getElementById("xMin").value;
	var xMax = document.getElementById("xMax").value;
	var yMin = document.getElementById("yMin").value;
	var yMax = document.getElementById("yMax").value;
	var colorOne = document.getElementById("colorOne").value; 	
	var colorTwo = document.getElementById("colorTwo").value;
	var colorThree = document.getElementById("colorThree").value;

	var redS = getRFromHexColor(colorOne);
	var redF = getRFromHexColor(colorTwo);
	var greenS = getGFromHexColor(colorOne);
	var greenF = getGFromHexColor(colorTwo);
	var blueS = getBFromHexColor(colorOne);
	var blueF = getBFromHexColor(colorTwo);
	
	//alert("red " + redS + " " + redF);
	//alert("green " + greenS + " " + greenF);
	//alert("blue " + blueS + " " + blueF);

	var colors = [escapeVal];
	for (p = 0; p < escapeVal; p++) {
			fade = ((p+1)/escapeVal);
				
			var diffRed;
			if (redS < redF)
				diffRed = redF - redS;
			else 
				diffRed = redS - redF;
				
			var diffGreen;
			 
			if (greenS < greenF)
				diffGreen = greenF - greenS;
			else 
				diffGreen = greenS - greenF;
				
			var diffBlue;
			if (blueS < blueF)
			 	diffBlue = blueF - blueS;
			 else 
			 	diffBlue = blueS - blueF;

			diffRed = Math.floor((diffRed * fade) + redS);
			diffGreen = Math.floor((diffGreen * fade) + greenS);
			diffBlue = Math.floor((diffBlue * fade) + blueS);
			
			colors[p] = rgbToHex(diffRed, diffGreen, diffBlue);
			//alert(colors[p]);
	}	
	
	w = drcan.width;
	h = drcan.height;

	for (i = (h-1); i >= 0; i--) {
		for (j = 0; j < w; j++) {
			x0 = xMin * (1-(j/(w-1))) + xMax * (j/(w-1));
			y0 = yMin * (1-(i/(h-1))) + yMax * (i/(h-1));
			x = 0;
			y = 0;
			iter = 0;			
			
			while ( ( (x*x + y*y) < 4 ) && (iter < escapeVal) )	{
				xtemp = x*x - y*y + x0;
    			y = 2*x*y + y0;
    			x = xtemp;
    			iter++;		
			}
			
			//if (iter < (escapeVal/3)) {
			//	ctxt.fillStyle = colorOne;
			//}
			//else if ( (iter >= (escapeVal/3)) && (iter < (2 * (escapeVal/3))) ) {
			//	ctxt.fillStyle = colorTwo;
			//}
			//else if (iter >= (2 * (escapeVal/3)) ) {		
				ctxt.fillStyle =  colorThree;
			//}
			//else { 
			//	ctxt.fillStyle = "#FFFFFF";
			//}

			if (iter < escapeVal) {
				ctxt.fillStyle = colors[iter];
			}							
			else {
				ctxt.fillStyle = colorThree;
			}
			
			ctxt.fillRect(j, i, 1, 1);
			ctxt.fill();
		}
	}	
	
}