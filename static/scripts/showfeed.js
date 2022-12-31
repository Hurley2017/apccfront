//~~~~~~~~~~~JavaScript For Showing Feedbacks~~~~~~~~~~~//
var aid = sessionStorage.getItem("aid");
var session = sessionStorage.getItem("logged");
var doc = {"aid":aid, "session":session};
var jdoc = JSON.stringify(doc);
$.ajax({
    url:"https://www.apccbackend.gq/admin/allfeed",
    type:"POST",
    contentType:"application/json",
    async: false,
    data:jdoc,
    success: function(msg){
        passvalue(msg)
    }
    })
function passvalue(f)
{
    document.getElementById("msg").innerHTML = f;
}
