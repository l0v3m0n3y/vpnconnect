# vpnconnect
JavaScript library for Mobile API vpnconnect
# main
```js
async function main(){
    const {vpnconnect} = require('./vpnconnect');
    const vpn= new vpnconnect();
    let req=await vpn.servers_list()
    console.log(req["servers"])
}
main()
```
