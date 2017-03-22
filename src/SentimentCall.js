function getSentiment(phrase, myid, index) {
	console.log("getting sentiment");
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", "https://fierce-plateau-62887.herokuapp.com/MSAPITest.php?text=" + phrase + "&chromeExtensionID=" + myid, true);
	var response = "";
	xmlHttp.onload = function(e) {
		if (xmlHttp.readyState === 4) {
			if (xmlHttp.status === 200) {
				response = xmlHttp.responseText;
				injectSentiment(response, index);
			} else {
				console.error(xmlHttp.statusText);
			}
		}
	};
	xmlHttp.send(null);
	return response;
}

function getSentiments(phrases, myid) {
	var sents = [];
	for (var i = 0; i < phrases.length; i++) {
		sents.push(getSentiment(phrases[i], myid));
	}
	return sents;
}
