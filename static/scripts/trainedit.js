//~~~~~~~~~~~JavaScript For Modifying a Train~~~~~~~~~~~//
var f = document.querySelector(".request");
f.addEventListener("click", runapp);
function runapp()
{
    var tname = document.getElementById("tname").value;
    var dtime = document.getElementById("dtime").value;
    var tno = parseInt(document.getElementById('tno').value);
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
        jdoc = {"tname": tname, "dtime": dtime, "tno":tno, "aid":admin, "session":session}
        jdoc = JSON.stringify(jdoc);
        {
            $.ajax({
                url:"https://www.apccbackend.gq/admin/train/edit",
                type:"PUT",
                contentType:"application/json",
                data:jdoc,
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