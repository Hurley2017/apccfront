//~~~~~~~~~~~JavaScript For Modifying an Admin~~~~~~~~~~~//
var f = document.querySelector(".request");
f.addEventListener("click", runapp);
function runapp()
{
    var newid = document.getElementById("newid").value;
    var aname = document.getElementById("aname").value;
    var aid = document.getElementById("aid").value;
    var apass = document.getElementById('apass').value;
    var sid = sessionStorage.getItem("sid");
    var session = sessionStorage.getItem("logged-super")
    var doc = {"aid": aid, "aname": aname, "newid": newid, "apass": apass, "sid":sid, "session":session};
    doc = JSON.stringify(doc);
        {
            $.ajax({
                url:"https://www.apccbackend.gq/superadmin/change",
                type:"PUT",
                contentType:"application/json",
                data:doc,
                async: false,
                success: function(msg){
                    document.getElementById("msg").innerHTML = msg;
                    choose(msg)
                    }
                })
        }
    
    
    
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
    window.location = "https://apccproject.herokuapp.com/superadminlock"
}