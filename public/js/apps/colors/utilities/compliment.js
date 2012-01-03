//returns a result between 0 - 255
function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

var aColor = "#b28d9f";//bright pink

//pass in either #ffffff or rgb(255,255,255) for example
function toHSL( color ){
	
	var color
	var r, g, b
	var h,s,l
	var del_r, del_g, del_b
	var min, max
	var delMax
	
	color = toRGBhash( aColor );// returns { r:00, g:00, b:00 } for example
	r = color.r/255;//example 0,1,3,.03,.0333
	g = color.g/255;
	b = color.b/255;
	
	min = Math.min(r,g,b);
	max = Math.max(r,g,b);
	delMax = max - min;
	
	l = (max + min) / 2;
	
	if (max == 0)
	{
		h = 0;
		s = 0;
	}else{
		if ( l < 0.5 ){
			s = delMax / (max + min);
		}else{
			s = delMax / (2 - max - min);
		};

		del_r = (((max - rDec) / 6) + (delMax / 2)) / delMax;
		del_g = (((max - gDec) / 6) + (delMax / 2)) / delMax;
		del_b = (((max - bDec) / 6) + (delMax / 2)) / delMax;

		if (rDec == max){
			h = del_b - del_g;
		}else if (gDec == max){
			h = (1 / 3) + del_r - del_b;
		}else if (bDec == max){
			h = (2 / 3) + del_g - del_r;
		};
		if (h < 0){
			h += 1;
		};
		if (h > 1){
			h -= 1;
		};
	};
	
	return { hue: h , saturation: s , lightness: l }; //{ hue: 1, saturation: .5 , lightness: .5 } for example
}

function compliment(aColor){
	var color = toRGBhash( aColor );//{ r:00, g:00, b:00 }
	var rDec = color.r/255;//0,1,3,.03,.0333
	var gDec = color.g/255;
	var bDec = color.b/255;
	
	//rgb2hsl routine
	var h,s,l
	var h2//the compliment
	//used in the algorithm
	var del_r, del_g, del_b

	var min = Math.min(rDec,gDec,bDec);
	var max = Math.max(rDec,gDec,bDec);
	var delMax = max - min;
	
	l = (max + min) / 2;

	if (max == 0)
	{
		h = 0;
		s = 0;
	}else
	{
		if ( l < 0.5 ){
			s = delMax / (max + min);
		}
		else{
			s = delMax / (2 - max - min);
		};

		del_r = (((max - rDec) / 6) + (delMax / 2)) / delMax;
		del_g = (((max - gDec) / 6) + (delMax / 2)) / delMax;
		del_b = (((max - bDec) / 6) + (delMax / 2)) / delMax;

		if (rDec == max){
			h = del_b - del_g;
		}
		else if (gDec == max){
			h = (1 / 3) + del_r - del_b;
		}
		else if (bDec == max){
			h = (2 / 3) + del_g - del_r;
		};

		if (h < 0){
			h += 1;
		};

		if (h > 1){
			h -= 1;
		};
	};
	//end rgb2hsl routine
	
	// Calculate the opposite hue, h2
	h2 = h + 0.5;

	if (h2 > 1){
	  h2 -= 1;
	};
	
	//convert this back to RGB ex. 0.5, 1, .8
	var $var_1, $var_2
	if (s == 0){
		rDec = l * 255;
		gDec = l * 255;
		bDec = l * 255;
	}else{
		if (l < 0.5){
			$var_2 = l * (1 + s);
		}else{
			$var_2 = (l + s) - (s * l);
		};

		$var_1 = 2 * l - $var_2;
		rDec = 255 * hue_2_rgb($var_1,$var_2,h2 + (1 / 3));
		gDec = 255 * hue_2_rgb($var_1,$var_2,h2);
		bDec = 255 * hue_2_rgb($var_1,$var_2,h2 - (1 / 3));
	};
	
	//then back to hex
	var rhex, ghex, bhex, rgbhex
	
	rhex = decimalToHex( Math.round(rDec),2)
	ghex = decimalToHex(Math.round(gDec),2)
	bhex = decimalToHex(Math.round(bDec),2)

	rgbhex = rhex.toString() + ghex.toString() + bhex.toString();
	return rgbhex;
	
}

// Function to convert hue to RGB, called from above
function hue_2_rgb($v1,$v2,$vh){
	if ($vh < 0){
		$vh += 1;
	};

	if ($vh > 1){
		$vh -= 1;
	};

	if ((6 * $vh) < 1){
		return ($v1 + ($v2 - $v1) * 6 * $vh);
	};

	if ((2 * $vh) < 1){
		return ($v2);
	};

	if ((3 * $vh) < 2){
		return ($v1 + ($v2 - $v1) * ((2 / 3 - $vh) * 6));
	};

	return ($v1);
};

function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}

function toRGBhash(color)
{	
	var red, green, blue;
	if (color.substr(0, 1) === '#')
	{
		red = hexToR(color);
		green = hexToG(color);
		blue = hexToB(color);
	}
	else if (color.indexOf('rgb') > -1)
	{
		var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
		var red = parseInt(digits[2]);
		var green = parseInt(digits[3]);
		var blue = parseInt(digits[4]);
	}else{
		return 'color is not a recognized format.'
	}
	return { r:red, g:green, b:blue };
}