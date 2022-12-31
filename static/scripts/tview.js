//~~~~~~~~~~~JavaScript For Showing Trains By Stations~~~~~~~~~~~//
var f = document.querySelector(".request")
f.addEventListener("click", runapp)
function runapp()
{
    var istation = document.getElementById("istation").value;
    var dstation = document.getElementById("dstation").value;
    var doc = {"istation":istation, "dstation":dstation}
    var jdoc = JSON.stringify(doc)
    $.ajax({
        url:"https://www.apccbackend.gq/train/view",
        type:"POST",
        contentType:"application/json",
        data:jdoc,
        async: false,
        success: function(msg){
            document.getElementById("msg").innerHTML = msg;
        }
    })
}
