

<?php
$dynamicChromeExtensionID = $_GET['chromeExtensionID'];

header('Access-Control-Allow-Origin: chrome-extension://'.$dynamicChromeExtensionID, false);

//$phrase = $_Get['phrase'];
$id = $_GET['text'];
//echo "phrase is: " . $id;
getSentimentScore($id);


function getSentimentScore($phrase){

$postfields = "{\"documents\":[" . "{\"id\":\"1\",\"text\":\"" . $phrase . "\"}]}";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_POST, 1);
// Edit: prior variable $postFields should be $postfields;
curl_setopt($ch, CURLOPT_POSTFIELDS, $postfields);
curl_setopt($ch, CURLOPT_HTTPHEADER,     array('Content-Type: application/json','Ocp-Apim-Subscription-Key: c28dd70cff3b417092edfd3957275908')); 
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0); // On dev server only!
$result = curl_exec($ch);

$jsonArray = json_decode($result,true);

$key = "documents";

$documents = $jsonArray[$key];

//echo $documents;
echo $documents[0]['score'];
//var_dump($documents[0]['score']);
//echo $result;


}


?>


