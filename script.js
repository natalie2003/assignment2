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
// member function
// $(document).ready(function (){
//   displayMember();

//    //form event listener
//   $("#register").submit(function (e){
//     //$("#btn-create").on("click", function (e){
//     e.preventDefault();

//     let username = $('#username').val();
//     let email = $('#email').val();
//     let password = $('#password').val();

//     let isUser = false;

//      //create own error validation
//     Object.keys(localStorage).forEach((key) => {
//       if (username == key){
//         isUser = true;
//         alert("You are alreasy a user. Please login instead")
//       }
//     })
//     let member = new Member(username, email, password);

//      //retrieve items from local storage
//     // if (localStorage.getItem(member)) {
//     //   memberList = JSON.parse(localStorage.getItem('memberList'));
//     // }
//     // memberList.push(member);

//      //set obj into local storage
//     localStorage.setItem(username, JSON.stringify(member));

//      //display
//     displayMember();
//   });
// });
// function Member(username, email, password){
//   this.username = username;
//   this.email = email;
//   this.password = password;
//   this.datejoin = Date.now;
// }
// (function(){
//   var allowSubmit = true;
//   $('#register').submit = function (){
//     if(allowSubmit){
//       allowSubmit = false;
//     }
//     else{
//       return false;
//     }
//   }
// })();

// function displayMember(){
//   let memberInfo = "";

// //   //check whether there's local storage 'memberList'
//   if (localStorage.getItem(memberInfo)) {
//     // let memberList = JSON.parse(localStorage.getItem('memberList'));
//     // if (memberList.length) {
//     for (let member of memberList) {
//       memberInfo += `<tr><td>${member.username}</td><td>${member.email}</td><td>${member.datejoin}</td></tr>`;

//     }
//     $('#member-info').html(memberInfo);
//     } else{
//       $('#member-info').html('Not a member at the moment');
//     }
  
// }

//weather api
fetch('https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=d595843aea7868bd2f1012a6b95947c1')
.then(response => response.json())
.then(data => {
  var nameValue = data['name']
})

