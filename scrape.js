/**
 * This script gets message on the fb messenger site and gets the sentiment of each message
 */

/**
 * When the site finishes loading, we attach a listener to check if any new messages have been inserted.
 */
var last_msg;
var first_load = true;

window.onload = function() {
	$('.uiScrollableAreaContent').on("DOMNodeInserted", function() {
			scrapeMessages();
		});
};

/**
 * scrapes the messages in the fb messenger site and gets the sentiment.
 */
function scrapeMessages() {
	var msg = [];
	var messages = document.getElementsByClassName("_58nk");
	var sentiments = [];
	if (first_load) {
		for (var i = 0; i < messages.length; i++) {
			msg.push(messages[i].innerText);
			//sentiments.push(Math.random());
			sentiments.push(getSentiment(msg[i]));
		}
		injectSentiments(sentiments);
		averageSentiments(sentiments);
	}
	else {
		for (var i = last_msg; i < messages.length; i++) {
			msg.push(messages[i].innerText);
			sentiments.push(getSentiment(msg[i]));
		}
		injectSentiments(sentiments);
		averageSentiments(sentiments);
	}
	first_load = false;
	last_msg = messages.length;
	console.log(msg);
	console.log(last_msg);
}

/**
 * Parses the data to fit need.
 * @param msg 	the message to be parsed
 */
function parseData(msg) {
	return msg;
}
