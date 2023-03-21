
// console.log("Set Peoxy");
const { ProxyManager } = require("proxy-utilities");

const express = require('express')
const app = express()

app.get('/check', function (req, res) {
    res.send('Hello World')
    ProxyManager.fastCheck('142.252.223.243','3128').then((res) => {
        if(res.httpsScore == 1 || res.httpScore == 1 || res.googleScore == 1){
            var proip = element.proxy_ip;
            var proport = element.proxy_port;
            var proid = element.prox_id;
            console.log('ip ',proip);
            //createCont(cc,number,wa_number,proip,proport,proid);
        }
        if(res.httpsScore == 0 && res.googleScore == 0 && res.httpScore == 0){
            console.log('Proxy Not Working ');
        }
    });
})

app.listen(3000)


