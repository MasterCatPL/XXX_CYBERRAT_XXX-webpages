//required ids:
// "INPUT-BUTTON" - button which starts the search
// "USES" - span with available uses
// "OWNER-NAME" - nickname of owner

//DEBUG DELETE THIS

//function debugEnoughEth() {
//	debugStuff(undefined, 1, true)
//}
//
//function debugNotEnoughEth() {
//	debugStuff(undefined, 0, false)
//}
//
//if (window.ue == undefined) {
//	debugStuff()	
//}
//
//function debugStuff(infosec="xxxx-xxxx|readeable_name|Category", queries=0, buySucess=false) {
//	window.ue = {
//		webbrowser: {
//			get_infosec_by_name: function (name, service) {
//				let myPromise = new Promise((resolve, reject) => {
//					debugNotEnoughEth();
//					get_service_access();
//					//TRASHINPUT NOQUERIES NOTTHISSERVICE NORESULTS
//					resolve(infosec);
//				});
//				return myPromise;
//			},
//			get_static_npc_username: function (service) {
//				let myPromise = new Promise((resolve, reject) => {
//					resolve("XXX_CYBERRAT_XXX");
//				});
//				return myPromise;
//			},
//			get_service_price: function (service) {
//				let myPromise = new Promise((resolve, reject) => {
//					resolve(0.05);
//				});
//				return myPromise;
//			},
//			get_service_access: function (service) {
//				let myPromise = new Promise((resolve, reject) => {
//					resolve(queries);
//				});
//				return myPromise;
//			},
//			bought_api_query: function (service, price) {
//				let myPromise = new Promise((resolve, reject) => {
//					resolve(buySucess);
//				});
//				return myPromise;
//			},
//			display_desktop_message: function (message, isRed, isSilent) {
//				console.log(message);
//				let myPromise = new Promise((resolve, reject) => {
//					resolve(message);
//				});
//				return myPromise;
//			},
//			refresh_doxdocs: function () {
//				let myPromise = new Promise((resolve, reject) => {
//					resolve("Refreshed");
//				});
//				return myPromise;
//			},
//			get_app_price: function (service) {
//				let myPromise = new Promise((resolve, reject) => {
//					resolve(0.15);
//				});
//				return myPromise;
//			},
//			bought_checker: function () {
//				let myPromise = new Promise((resolve, reject) => {
//					resolve("Downloaded");
//				});
//				return myPromise;
//			},
//			buy_module: function (module) {
//				let myPromise = new Promise((resolve, reject) => {
//					resolve("Downloaded");
//				});
//				return myPromise;
//			},
//			visited_blog: function (blogID) {
//				let myPromise = new Promise((resolve, reject) => {
//					resolve("AnxietyHit");
//				});
//				return myPromise;
//			},
//			play_sound: function (isGood) {
//				if (!isGood) {
//					let audio = new Audio("DEBUG_AUDIO/shs_cyber_button_ui_denied_error_negative_buzz.wav")
//					audio.play();
//				} else {
//					let audio = new Audio("DEBUG_AUDIO/shs_cyber_button_ui_complete_positive_2.wav")
//					audio.play();
//				}
//				let myPromise = new Promise((resolve, reject) => {
//					resolve(isGood);
//				});
//				return myPromise;
//			},
//		},
//	};
//}


/// end of debug

function getPrice(app) {
	window.ue.webbrowser.get_app_price(app).then(function(ReturnValue) {
		document.getElementById("PRICE").innerText = ReturnValue
	})
}

function play_sound(isGood) {
	window.ue.webbrowser.play_sound(isGood);
}

function refresh_doxdocs() {
	play_sound(true);
	window.ue.webbrowser.refresh_doxdocs();
}

window.addEventListener('load', function () {
	document.body.insertAdjacentHTML("afterbegin", "<div id=\"ALERT-CONTAINER\"><div id=\"ALERT\"><div id=\"ALERT-X\">ALERT</div><div id=\"ALERT-TEXT\"></div><div id=\"ALERT-X-2\"><div id=\"ALERT-NO\" onclick=\"document.getElementById('ALERT-CONTAINER').style.visibility = 'collapse'\">NO</div><div id=\"ALERT-OK\" onclick=\"document.getElementById('ALERT-CONTAINER').style.visibility = 'collapse';\">OK</div></div></div></div>")
})

function display_desktop_message(message, isRed, isSilent) {
	window.ue.webbrowser.display_desktop_message(message, isRed, isSilent);
}

function get_static_npc_username(npcName) {
	window.ue.webbrowser.get_static_npc_username(npcName).then(function(ReturnValue) {
		document.getElementById("OWNER-NAME").innerText = ReturnValue
	})
}

function get_service_access(service) {
	window.ue.webbrowser.get_service_access(service).then(function(ReturnValue) {
		document.getElementById("USES").innerText = ReturnValue;
		if (ReturnValue == 0) {
			document.getElementById("INPUT-BUTTON").disabled = true;
			document.getElementById("INPUT-BUTTON").value = 'Pay first'
		} else {
			document.getElementById("INPUT-BUTTON").disabled = false;
			document.getElementById("INPUT-BUTTON").value = 'Search'
		}
	})
}

function displayAlert(message, showNo=false) {
	document.getElementById("ALERT-TEXT").innerText = message;
	document.getElementById("ALERT-CONTAINER").style.visibility = 'visible';
	if (showNo == false) {
		document.getElementById("ALERT-NO").style.visibility = 'collapse';
	}
}

function buyQuery(service, price) {
	window.ue.webbrowser.bought_api_query(service, price).then(function(ReturnValue) {
		if (ReturnValue) {
			window.ue.webbrowser.play_sound(true);
			get_service_access(service);
		} else {
			window.ue.webbrowser.play_sound(false);
			displayAlert("Failure: You have insufficient funds.")
		}
	})
}