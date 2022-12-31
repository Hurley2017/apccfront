//~~~~~~~~~~~JavaScript For Getting Admin Information From DataBase~~~~~~~~~~~//
    var user = sessionStorage.getItem("aid");
    var session = sessionStorage.getItem("logged");
    json = {"aid":user, "session":session};
    json = JSON.stringify(json);
    $.ajax({
        url:"https://www.apccbackend.gq/admininfo",
        type:"POST",
        contentType:"application/json",
        data:json,
        async: false,
        success: function(msg){
        
            document.getElementById("msg").innerHTML = msg;
            choose(msg)
        
    }
})
function logoutactual()
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
        
            choose(msg)
        
    }
})
}
function choose(i)
{
    if(i == "Please Login as an Admin." || i == "unauthorized." || i == "success")
    {
        logout()
    }
}
function logout()
{
        sessionStorage.clear();
        window.location= "https://apccproject.herokuapp.com/adminlock";
}