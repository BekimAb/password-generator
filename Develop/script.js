// Assignment code here
var button = document.querySelector("button");
button.addEventListener("click", function(e) {
  // button was clicked
});
const x = document.getElementsByClassName("Btn");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);