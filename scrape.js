/**
 * This script gets message on the fb messenger site and gets the sentiment of each message
 */

/**
 * When the site finishes loading, we attach a listener to check if any new messages have been inserted.
 */
var myid;
var last_msg;

window.onload = function() {
	myid = chrome.runtime.id;
	last_msg = 0;
	$('.uiScrollableAreaContent').on("DOMNodeInserted", function() {
			scrapeMessages();
		});
};

/**
 * scrapes the messages in the fb messenger site and gets the sentiment.
 */
function scrapeMessages() {
	var msg = [];
	var box = document.getElementsByClassName("_58nk");
	var sentiments = [];

	for (var i = last_msg; i < box.length; i++) {
		msg.push(box[i].innerText);
		getSentiment(msg[i - last_msg], myid, i);
	}
	if (box.length !== last_msg) {
		last_msg = box.length;
	}
}
