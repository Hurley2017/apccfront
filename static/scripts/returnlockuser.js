//~~~~~~~~~~~JavaScript For Checking User Session~~~~~~~~~~~//
var islog = sessionStorage.getItem("logged-user");
var ph_num = sessionStorage.getItem("ph_num");
var jdoc = JSON.stringify({"session":islog, "ph_num":ph_num});
{
    $.ajax({
        url:"https://www.apccbackend.gq/returnpassuser",
        type:"POST",
        contentType:"application/json",
        data:jdoc,
        async: false,
        success: function(msg){ 
            if(msg == "success")
            {
                window.location = "https://apccproject.herokuapp.com/user"
            }
            }
        })
}