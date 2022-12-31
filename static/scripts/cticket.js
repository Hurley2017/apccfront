//~~~~~~~~~~~JavaScript For Cancelling an Ticket~~~~~~~~~~~//
var f = document.querySelector(".request")
f.addEventListener("click", runapp)
function runapp()
{
    var ticketno = document.getElementById("ticketno").value;
    var upass = document.getElementById("upass").value;
    var ph_num = sessionStorage.getItem("ph_num");
    var session = sessionStorage.getItem("logged-user");
    const doc = {"ticketno":ticketno, "upass": upass, "ph_num":ph_num, "session":session};
    const jdoc = JSON.stringify(doc);
    
        $.ajax({
            url:"https://www.apccbackend.gq/ticketcancel",
            type:"PUT",
            contentType:"application/json",
            data:jdoc,
            async: false,
            success: function(msg){
                passvalue(msg);
            },
            error: function()
            {
                f = "Invalid ticket number."
                passvalue(f);
            }
            })
    function passvalue(f)
    {
        document.getElementById("msg").innerHTML = f;
        if(f == "session expired or invalid user. Please login again.")
        {
            sessionStorage.clear();
            window.location = "http://www.apccproject.ml/userlock";
        }
        else if(f == "Credentials doesn't match, Try resetting your password.")
        {
            document.getElementById("msg").innerHTML = f + " <a href='http://www.apccproject.ml/user/forgotpassword'>Reset Password</a>";
        }
    }
    
}