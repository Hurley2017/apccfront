//~~~~~~~~~~~JavaScript For Adding an Admin~~~~~~~~~~~//
var f = document.querySelector(".request")
f.addEventListener("click", runapp)
function runapp()
{
    var sid = sessionStorage.getItem("sid");
    var session = sessionStorage.getItem("logged-super");
    var aname = document.getElementById("aname").value;
    var apass= document.getElementById("apass").value;
    var aid = document.getElementById("aid").value;
    var amail = document.getElementById("amail").value;
    const doc = {"aname":aname, "apass": apass, "aid": aid, "amail":amail, "sid":sid, "session":session};
    const jdoc = JSON.stringify(doc);
    $.ajax({
        url:"https://www.apccbackend.gq/superadmin/insert",
        type:"POST",
        contentType:"application/json",
        data:jdoc,
        async: false,
        success: function(msg){
            document.getElementById("msg").innerHTML = msg;
            choose(msg)
        }
    })
}
function choose(i)
{
    if(i == "Initiating lockdown")
    {
        logout()
    }
}
function logout()
{
    sessionStorage.clear()
    window.location = "http://www.apccproject.ml/superadminlock"
}