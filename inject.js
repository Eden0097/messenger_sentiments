console.log("injected");

window.onload = function() {
	var messages = [];
	$('.uiScrollableAreaContent').bind("DOMSubtreeModified", function() {
		messages = document.getElementsByClassName("_3oh-");
		for (var i = 0; i < messages.length; i++) {
			console.log(messages[i].innerText);
			messages[i].innerText = messages[i].innerText; 
		}
	});
};
