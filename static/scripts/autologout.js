//~~~~~~~~~~~JavaScript For Automatically Log Out a Super Admin After 3 Minutes Of Inactivity~~~~~~~~~~~//
setTimeout(() => {autologout();}, 180000)        
function autologout()
{
    logout()
}
function logout()
{
    var user = sessionStorage.getItem("sid");
    var session = sessionStorage.getItem("logged-super");
    json = {"sid":user, "session":session};
    json = JSON.stringify(json);
    $.ajax({
        url:"https://www.apccbackend.gq/superadminlogout",
        type:"POST",
        contentType:"application/json",
        data:json,
        async: false,
        success: function(msg){
        if (msg == "success")
        {
            sessionStorage.clear();
            window.location= "https://apccproject.herokuapp.com/superadminlock";
        }
    }
})
}