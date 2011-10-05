function rgbToHex(color)
{
	// Check if it is already present in hexadecimal format or not.
	if (color.substr(0, 1) === '#')
	{
		return color;
	}
	// Check either it content the rgb color format or not
	else if (color.indexOf('rgb') > -1)
	{
		var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
		var red = parseInt(digits[2]);
		var green = parseInt(digits[3]);
		var blue = parseInt(digits[4]);
		var rgb = blue | (green << 8) | (red << 16);

		return digits[1] + '#' + rgb.toString(16);

	}
	// return some default color if back color is transparent
	else
	{
		return '#FFFFFF';
	}
};

function colorValue(color)
{
	var color = toRGBhash( color );
	return Math.sqrt(
      color.r * color.r * .241 + 
      color.g * color.g * .691 + 
      color.b * color.b * .068);
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

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}