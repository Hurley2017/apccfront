//~~~~~~~~~~~JavaScript For Getting User Information And Microservices~~~~~~~~~~~//
var ph_num = sessionStorage.getItem("ph_num");
var session = sessionStorage.getItem("logged-user");
json = {"ph_num":ph_num, "session":session};
json = JSON.stringify(json);
$.ajax({
    url:"https://www.apccbackend.gq/userinfo",
    type:"POST",
    contentType:"application/json",
    data:json,
    async: false,
    success: function(msg){
    document.getElementById("msg").innerHTML = msg;
}
})
function logout()
{
    var ph_num = sessionStorage.getItem("ph_num");
    var session = sessionStorage.getItem("logged-user");
    json = {"ph_num":ph_num, "session":session};
    json = JSON.stringify(json);
    $.ajax({
        url:"https://www.apccbackend.gq/userlogout",
        type:"POST",
        contentType:"application/json",
        data:json,
        async: false,
        success: function(msg){
        if (msg == "success")
        {
            sessionStorage.clear();
            window.location= "https://apccproject.herokuapp.com/userlock";
        }
    }
})
}
function login()
{
    sessionStorage.clear();
    window.location= "https://apccproject.herokuapp.com/userlock";
}