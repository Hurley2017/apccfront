//~~~~~~~~~~~JavaScript For Super Admin Login~~~~~~~~~~~//
var f = document.querySelector(".request");
f.addEventListener("click", runapp);

var otp = document.querySelector(".requestotp");
otp.addEventListener("click", sendotp);
function runapp()
{
    var sid = document.getElementById("sid").value;
    var spass = document.getElementById("spass").value;
    var otp = document.getElementById("sotp").value;
    
        jdoc = {"sid": sid, "spass": spass, "otp":otp}
        jdoc = JSON.stringify(jdoc);
        {
            $.ajax({
                url:"https://www.apccbackend.gq/superadminlock",
                type:"POST",
                contentType:"application/json",
                data:jdoc,
                async: false,
                success: function(msg){
                    document.getElementById("msg").innerHTML = msg;
                    if (msg != "Please enter OTP." & msg != "incorrect credentials")
                    {
                        sessionStorage.setItem("logged-super", msg);
                        sessionStorage.setItem("sid", sid);
                        document.getElementById("msg").innerHTML = "Logging in";
                        window.location= "http://www.apccproject.ml/superadmin";
                    }
                    else
                    {
                        document.getElementById("msg").innerHTML = msg;
                    }
                    }
                })
        }
    
    
    
}
function sendotp()
{
    var sid = document.getElementById("sid").value;
    var spass = document.getElementById("spass").value;
    
        jdoc = {"sid": sid, "spass": spass}
        jdoc = JSON.stringify(jdoc);
        {
            $.ajax({
                url:"https://www.apccbackend.gq/superadminotp",
                type:"POST",
                contentType:"application/json",
                data:jdoc,
                async: false,
                success: function(msg){
                    document.getElementById("msg").innerHTML = msg;
                    if(msg == "OTP sent to registered email id and valid for only 3 minutes.")
                    {
                        setTimeout(() => {resetotp();}, 180000)
                    }
                    }
                })
        }
    
    
}
function resetotp()
{
    var id = document.getElementById("sid").value;
    var pass = document.getElementById("spass").value;
    var wid = "super_aid";
    var wpass = "super_apass";
    var collection = "superadmin";
    var doc = {"id":id, "pass":pass, "wid":wid, "wpass":wpass, "collection":collection}
    var jdoc = JSON.stringify(doc)
    {
        $.ajax({
            url:"https://www.apccbackend.gq/resetotp",
            type:"POST",
            contentType:"application/json",
            data:jdoc,
            async: false,
            success: function(msg){
                document.getElementById("msg").innerHTML = msg;
                }
            })
    }
}