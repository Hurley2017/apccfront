//~~~~~~~~~~~JavaScript For Displaying The Master Table~~~~~~~~~~~//
var aid = sessionStorage.getItem("aid");
var session = sessionStorage.getItem("logged");
var doc = {"aid":aid, "session":session};
var jdoc = JSON.stringify(doc);
$.ajax({
        url:"https://www.apccbackend.gq/admin/mothertable",
        type:"POST",
        contentType:"application/json",
        data:jdoc,
        async: false,
        success: function(msg){
            document.getElementById("msg").innerHTML = msg;
        }
    })
