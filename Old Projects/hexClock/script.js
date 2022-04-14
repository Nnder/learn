let clock = document.getElementById('clock');
let color = document.getElementById('color');

function hexClock(){
	let time = new Date();
	let s = time.getSeconds().toString();
	let m = time.getMinutes().toString();
	let h = time.getHours().toString();

if(s.length < 2) {
		s = 0 + s;
	}

	if(m.length < 2) {
		m = 0 + m;
	}

	if(h.length < 2) {
		h = 0 + h;
	}

	let clockString = h + ':' + m + ':' + s;
	let colorString = '#' + h + m + s;

	clock.textContent = clockString;
	color.textContent = colorString;
	document.body.style.background = colorString;
}
hexClock();
setInterval(hexClock, 1000);

let plus = document.getElementById('plus');
function plusHour(){

}

