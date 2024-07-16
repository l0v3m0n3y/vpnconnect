//mobile api function
class vpnconnect{
    constructor(){
        this.api = "https://devayulabs.com/vpnconnect"
        this.headers={"User-Agent":"okhttp/4.11.0"}
    }
    async servers_list(){
        let req=await fetch(`${this.api}/vpn_data?packagename=com.annsoft.vpn`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {vpnconnect};