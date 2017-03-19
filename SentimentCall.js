function getSentiment(phrase) {
    $(function() {
        var params = {
            // Request parameters
        };
        
        $.ajax({
            url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","c28dd70cff3b417092edfd3957275908 ");
            },
            type: "POST",
            // Request body
            data: "{\"documents\":[" +
                    "{\"id\":\"1\",\"text\":\"" + phrase + "\"}]}",
        })
        .done(function(data) {
            return data.documents[0].score;
        })
        .fail(function() {
            alert("error");
        });
    });
    return null;
}