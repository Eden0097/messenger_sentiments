function getSentiment(phrase, myid) {
	console.log("getting sentiment");
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", "https://fierce-plateau-62887.herokuapp.com/MSAPITest.php?text=" + phrase + "&chromeExtensionID=" + myid, false);
	xmlHttp.send(null);
	return xmlHttp.responseText;
	/*
    $(function() {
        var params = {
			"phrase": phrase
            // Request parameters
        };
        
        $.ajax({
			url: "http://www.areslee.com/nwhack2017/test1.php" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","text/plain");
            },
			type: "GET",
        })
        .done(function(data) {
            return data.toString();
        })
        .fail(function() {
            alert("error");
        });
    });
    return null;
	*/
}

function getSentiments(phrases) {
	var sents = [];
	for (var i = 0; i < phrases.length; i++) {
		sents.push(getSentiment(phrases[i]));
	}
	return sents;
}
