console.log("injected");

window.onload = function() {
	var lookedAt = false;
	$('.uiScrollableAreaContent').bind("DOMSubtreeModified", function() {
		var msg = [];
		if (!lookedAt) {
			var messages = document.getElementsByClassName("_58nk");
			for (var i = 0; i < messages.length; i++) {
				msg.push(messages[i].innerText);
			}
			msg = parseData(msg);
			console.log(msg);
			lookedAt = true;

			// var sentiments = getSentiments(msg);
		}
	});
};


function parseData(msg) {
	return msg;
}
