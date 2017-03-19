/**
 * This script puts the sentiment on to each of the messages on the fb messenger site.
 */

/**
 * Injects the sentiment data into the fb messenger messages.
 * @param data	the sentiment data to be injected into the website.
 * @requires	data != null
 * @effects		fb messenger site
 * @modifies	each message box with its respective sentiment data
 */
function injectSentiments(data) {
	var messages = document.getElementsByClassName("_58nk");
	var sentiments = data;
	for (var i = 0; i < messages.length; i++) {
		messages[i].innerText = messages[i].innerText + " " + sentiments[i];
	}
}
