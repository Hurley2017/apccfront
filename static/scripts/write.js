//~~~~~~~~~~~JavaScript For Posting Feedbacks~~~~~~~~~~~//
var f = document.querySelector(".request")
f.addEventListener("click", runapp)
function runapp()
{
    var cname = document.getElementById("name").value;
    var feedback = document.getElementById("feedback").value;
    var doc = {"feedback":feedback, "cname": cname};
    var jdoc = JSON.stringify(doc);
    {
        $.ajax({
            url:"https://www.apccbackend.gq/wrtous",
            type:"POST",
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