// JavaScript Document

//Mary Sarsfield

//assign class/ variable.className = 'css class';

//document.getElementbyId("list ul class that you assigned in html").appendChild(variable);

/*
3 ways to get elements in the HTML:
- document.getElementById()
- document.getElementsByTagName()
- document.getElementsByClassName()
*/


//var positionX = 25;

var positionY = 100;
var createList = function (ev) {

var list; /* Holds our <div in this case ul li> and allows us to move it about the page*/
	

list = document.createElement('li'); //.createElement() makes a new empty HTML and is a function (action)
list.innerHTML = document.getElementById('prompt').value; // the value is whatever the person types into the field
list.className = 'box'; // A className lets us manipulate the classes fro a tag


document.getElementById('todo').appendChild(list); //.appendChild() will add an element to the HTML file



//variable.innerHTML = "new content";  type in inner html in google  tizag.com

//positionX += 0;
//	list.style.left = positionX + 'px'; // not used this time, but wanted to see if it worked and will use it in another application.

positionY += 50;	
	list.style.top = positionY + 'px';

};

document.getElementById('create').addEventListener('click', createList, true);


document.documentElement.addEventListener('click', function(ev) {
	if (ev.target.tagName == 'LI') {
		ev.target.className = 'box active';
		list = ev.target;
	}
}, false);










