//~~~~~~~~~~~JavaScript For Showing Time Table~~~~~~~~~~~//
$.ajax({
        url:"https://www.apccbackend.gq/time_table",
        type:"GET",
        contentType:"application/json",
        async: false,
        success: function(msg){
            document.getElementById("msg").innerHTML = msg;
        }
    })
