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
		var add = "<b>[Sentiment: ";
		if (sent < 0.1) { add.concat(":sob:");}
		else if (sent < 0.3) { add.concat(":disappointed:");}
		else if (sent < 0.5) { add.concat(":worried:");}
		else if (sent < 0.7) { add.concat(":simple_smile:");}
		else { add.concat(":relaxed:");}
		add.concat("]</b>");
		messages[i].innerHTML = messages[i].innerText + " " + add;
	}
	emojify.setConfig({emojify_tag_type:'span', ignore_emoticon: 'true'});
	emojify.run();
}
