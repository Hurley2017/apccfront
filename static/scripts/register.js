//~~~~~~~~~~~JavaScript For User Registration~~~~~~~~~~~//
var f = document.querySelector(".request");
f.addEventListener("click", runapp);
function runapp()
{
    var ph_num = document.getElementById("ph_num").value;
    var upass = document.getElementById("upass").value;
    var uname = document.getElementById("uname").value;
    var umail = document.getElementById("umail").value;
    var jdoc = {"ph_num": ph_num, "upass": upass, "uname": uname, "umail":umail}
    jdoc = JSON.stringify(jdoc);
    {
        $.ajax({
            url:"https://www.apccbackend.gq/registeruser",
            type:"POST",
            contentType:"application/json",
            data:jdoc,
            async: false,
            success: function(msg){
                document.getElementById("msg").innerHTML = msg;
                if (msg=="Registered Successfully"){
                    window.location = "https://apccproject.herokuapp.com/userlock";
                }
                }
            })
    }
    
    
    
}