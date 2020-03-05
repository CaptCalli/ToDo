// Create an 'x' button and add it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

// Click on the 'x' button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	}
}

// Add a 'checkmark' when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);


// Allow new item to be entered via the "Enter" key on keyboard
var input = document.getElementById("myInput");

input.addEventListener("keyup", function(event) {
	  // Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
	// Trigger the button element with a click
		document.getElementById("myBtn").click();
	}
});



// Create a new list item when clicking on the "Make It So" Button
function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue);


	li.appendChild(t);
	if (inputValue === '') {
		alert("You must write something!");
	} else {
		document.getElementById("myList").appendChild(li);
	}


	document.getElementById("myInput").value = "";

	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}

}

