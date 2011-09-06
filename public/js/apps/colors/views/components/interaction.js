var interaction = function(){
	console.log(canvas);
	var context = canvas.getContext("2d");
	context.fillStyle = "#ff0000";
	context.strokeStyle = '#00f'; // red
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.strokeRect(0,  0, 500, 500);
}();