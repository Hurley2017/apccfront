//~~~~~~~~~~~JavaScript For Adding a Train~~~~~~~~~~~//
var f = document.querySelector(".request")
f.addEventListener("click", runapp)
function runapp()
{
    var t_name = document.getElementById("tname").value;
    var istation = document.getElementById("istation").value;
    var dstation = document.getElementById("dstation").value;
    var dtime = document.getElementById("dtime").value;
    var admin = sessionStorage.getItem("aid");
    var session = sessionStorage.getItem("logged");
    spaceloc = dtime.indexOf(' ', 0);
    dtime = dtime.substring(0, spaceloc);
    if(dtime.length > 2)
    {
        dotloc = dtime.indexOf('.', 0);
        dtime = dtime.substring(0, dotloc);
        dtime = dtime + ".5";
    }
    dtime = parseFloat(dtime);
    const doc = {"trainname":t_name, "istation": istation, "dstation": dstation, "dtime": dtime, "aid":admin, "session":session};
    const jdoc = JSON.stringify(doc);
    $.ajax({
        url:"https://www.apccbackend.gq/admin/train/insert",
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