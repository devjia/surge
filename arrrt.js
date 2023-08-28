let body = JSON.parse($response.body);
body.data.isLogin = true;
body.data.isVip = true;
body = JSON.stringify(body);
$done({body});