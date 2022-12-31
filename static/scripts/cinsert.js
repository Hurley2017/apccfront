//~~~~~~~~~~~JavaScript For Inserting an Coach~~~~~~~~~~~//
var f = document.querySelector(".request")
f.addEventListener("click", runapp)
function runapp()
{
    var tno = parseInt(document.getElementById("trainno").value);
    var nos = parseInt(document.getElementById("nos").value);
    var c_type = document.getElementById("type").value;
    var aid = sessionStorage.getItem("aid")
    var session = sessionStorage.getItem("logged")
    const doc = {"trainno":tno,"nos":nos, "coachtype":c_type, "aid":aid, "session":session};
    const jdoc = JSON.stringify(doc);
    $.ajax({
        url:"https://www.apccbackend.gq/admin/coach/insert",
        type:"POST",
        contentType:"application/json",
        data:jdoc,
        success: function(msg){
            document.getElementById("msg").innerHTML = msg;
            choose(msg)
        }
    })
}
function choose(i)
{
    if(i == "Please Login as an Admin.")
    {
        logout()
    }
}
function logout()
{
    sessionStorage.clear()
    window.location= "http://www.apccproject.ml/adminlock";
}