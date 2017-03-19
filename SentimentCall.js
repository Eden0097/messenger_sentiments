function getSentiment(phrase) {
	$.post( "http://www.areslee.com/nwhack2017/test.php", function( data ) {
		return data.toString();
	});
/*
    $(function() {
        var params = {
            // Request parameters
        };
        
        $.ajax({
			url: "http://www.areslee.com/nwhack2017/test.php?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","text/plain");
            },
            type: "POST",
            // Request body
            data: "{\"documents\":[" +
                    "{\"id\":\"1\",\"text\":\"" + phrase + "\"}]}",
        })
        .done(function(data) {
			console.log(data.documents[0].score);
            return data.documents[0].score;
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
