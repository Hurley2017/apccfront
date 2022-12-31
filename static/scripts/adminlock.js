//~~~~~~~~~~~JavaScript For Logging In To Admin And Microservices~~~~~~~~~~~//
var f = document.querySelector(".request");
f.addEventListener("click", runapp);

var otp = document.querySelector(".requestotp");
otp.addEventListener("click", sendotp);

function runapp()
{
    var aid = document.getElementById("aid").value;
    var apass = document.getElementById("apass").value;
    var otp = document.getElementById("aotp").value;
    
        jdoc = {"aid": aid, "apass": apass, "otp":otp}
        jdoc = JSON.stringify(jdoc);
        {
            $.ajax({
                url:"https://www.apccbackend.gq/adminlock",
                type:"POST",
                contentType:"application/json",
                data:jdoc,
                async: false,
                success: function(msg){
                    if (msg != "incorrect credentials" & msg != "Please enter OTP")
                    {
                        sessionStorage.setItem("logged", msg);
                        sessionStorage.setItem("aid", aid);
                        document.getElementById("msg").innerHTML = "Logging In...";
                        window.location= "https://apccproject.herokuapp.com/admin";
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
    var aid = document.getElementById("aid").value;
    var apass = document.getElementById("apass").value;
    
        jdoc = {"aid": aid, "apass": apass}
        jdoc = JSON.stringify(jdoc);
        {
            $.ajax({
                url:"https://www.apccbackend.gq/adminotp",
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
    var id = document.getElementById("aid").value;
    var pass = document.getElementById("apass").value;
    var wid = "aid";
    var wpass = "apass";
    var collection = "admin";
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