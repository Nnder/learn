(function() {

var delay = 100,
	i = 0, 
	startTimer = function (pixels) {
	//console.log('функция starttimer сработала!');
	var elem = document.getElementById('circle'),
		bottom = elem.offsetTop;

		//console.log( bottom );

	if ((pixels > 0 && bottom > 250) || (pixels < 0 && bottom < 50)) {
		clearInterval(timer);

		timer = setInterval(function () {
			startTimer(pixels * -1);
		}, delay);
	}


	elem.style.top = bottom + pixels + 'px';
	i++;

	//if (i < 400) {
		//console.log('функция starttimer '+(i+1)+' сработала!');
		//setTimeout(startTimer, delay);

	//} else {
		//clearInterval(timer);
	//}


};


//var timer = setTimeout(startTimer, delay);


//alert('alert!!!');

//clearTimeout(timer);



})();