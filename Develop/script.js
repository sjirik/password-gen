// Assignment Code
var generateBtn = document.querySelector("#generate");
var button = document.querySelector(".btn")
var lowerC = "abcdefghijklmnopqrstuvwxyz"
var upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberC = "0123456789"
var specialC = "!#$%&()*+,‑"

// Write password to the #password input
function writePassword() {
var password = "";
var passwordChar = "";
firstClick = prompt("Please enter the length of your password (Ex. at least 8 characters, no more than 128 characters)");
firstClick = parseInt(firstClick);

if (firstClick < 8) {
  alert ("Error: too few characters selected");
  return ""
}
if (firstClick > 128) {
  alert ("Error: too many characters selected");
  return ""
}


var lowerCSelect = confirm("Would you like to use lowercase characters?")

if (lowerCSelect) {
passwordChar += lowerC
}





}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
