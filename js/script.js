var imgs = ["img/sample.jpg", "img/Lenovo-p780-camera-sample-10.jpg"];
var imgsIndicator = 0;
var timer = window.setInterval(carroseu, 5000);

function carroseu() {
	mudarImg(1);
}


function onLoad (){
	if (window.innerWidth <= 600) {
		var nav = document.getElementById('navigator');
		nav.style.top = -nav.clientHeight + 35 + 'px';
	};
}

var navActive = false;

function descerNavigator(){
	var nav = document.getElementById('navigator');
	var cont = document.getElementById('container');

	if (navActive == false){
		nav.style.top = 36+'px';
		container.style.top = 36 + nav.clientHeight + 'px';
		navActive = true;
	}else{
		nav.style.top = -nav.clientHeight + 36 + 'px';
		container.style.top = 36 + 'px';
		navActive = false;
	}
}

function mudarImg(x){
	imgsIndicator += x;

	if (imgsIndicator==imgs.length) {imgsIndicator=0};
	if (imgsIndicator==-1) {imgsIndicator=imgs.length-1};

	var jumbo = document.getElementById('jumboImg');

	jumbo.style.opacity = 0.1;

	setTimeout(function(){jumbo.src = imgs[imgsIndicator];}, 500);
	
	setTimeout(function(){jumbo.style.opacity = 1;}, 1000);
}