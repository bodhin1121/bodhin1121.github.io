// let body = document.querySelector('body');
// body.addEventListener('click',giveAlert())

// function giveAlert(){
//     alert("this is an alert");
// }

firstname = prompt("Enter your first name");
// document.getElementById('firstname').innerHTML = first;

lastname = prompt("Enter your last name");

document.getElementById('name').innerHTML = "Your rapper name is " + firstname.substring(0,1) + lastname.substring(0,2);
