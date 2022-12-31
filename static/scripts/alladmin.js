//~~~~~~~~~~~JavaScript For Showing All Admin~~~~~~~~~~~//
var sid = sessionStorage.getItem("sid");
var session  = sessionStorage.getItem("logged-super");
var doc = {"sid":sid, "session":session}
var jdoc = JSON.stringify(doc)
$.ajax({
    url:"https://www.apccbackend.gq/superadmin/alladmin",
    type:"POST",
    contentType:"application/json",
    data:jdoc, 
    async: false,
    success: function(msg){
        passvalue(msg)
    }
    })
function passvalue(f)
{
document.getElementById("msg").innerHTML = f;
}
