//~~~~~~~~~~~JavaScript For Checking Super Admin Login Session~~~~~~~~~~~//
var f = document.querySelector(".request")
f.addEventListener("click", runapp)
function runapp()
{
    var t_no = parseInt(document.getElementById("trainno").value);
    var aid = sessionStorage.getItem("aid")
    var session = sessionStorage.getItem("logged")
    const doc = {"trainno":t_no, "aid":aid, "session":session};
    const jdoc = JSON.stringify(doc);
    $.ajax({
        url:"https://www.apccbackend.gq/admin/train/delete",
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