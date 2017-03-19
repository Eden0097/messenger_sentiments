/**
 * This script gets message on the fb messenger site and gets the sentiment of each message
 */

/**
 * When the site finishes loading, we attach a listener to check if any new messages have been inserted.
 */
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
	for (var i = 0; i < messages.length; i++) {
		msg.push(messages[i].innerText);
		sentiments.push(Math.random());
		// sentiments.push(getSentiment(msg[i]));
	}
	injectSentiments(sentiments);
}

/**
 * Parses the data to fit need.
 * @param msg 	the message to be parsed
 */
function parseData(msg) {
	return msg;
}
