//~~~~~~~~~~~JavaScript For Removing an Admin~~~~~~~~~~~//
var f = document.querySelector(".request")
f.addEventListener("click", runapp)
function runapp()
{
    var aid = document.getElementById("aid").value;
    var sid = sessionStorage.getItem("sid");
    var session = sessionStorage.getItem("logged-super")
    const doc = {"aid":aid, "sid":sid, "session":session};
    const jdoc = JSON.stringify(doc);
    $.ajax({
        url:"https://www.apccbackend.gq/superadmin/delete",
        type:"DELETE",
        contentType:"application/json",
        data:jdoc,
        async: false,
        success: function(msg){
            document.getElementById("msg").innerHTML = msg;
            if(msg == "Initiating lockdown")
            {
                sessionStorage.clear()
                window.location = "http://www.apccproject.ml/superadminlock"
            }
        }
    })
}