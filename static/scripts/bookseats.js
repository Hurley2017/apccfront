//~~~~~~~~~~~JavaScript For Booking Tickets~~~~~~~~~~~//
var time = document.querySelector(".requesttime");
time.addEventListener("click", gettime);
function runapp()
{
    var ph_num = sessionStorage.getItem("ph_num");
    var session = sessionStorage.getItem("logged-user");
    var istation = document.getElementById("istation").value;
    var dstation = document.getElementById("dstation").value;
    var type = document.getElementById("type").value;
    var nos = parseInt(document.getElementById("nos").value);
    var time = document.getElementById("time").value;
    const doc = {"ph_num": ph_num, "istation": istation, "dstation": dstation,"type":type, "nos":nos, "time":time, "session":session};
    const jdoc = JSON.stringify(doc);
    $.ajax({
        url:"https://www.apccbackend.gq/seat/book",
        type:"POST",
        contentType:"application/json",
        data:jdoc,
        async: false,
        success: function(msg){
            document.getElementById("msg").innerHTML = msg;
            choose(msg);
        }
    })
}
function gettime()
{
    var istation = document.getElementById("istation").value;
    var dstation = document.getElementById("dstation").value;
    const doc = {"istation": istation, "dstation": dstation};
    const jdoc = JSON.stringify(doc);
    $.ajax({
        url:"https://www.apccbackend.gq/seat/gettime",
        type:"POST",
        contentType:"application/json",
        data:jdoc,
        async: false,
        success: function(msg){
            if(msg=="<h6 class='display-6'>Initial and destination station must be chosen</h6>" || msg=="<h6 class='display-6'>Source and destination can not be same</h6>" || msg=="<h6 class='display-6'>No train available by that time in database.</h6>")
            {
                document.getElementById("msg").innerHTML = msg;
            }
            else
            {   
                document.getElementById("lbutton").innerHTML = "<button type='submit' onclick='runapp()' class='margin btn btn-primary btn-lg'>Book Ticket</button>";
                document.getElementById("void").innerHTML = msg;
            }
            
        }
    })
}
function choose(i)
{
    if(i == "session expired or user invalid! Please login again.")
    {
        sessionStorage.clear();
        window.location = "http://www.apccproject.ml/userlock";
    }
}