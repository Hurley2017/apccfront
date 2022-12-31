//~~~~~~~~~~~JavaScript For Checking Admin Session~~~~~~~~~~~//
var islog = sessionStorage.getItem("logged");
var aid = sessionStorage.getItem("aid");
var jdoc = JSON.stringify({"session":islog, "aid":aid});
{
    $.ajax({
        url:"https://www.apccbackend.gq/returnpass",
        type:"POST",
        contentType:"application/json",
        data:jdoc,
        async: false,
        success: function(msg){
            if(msg == "success")
            {
                window.location = "https://apccproject.herokuapp.com/admin"
            }
            }
        })
}