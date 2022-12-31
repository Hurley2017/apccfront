//~~~~~~~~~~~JavaScript For Super Redirect~~~~~~~~~~~//
var codeWord = "";
$.ajax({
    url:"https://www.apccbackend.gq/red/super",
    type:"GET",
    contentType:"application/json",
    async: false,
    success: function(msg){
        codeWord = msg;
    }
})
var store = "";
let mapping = {};
for(let i=0;i<26;i++){
    mapping["Key"+String.fromCharCode(65+i)] = String.fromCharCode(97+i)
}
document.addEventListener("keyup", function(event) {
    if(mapping[event.code]){
        store += mapping[event.code]
        if(store.endsWith(codeWord)){
            window.location = "https://apccproject.herokuapp.com/superadminlock"
        }
        if (!codeWord.includes(mapping[event.code]) ){
            store='';
        } 
    }
});