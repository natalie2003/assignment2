$(document).ready(function(){
    $("#register").submit(function (e){
        //$("#btn-create").on("click", function (e){
        e.preventDefault();
    
        let registerusername = $('#username').val();
        let email = $('#email').val();
        let password = $('#password').val();
    
        let isUser = false;
    
         //create own error validation
        Object.keys(localStorage).forEach((key) => {
          if (registerusername == key){
            isUser = true;
            alert("You are alreasy a user. Please login instead");
          }
        });
    
      if (isUser == false){
          let newuser = new Member(registerusername, email, password);
          localStorage.setItem(registerusername, JSON.stringify(newuser));
          alert("You have successfully registered");
      }
    });
});
    



function Member(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
    this.datejoin = Date.now;
    }