

(function (window) {
	var byeSpeaker= new Object();
	byeSpeaker.names="Ihtesham", "Husnain", "Ali", "Wasim", "Jamshed", "Ahmed", "Hassan", "Noor", "Yaseen", "Muhammad"
	var speakWord="goodbye"
	

	byeSpeaker.speak= function (name) {
        console.log(speakWord + " " + name);
    }

window.byeSpeaker= byeSpeaker

})(window);