console.log("injected");

window.onload = function() {
	$('.uiScrollableAreaContent').on("DOMNodeInserted", function() {
			scrapeMessages();
		});
};

function scrapeMessages() {
	var msg = [];
	var messages = document.getElementsByClassName("_58nk");
	var sentiments = [];
	for (var i = 0; i < messages.length; i++) {
		msg.push(messages[i].innerText);
		sentiments.push(getSentiment(msg[i]));
	}

	console.log(sentiments);
}

function parseData(msg) {
	return msg;
}
