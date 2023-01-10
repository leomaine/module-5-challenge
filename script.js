// Generate a password when the button is clicked
// Present a series of prompts for password criteria
// Length of password at least 10 characters but no more than 64.
// Character types
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)



var password=document.getElementById("password");

 function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
 }
