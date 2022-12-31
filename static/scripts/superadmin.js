//~~~~~~~~~~~JavaScript For Fetching Super Admin Information And Microservices~~~~~~~~~~~//
var user = sessionStorage.getItem("sid");
var session = sessionStorage.getItem("logged-super");
json = {"sid":user, "session":session};
json = JSON.stringify(json);
    $.ajax({
        url:"https://www.apccbackend.gq/superadmininfo",
        type:"POST",
        contentType:"application/json",
        data:json,
        async: false,
        success: function(msg){
        document.getElementById("msg").innerHTML = msg;
        choose(msg);
    }
})
function choose(i)
{
    if(i == "Breached, Database Compromised!!!")
    {
        logout();
    }
}
function logout()
{
    sessionStorage.clear();
    window.location= "https://apccproject.herokuapp.com/superadminlock";
 }