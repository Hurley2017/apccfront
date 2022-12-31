//~~~~~~~~~~~JavaScript For Cancelling Tickets~~~~~~~~~~~//
var f = document.querySelector(".request")
f.addEventListener("click", runapp)
function runapp()
{
    var ticketno = document.getElementById("ticketno").value;
    var aid = sessionStorage.getItem("aid");
    var session = sessionStorage.getItem("logged");
    const doc = {"ticketno":ticketno, "aid":aid, "session":session};
    const jdoc = JSON.stringify(doc);
    if (ticketno.length < 24)
    {
        msg = "ticket number must a 24 character string.";
        passvalue(msg);
    }
    else
    {
        $.ajax({
            url:"https://www.apccbackend.gq/admin/cancelticket",
            type:"PUT",
            contentType:"application/json",
            data:jdoc,
            async: false,
            success: function(msg){
                passvalue(msg);
            }
            })
    }
    function passvalue(f)
    {
        document.getElementById("msg").innerHTML = f;
    }
    
}