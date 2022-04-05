// Assignment code here
var button = document.querySelector("button");
button.addEventListener("click", function(e) {
  // button was clicked
});
const x = document.getElementsByClassName("Btn");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+{}:";
var userChoice = "";
var finalPassword = "";


// Write password to the #password input
function writePassword() {
  var passwordLength = parseInt(prompt("Please choose how many characters you would like for you password. It must be between 8-120."));

  if(passwordLength < 8 || passwordLength > 120){
    alert("Please choose a number between 8-120!");
    return;
  }else {
    var littleLetters = confirm("Would you like lowercase letters in your password?")
    var bigLetters = confirm("Would you like uppercase letters in your password?")
    var nums = confirm("Would you like numbers in your password?")
    var specialChar = confirm("Would you like special characters in your password?")

    if(littleLetters === true){
      userChoice += lowercase   // userChoice + lowercase = userChoice;
    }

    if(bigLetters === true){
      userChoice += uppercase
    }

    if(nums === true){
      userChoice += numbers
    }

    if(specialChar === true){
      userChoice += specialCharacters
    }

    console.log(userChoice)


    for(var i =0; i < passwordLength; i++){

      var randomizer = Math.floor(userChoice.length * Math.random())
     // console.log("randomizer",randomizer)
      finalPassword += userChoice.charAt(randomizer)

      console.log(finalPassword)
    }
  }
  


  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);