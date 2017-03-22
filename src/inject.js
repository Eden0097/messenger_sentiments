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
function injectSentiments(data, min, max) {
	var messages = document.getElementsByClassName("_58nk");
	var sentiments = data;
	for (var i = min; i < max; i++) {
		var sent = parseFloat(sentiments[i - min].toString().replace(/ /g,'')); 
		var add = "<b>[Sentiment: dafadfasfdfasdfaf" + " ";
		if (sent < 0.1) { add = add + "\u1F62D";}
		else if (sent < 0.3) {add = add + "\u1F625";}
		else if (sent < 0.5) { add = add + "\u1F610";}
		else if (sent < 0.7) { add = add + "\u1F60A";}
		else { add = add + "\u1F618";}
		add = add + " ]</b>";
		if (!messages[min + i].innerHTML.includes("<b>[Sentiment: ")) {
			messages[min + i].innerHTML = messages[min + i].innerText + " " + add;
		}
	}
}

function injectSentiment(data, index) {
	var messages = document.getElementsByClassName("_58nk");
	var sent = parseFloat(data.toString().replace(/ /g,'')); 
	var add = "<b>[Sentiment: " + " ";
	if (isNaN(sent)) {
		add = add + "service temporarily unavailable";
	} else if (sent < 0.1) { add = add + "<img class=\"_1ift _1ifu img\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v8/zfa/1/32/1f62d.png\">";}
	else if (sent < 0.3) {add = add + "<img class=\"_1ift _1ifu img\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v8/z4b/1/32/1f625.png\">";}
	else if (sent < 0.5) { add = add + "<img class=\"_1ift _1ifu img\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v8/z27/1/32/1f610.png\">";}
	else if (sent < 0.7) { add = add + "<img class=\"_1ift _1ifu img\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v8/z6/1/32/1f642.png\">";}
	else { add = add + "<img class=\"_1ift _1ifu img\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v8/z8e/1/32/1f606.png\">";}
	add = add.concat(" ]</b>");
	if (!messages[index].innerHTML.includes("<b>[Sentiment: ")) {
		messages[index].innerHTML = messages[index].innerText + " " + add;
	}
}
