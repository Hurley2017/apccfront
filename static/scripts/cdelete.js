//~~~~~~~~~~~JavaScript For Removing a Coach~~~~~~~~~~~//
var f = document.querySelector(".request")
f.addEventListener("click", runapp)
function runapp()
{
    var c_no = parseInt(document.getElementById("coachno").value);
    var aid = sessionStorage.getItem("aid");
    var session = sessionStorage.getItem("logged");
    const doc = {"coachno":c_no, "aid": aid, "session":session};
    const jdoc = JSON.stringify(doc);
    $.ajax({
        url:"https://www.apccbackend.gq/admin/coach/delete",
        type:"DELETE",
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
    if(i == "Please Login as an Admin.")
    {
        logout()
    }
}
function logout()
{
    sessionStorage.clear()
    window.location= "https://apccproject.herokuapp.com/adminlock";
}