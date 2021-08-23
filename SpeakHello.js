

(function (window) {
	var helloSpeaker = new Object();
	helloSpeaker.names="Ihtesham", "Husnain", "Ali", "Wasim", "Jamshed", "Ahmed", "Hassan", "Noor", "Yaseen", "Muhammad"
	var speakWord="hello"
	
	helloSpeaker.speak= function (name) {
       console.log(speakWord + " " + name);
}

window.helloSpeaker= helloSpeaker

})(window);