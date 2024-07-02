function signup(){
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    if (!user || !password) {
        alert("Please fill in all the fields.");
    } 
    else {
        alert("You have been Signed Up!");
    }
}

function register() {
    var name = document.getElementById("name").value;
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (!name || !user || !email || !password) {
        alert("Please fill in all the fields.");
    } 
    else {
        alert("You have been registered!");
    }
}

function purchase(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var card = document.getElementById("card").value;
    var expiry = document.getElementById("expiry").value;
    var cvv = document.getElementById("cvv").value;
    if (!name || !email || !card || !expiry || !cvv) {
        alert("Please fill in all the fields.");
    } 
    else {
        alert("You Game has been Successfully Purshased!");
    }
}