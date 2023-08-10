// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var buttonOne = prompt("Please enter the length of your password (Ex. at least 8 characters, no more than 128 characters)")

  if (!buttonOne) {
    return;
  }

  if (buttonOne >= 8 && buttonOne <= 128){
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
