//~~~~~~~~~~~JavaScript For Showing Ticket History~~~~~~~~~~~//
var ph_num = sessionStorage.getItem("ph_num");
var session = sessionStorage.getItem("logged-user");
var doc = {"ph_num":ph_num, "session":session};
doc = JSON.stringify(doc);
$.ajax({
    url:"https://www.apccbackend.gq/ticketview",
    type:"POST",
    contentType:"application/json",
    data:doc,
    async: false,
    success: function(msg){
        passvalue(msg);
    }
    })
function passvalue(f)
{
    document.getElementById("msg").innerHTML = f;
    if(f == "session expired or invalid user. Please login again.")
    {
        sessionStorage.clear();
        window.location = "https://apccproject.herokuapp.com/userlock";
    }
}

