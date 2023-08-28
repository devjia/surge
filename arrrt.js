let body = JSON.parse($response.body);

if ($request.url.includes("autoLogin")) {
	body.data.isLogin = true;
	body.data.isVip = true;
}

if($request.url.includes("checkVip")) {
	body.data = true;
	body.message = "已修改";
}

body = JSON.stringify(body);
$done({body});