//~~~~~~~~~~~JavaScript For Automatically Logging Out an Admin After 5 Minutes Of Inactivity~~~~~~~~~~~//
setTimeout(() => {autologout();}, 300000)        
function autologout()
{   
    logout()
}
function logout()
{
    var user = sessionStorage.getItem("aid");
    var session = sessionStorage.getItem("logged");
    json = {"aid":user, "session":session};
    json = JSON.stringify(json);
    $.ajax({
        url:"https://www.apccbackend.gq/adminlogout",
        type:"POST",
        contentType:"application/json",
        data:json,
        async: false,
        success: function(msg){
        if (msg == "success")
        {
            sessionStorage.clear();
            window.location= "http://www.apccproject.ml/adminlock";
        }
    }
})
}