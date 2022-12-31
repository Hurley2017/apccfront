//~~~~~~~~~~~JavaScript For Showing Coaches~~~~~~~~~~~//
var f = document.querySelector(".request")
f.addEventListener("click", runapp)
function runapp()
{
    var istation = document.getElementById("istation").value;
    var dstation = document.getElementById("dstation").value;
    var type = document.getElementById("type").value;
    const doc = {"istation":istation, "dstation":dstation, "type":type};
    const jdoc = JSON.stringify(doc);
    $.ajax({
        url:"https://www.apccbackend.gq/coach/view",
        type:"POST",
        contentType:"application/json",
        data:jdoc,
        async: false,
        success: function(msg){
            document.getElementById("msg").innerHTML = msg;
        }
    })
}
