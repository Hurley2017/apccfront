//~~~~~~~~~~~JavaScript For Resetting Password And Microservices~~~~~~~~~~~//
var f = document.querySelector(".request");
f.addEventListener("click", runapp);
function runapp()
{
    var umail = document.getElementById("umail").value;
    var jdoc = {"umail":umail}
    jdoc = JSON.stringify(jdoc);
    {
        $.ajax({
            url:"https://www.apccbackend.gq/forgototp",
            type:"POST",
            contentType:"application/json",
            data:jdoc,
            async: false,
            success: function(msg){
                document.getElementById("msg").innerHTML = msg;
                if (msg=="OTP sent and only valid for 3 minutes."){
                    document.getElementById("otpbox").innerHTML = '<div class="form-group row"><label for="otp" class="col-md-4 col-form-label text-md-right display-1"><b>OTP</b></label><div class="col-md-6"><input type="text" id="myotp" class="widthinput form-control" name="otp" required></div></div><div class="col-md-6 offset-md-4"><button type="submit" onclick="verify()" class="margin btn btn-success btn-sm mb-2">Submit</button></div>';
                    setTimeout(() => {resetotp();}, 180000);
                }
                }
            })
    }
    
}
function verify()
{
    var umail = document.getElementById("umail").value;
    var myotp = document.getElementById("myotp").value;
    var jdoc = {"myotp": myotp, "umail": umail};
    jdoc = JSON.stringify(jdoc);
    {
        $.ajax({
            url:"https://www.apccbackend.gq/checkotp",
            type:"POST",
            contentType:"application/json",
            data:jdoc,
            async: false,
            success: function(msg){
                document.getElementById("msg").innerHTML = msg;
                if (msg=="OTP matched"){
                    document.getElementById("passbox").innerHTML = '<div class="form-group row"><label for="pass1" class="col-md-4 col-form-label text-md-right display-1"><b>New Password</b></label><div class="col-md-6"><input type="password" id="pass1" class="widthinput form-control" name="pass1" required autofocus></div></div><div class="form-group row"><label for="pass2" class="col-md-4 col-form-label text-md-right display-1"><b>Confirm Password</b></label><div class="col-md-6"><input type="password" id="pass2" class="widthinput form-control" name="pass2" required autofocus></div></div><div class="col-md-6 offset-md-4"><button type="submit" onclick="change()" class="margin btn btn-primary btn-lg mb-2">Change</button></div>';
                }
                }
            })
    }

}
function change()
{
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var umail = document.getElementById("umail").value;
    var doc = {"pass1":pass1,"pass2":pass2, "umail":umail};
    var jdoc = JSON.stringify(doc);
    {
        $.ajax({
            url:"https://www.apccbackend.gq/changepass",
            type:"POST",
            contentType:"application/json",
            data:jdoc,
            async: false,
            success: function(msg){
                document.getElementById("msg").innerHTML = msg;
                if(msg == "password changed.")
                {
                    sessionStorage.clear();
                    window.location= "http://www.apccproject.ml/userlock";
                }
                }
            })
    }
}
function resetotp()
{
    var umail = document.getElementById("umail").value;
    var doc = {"umail":umail}
    var jdoc = JSON.stringify(doc)
    {
        $.ajax({
            url:"https://www.apccbackend.gq/resetotpuser",
            type:"POST",
            contentType:"application/json",
            data:jdoc,
            async: false,
            success: function(msg){
                document.getElementById("msg").innerHTML = msg;
                document.getElementById("passbox").innerHTML = '';
                }
            })
    }
}