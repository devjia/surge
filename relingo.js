let method = $request.method;
if (method == "OPTIONS") { 
	$done({});
}

let body = JSON.parse($response.body);
body.data.expiredAt = 2493072000000;
body.data.subStatus = "OK";
body.data.productId = "LIFETIME";
body = JSON.stringify(body);
$done({body});