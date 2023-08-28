let body = JSON.parse($response.body);

if($request.url.includes("autoLogin")) {
	body.data.isLogin = true;
	body.data.isVip = true;
} else {
	body.data = true;
}

body = JSON.stringify(body);
$done({body});