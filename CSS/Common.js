var transmap = new Map()
transmap.set('u', 'Username')
transmap.set('e', 'Email')
transmap.set('i', 'IRC')
transmap.set('m', 'Matix')
transmap.set('d', 'Domain')
transmap.set('f', 'FullName')
transmap.set('p', 'Photo')
transmap.set('k', 'Password')
transmap.set('a', 'Address')
transmap.set('c', 'Captcha')
transmap.set('b', 'Browser')
transmap.set('t', 'Typing')
transmap.set('x', 'IP')
transmap.set('g', 'Gogol')
transmap.set('h', 'History')
transmap.set('v', 'Video')
transmap.set('j', 'Face')
transmap.set('n', 'Timestamp')
transmap.set('1', 'Tvitter')
transmap.set('2', 'Fazebook')
transmap.set('3', 'Creddit')
transmap.set('4', 'Telegramme')
transmap.set('5', 'Chatroom')

var contractmap = new Map()
contractmap.set('u', 'His username:')
contractmap.set('d', 'Owner of this domain:')
contractmap.set('1', 'His Tvitter acc:')
contractmap.set('2', 'His Fazebook acc:')
contractmap.set('3', 'His Dreaddit acc:')
contractmap.set('4', 'His Telegramme acc:')
contractmap.set('r', 'He is in this chatroom:')
contractmap.set('j', "Here's photo of his face:")
contractmap.set('f', 'His full name:')

var costmap = new Map()
costmap.set('u', 0)
costmap.set('e', 0.05)
costmap.set('i', 0)
costmap.set('m', 0)
costmap.set('d', 0.5)
costmap.set('f', 10)
costmap.set('p', 3)
costmap.set('k', 1)
costmap.set('a', 0)
costmap.set('c', 0.25)
costmap.set('b', 0.25)
costmap.set('t', 0.25)
costmap.set('x', 0.05)
costmap.set('g', 1)
costmap.set('h', 0.25)
costmap.set('v', 1)
costmap.set('j', 3)
costmap.set('n', 5)
costmap.set('1', 0)
costmap.set('2', 0)
costmap.set('3', 0)
costmap.set('4', 0)
costmap.set('5', 0)


function translateType(letter) {
	return transmap.get(letter)
}

function translateContract(letter) {
	return contractmap.get(letter)
}

function translateCost(letter) {
	return costmap.get(letter)
}

function displayAlert(message, showNo=false) {
	document.getElementById("ALERT-TEXT").innerText = message;
	document.getElementById("ALERT-CONTAINER").style.visibility = 'visible';
	if (showNo == false) {
		document.getElementById("ALERT-NO").style.visibility = 'collapse';
	}
}

function chooseOption(element) {
	if (element.parentElement.firstElementChild == element && window.getComputedStyle(element.parentElement.children[2]).display == 'none') {
		var display = 'flex'
	} else {
		var display = 'none'
	}

	let myselect = document.getElementById("MYSELECT")
	myselect.prepend(element)

	let options = document.getElementsByClassName("MYSELECT-OPTION")
	for (let i = 1; i < options.length; i++) {
		options[i].style.display = display;
	}
	
}

function addOption(content) {
	let wrapper = document.getElementById("MYSELECT");
	let new_option = document.createElement("div")
	new_option.innerText = content
	wrapper.appendChild(new_option);
	new_option.onclick = function() {chooseOption(this)};
	new_option.classList.add("MYSELECT-OPTION");
}
