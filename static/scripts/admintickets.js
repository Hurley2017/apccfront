//~~~~~~~~~~~JavaScript For Showing All Tickets Booked~~~~~~~~~~~//
var aid = sessionStorage.getItem("aid")
var session = sessionStorage.getItem("logged");
doc  = {"aid": aid, "session":session};
jdoc = JSON.stringify(doc);
$.ajax({
    url:"https://www.apccbackend.gq/admin/alltickets",
    type:"POST",
    contentType:"application/json",
    data:jdoc,
    async: false,
    success: function(msg){
        document.getElementById("msg").innerHTML = msg;
        choose(msg)
        }
})
function choose(i)
{
    if(i == "You have to login as an Admin.")
    {
        logout()
    }
}
function logout()
{
    sessionStorage.clear()
    window.location = "http://www.apccproject.ml/adminlock"
}
