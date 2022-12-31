//~~~~~~~~~~~JavaScript For Checking Super Admin Login Session~~~~~~~~~~~//
var islog = sessionStorage.getItem("logged-super");
var sid = sessionStorage.getItem("sid");
var jdoc = JSON.stringify({"session":islog, "sid":sid});
{
    $.ajax({
        url:"https://www.apccbackend.gq/returnpasssuper",
        type:"POST",
        contentType:"application/json",
        data:jdoc,
        async: false,
        success: function(msg){
            if(msg == "no session")
            {
                window.location = "http://www.apccproject.ml/superadminlock"
            }
            }
        })
}