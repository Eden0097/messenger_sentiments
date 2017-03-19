console.log("injected");

window.onload = function() {
	var lookedAt = false;
	$('.uiScrollableAreaContent').on("DOMNodeInserted", function() {
		var msg = [];
			var messages = document.getElementsByClassName("_58nk");
			for (var i = 0; i < messages.length; i++) {
				msg.push(messages[i].innerText);
			}
			msg = parseData(msg);
			console.log(msg);
			lookedAt = true;

			// var sentiments = getSentiments(msg);
	});
};


function parseData(msg) {
	return msg;
}
