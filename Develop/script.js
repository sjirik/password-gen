// Assignment Code
var generateBtn = document.querySelector("#generate");
var button = document.querySelector(".btn")
var lowerC = "abcdefghijklmnopqrstuvwxyz"
var upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberC = "0123456789"
var specialC = "!#$%&()*+,‑"

// Write password to the #password input
function writePassword() {
var password = [];
var passwordC = [];
var passwordF = [];
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
  var lowA = lowerC.split("");
  passwordC = passwordC.concat(lowA);
  var ranLowC = getPass(lowA);
  passwordF.push(ranLowC);
}

var upperCSelect = confirm("Would you like to use uppercase characters?")

if (upperCSelect) {
  var upA = upperC.split("");
  passwordC = passwordC.concat(upA);
  var ranUpC = getPass(upA);
  passwordF.push(ranUpC);
}

var numberCSelect = confirm("Would you like to use numbers?")

if (numberCSelect) {
  var numA = numberC.split("");
  passwordC = passwordC.concat(numA);
  var ranNumC = getPass(numA);
  passwordF.push(ranNumC);
}

var specialCSelect = confirm("Would you like to use special characters?")

if (specialCSelect) {
  var specA = specialC.split("");
  passwordC = passwordC.concat(specA);
  var ranSpecC = getPass(specA);
  passwordF.push(ranSpecC);
}

console.log(passwordC)

console.log(passwordF)

for (var i = 0; i < firstClick; i++) {
  var character = getPass(passwordC);
  password.push(character);
};  
for (var i = 0; i < passwordF.length; i++) {
  password[i] = passwordF[i]
};
var passwordFinal = password.join('');
console.log(passwordFinal);
document.getElementById("password").value = passwordFinal
}

function getPass(array) {
  var index = Math.floor(Math.random() * array.length);
  var element = array[index];
  return element;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);