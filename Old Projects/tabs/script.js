// 
+function () {

document.querySelector('.tab').classList.add('active');
document.querySelector('.tab-panel').classList.add('active');

function selectPanel (e) {
	console.dir(e.target.dataset.target);
	var target = e.target.dataset.target;

	document.querySelectorAll('.tab, .tab-panel').forEach(el => el.classList.remove('active'))
	e.target.classList.add('active');
	console.log(document.querySelector('.' + target));
	document.querySelector('.' + target).classList.add('active');
};

document.querySelectorAll('.tab').forEach(el => {
	el.addEventListener('click', selectPanel);
});

}();

//
function AddItem1() {
	div=document.getElementById("items1");
	button=document.getElementById("add1");
	newitem="<textarea>" + "</textarea>";
	newnode=document.createElement("span");
	newnode.innerHTML=newitem;
	div.insertBefore(newnode,button);
}

function AddItem2() {
	div=document.getElementById("items2");
	button=document.getElementById("add2");
	newitem="<strong>" + "</strong>";
	newitem+="<input type=\"text\" name=\"item";
	newitem+="\" size=\"150\"><br>";
	newnode=document.createElement("span");
	newnode.innerHTML=newitem;
	div.insertBefore(newnode,button);
}

function AddItem3() {
	div=document.getElementById("items3");
	button=document.getElementById("add3");
	newitem="<strong>" + "</strong>";
	newitem+="<input type=\"text\" name=\"item";
	newitem+="\" size=\"150\"><br>";
	newnode=document.createElement("span");
	newnode.innerHTML=newitem;
	div.insertBefore(newnode,button);
}

// save (refresh)
function appendText(){
    $('#text').val( $('#text').val() + 'text');
    $('#text').trigger( "change" );
};

function saveState(){
    localStorage["state"] = $('#text').val();
};

function loadState(){
    var state="";
    try {
        state = localStorage["state"];
    } catch ( e ){};
    $('#text').val( state );
};
