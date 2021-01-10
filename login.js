$(document).ready(function(){
    $('#login').submit(function (e){
        e.preventDefault();
        if (sessionStorage.getItem("logIn") == "true"){
        alert("You have logged in!");
        }
        else{
            let loginusername = $('#loginusername').val();
            let loginpassword = $('#loginpassword').val();
            let status = false;
            Object.keys(localStorage).forEach((key) =>{
                let member = JSON.parse(localStorage.getItem(key));
                if (loginusername == member.username && loginpassword == member.password){
                    status = true;
                    sessionStorage.setItem("logIn", true);
                    let user = member;
                    sessionStorage.setItem("currentuser", JSON.stringfy(user))
                    alert("Login is successful!");
                }
            });
            if(status == false){
                alert("Login is unsuccessful, try again")
            };
        };
        
    });
});

function Member(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
    this.datejoin = Date.now;
}
function displayMember(){
    let memberInfo = "";
    if(localStorage.getItem(memberInfo)){
        memberInfo += `<tr><td>${member.username}</td><td>${member.email}</td><td>${member.datejoin}</td></tr>`;
        $('#member-info').html(memberInfo);
    }
    else{
        $('#member-info').html('Not a member at the moment');
    }
    

}