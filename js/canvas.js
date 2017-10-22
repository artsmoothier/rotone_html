var pos = {
	drawable: false,
	x: -1,
	y: -1
};

var canvas, ctx;
var mode;

window.onload = function(){
	canvas = document.getElementById("canvas");
	canvas.style.cursor = 'url(../images/main/mouse2.png), auto';
	ctx = canvas.getContext("2d");
	ctx.strokeStyle = "#00FF68";
	canvas.addEventListener("mousedown", listener);
	canvas.addEventListener("mousemove", listener);
	canvas.addEventListener("mouseup", listener);
	canvas.addEventListener("mouseout", listener);
}

function listener(event){
	switch(event.type){
		case "mousedown":
			initDraw(event);
			break;

		case "mousemove":
			if(pos.drawable)
				if(mode == "pencil"){
					draw(event);
				}else{
					eraserdraw(event);
				}
			break;

		case "moustout":
		case "mouseup":
			finishDraw();
			break;

	}
}


function initDraw(event){
	
	ctx.beginPath();
	pos.drawable = true;
	var coors = getPosition(event);
	pos.X = coors.X;
	pos.Y = coors.Y;
	ctx.moveTo(pos.X, pos.Y);

}

function eraserdraw(event){
	
	
	// ctx.globalCompositeOperation = "destination-out";
	// var coors = getPosition(event);
	// ctx.arc(pos.X, pos.Y, 8, 0, Math.PI*2, false);
	// pos.X = coors.X;
	// pos.Y = coors.Y;
	// ctx.fill();

	ctx.globalCompositeOperation = "destination-out";
	var coors = getPosition(event);
	ctx.strokeStyle= "rgba(255,255,255,255)";
	ctx.lineTo(coors.X, coors.Y);

	pos.X = coors.X;
	pos.Y = coors.Y;
	ctx.stroke();


}

function draw(event){
	var coors = getPosition(event);
	ctx.strokeStyle="#00FF68";
	//ctx.lineWidth = 10;
	ctx.globalCompositeOperation = "source-over";
	ctx.lineTo(coors.X, coors.Y);
	pos.X = coors.X;
	pos.Y = coors.Y;
	ctx.stroke();
	return;
}

function finishDraw(){
	
	pos.drawable = false;
	pos.X = -1;
	pos.Y = -1;
	return;

}

function canvasX(clientX) {
      var bound = canvas.getBoundingClientRect();
      var bw = 5;
      return (clientX - bound.left - bw) * (canvas.width / (bound.width - bw * 2));
 }

 function canvasY(clientY) {
      var bound = canvas.getBoundingClientRect();
      var bw = 5;
      return (clientY - bound.top - bw) * (canvas.height / (bound.height - bw * 2));
 }


function getPosition(event){
	var x = event.pageX - canvas.offsetLeft;
	var y = event.pageY - canvas.offsetTop;
	return {X: x , Y: y};
}

function brushborder(size){
	ctx.lineWidth = size;
	return;
}

// $(".imagechange").click(function(){
//   // Holds the product ID of the clicked element
//   var productId = $(this).attr('class').replace('addproduct ', '');

//   addToCart(productId);
// });
function drawImage(image_id){
	var img = document.getElementById(image_id);
	
	var img2 = new Image();
	img2.src = img.src;
	canvas.style.backgroundImage = 'url('+img2.src+')';
  	// ctx.style.-webkit-background-image: url(img.src);
  
	// img2.src = img.src.replace('0.png','00.png');
	// alert(img2.src);
	// ctx.drawImage(img, 0, 0, 1000, 565);
	return;

}
$("#rotopen1").click(function() {mode="pencil"; canvas.style.cursor = 'url(../images/main/mouse2.png), auto';});
$("#rotopen2").click(function() {mode="eraser"; canvas.style.cursor = 'url(../images/main/eraser2.png), auto';});
$("#pencil").click(function() {mode="pencil"; canvas.style.cursor = 'url(../images/main/mouse2.png), auto';});
$("#eraser").click(function() {mode="eraser"; canvas.style.cursor = 'url(../images/main/eraser2.png), auto';});



