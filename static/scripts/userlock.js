//~~~~~~~~~~~JavaScript For Logging In To User~~~~~~~~~~~//
var f = document.querySelector(".request");
f.addEventListener("click", runapp);
function runapp()
{
    var ph_num = document.getElementById("ph_num").value;
    var upass = document.getElementById("upass").value;
    
        jdoc = {"ph_num": ph_num, "upass": upass}
        jdoc = JSON.stringify(jdoc);
        {
            $.ajax({
                url:"https://www.apccbackend.gq/userlock",
                type:"POST",
                contentType:"application/json",
                data:jdoc,
                async: false,
                success: function(msg){
                    if (msg != "invalid username or password")
                    {
                        sessionStorage.setItem("logged-user", msg);
                        sessionStorage.setItem("ph_num", ph_num);
                        document.getElementById("logim").innerHTML = "Logging in...";
                        window.location= "http://www.apccproject.ml/user";
                    }
                    else if(msg == "invalid username or password")
                    {
                        document.getElementById("msg").innerHTML = msg + " <a href='http://www.apccproject.ml/user/forgotpassword'>forgot password?</a>";
                    }
                    else
                    {
                        document.getElementById("msg").innerHTML = msg;
                    }
                    }
                })
        }
    
    
    
}