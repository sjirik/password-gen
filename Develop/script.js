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
var passwordC = "";
firstClick = prompt("Please enter the length of your password (Ex. at least 8 characters, no more than 128 characters)");

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
passwordC += lowerC
}

var upperCSelect = confirm("Would you like to use uppercase characters?")

if (upperCSelect) {
passwordC += upperC
}

var numberCSelect = confirm("Would you like to use numbers?")

if (numberCSelect) {
passwordC += numberC
}

var specialCSelect = confirm("Would you like to use special characters?")

if (specialCSelect) {
passwordC += specialC
}

console.log(passwordC)

console.log(passwordC.length)

for (var i = 0; i < firstClick; i++){
  password = passwordC[Math.floor(Math.random() * passwordC.length)]
}

document.getElementById("password").value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
