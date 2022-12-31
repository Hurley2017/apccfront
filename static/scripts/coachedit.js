//~~~~~~~~~~~JavaScript For Modifying an Coach~~~~~~~~~~~//
var f = document.querySelector(".request");
f.addEventListener("click", runapp);
function runapp()
{
    var cno = parseInt(document.getElementById("cno").value);
    var type = document.getElementById("type").value;
    var noas = parseInt(document.getElementById('noas').value);
    var aid = sessionStorage.getItem("aid")
    var session = sessionStorage.getItem("logged")
    jdoc = {"coachno": cno, "type": type, "noas": noas, "aid":aid, "session":session}
    jdoc = JSON.stringify(jdoc);
        {
            $.ajax({
                url:"https://www.apccbackend.gq/admin/coach/change",
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
    window.location= "http://www.apccproject.ml/adminlock";
}