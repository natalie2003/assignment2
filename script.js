window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// $(document).ready(function){
//   var 
// }
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function login(){
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}

function Member(username, email, password){
  this.username = username;
  this.email = email;
  this.password = password;
}

//base and store info from input

let memberList = JSON.parse()