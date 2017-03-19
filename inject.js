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
		var sent = parseFloat(sentiments[i]); 
		var add = "<b>[Sentiment: " + sent + " ";
		if (sent < 0.1) { add = add + ":sob:";}
		else if (sent < 0.3) {add = add + ":disappointed:";}
		else if (sent < 0.5) { add = add + ":worried:";}
		else if (sent < 0.7) { add = add + ":simple_smile:";}
		else { add = add + ":relaxed:";}
		add = add.concat(" ]</b>");
		if (!messages[i].innerHTML.includes("<b>[Sentiment: ")) {
			messages[i].innerHTML = messages[i].innerText + " " + add;
		}
	}
}
