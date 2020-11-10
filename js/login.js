
var api = "http://localhost:25565/";

function SubmitL() {

    var username = document.getElementById("Login-un");
    var password = document.getElementById("Login-pw");
    var req = new XMLHttpRequest();
    console.log(username.value);
    var body = {"username" : username.value,
               "password" : password.value
    };
    req.open("POST", api + "login");
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function(){
        if(req.readyState == 4){
            if(req.status == 200){
                alert(req.responseText);
            }
        }
    };
    req.send(JSON.stringify(body));
    
    
}


function SubmitR(){
    var username = document.getElementById("Reg-un");
    var password = document.getElementById("Reg-pw");
    var email = document.getElementById("Reg-em");

    var req = new XMLHttpRequest();
    console.log(username.value);
    var body = {"username" : username.value,
               "password" : password.value,
               "email" : email.value
    };
    req.open("POST", api + "register");
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function(){
        if(req.readyState == 4){
            if(req.status == 200){
                alert(req.responseText);
            }
        }
    };
    req.send(JSON.stringify(body));

    RegAlert(req.responseText);
}

function LoginAlert(res){
    if(res == "Success"){

    }
    else if(res == "Failure"){
        alert("Check your username and password");
    }else{
        alert("No response from the server");
    }
}

function PostLoginRedir(){


}


function RegAlert(res){
    if(res == "Success"){

    }
    else if(res == "Failure"){
        alert("Check your username and password");
    }
}