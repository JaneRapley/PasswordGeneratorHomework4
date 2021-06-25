// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphaCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "&", "^", "(", ")", "%", "%", "#"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

function generatePassword() {
  var options = getOptions()

  var result = [];
  var possibleCharacters = [];
  var garCharacters = [];

  if (options.hasLowercase) {
    possibleCharacters = possibleCharacters.concat(alphaLower)
    garCharacters.push(getRandom(alphaLower))
  }

  if (options.hasUppercase) {
    possibleCharacters = possibleCharacters.concat(alphaCap)
    garCharacters.push(getRandom(alphaCap))
  }

  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(number)
    garCharacters.push(getRandom(number))
  }

  if (options.hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
    garCharacters.push(getRandom(specialCharacters))
  }

}

function getRandom(arr) {
  var ranIndex = Math.floor(Math.random() * arr.length)
  var ranElement = arr[ranIndex]

  return ranElement
}


function getOptions() {
  var length = parseInt(prompt("How many characters would you like?"));

  if (isNaN(length) === true) {
    alert("Please enter a number")
    return
  }

  if (length < 8 || length > 128) {
    alert("Password length must be between 8-128 characters")
    return
  }

  var hasUppercase = confirm("Do you want uppercase characters?");
  var hasLowercase = confirm("Do you want lowercase characters?");
  var hasNumbers = confirm("Do you want numbers?");
  var hasSpecial = confirm("Do you want special characters?");

  if (
    hasUppercase === false &&
    hasLowercase === false &&
    hasNumbers === false &&
    hasSpecial === false
  ) {
    alert("You must select at least one option before continuing")
    return
  }

  var passwordOptions = {
    length: length,
    hasUppercase: hasUppercase,
    hasLowercase: hasLowercase,
    hasNumbers: hasNumbers,
    hasSpecial: hasSpecial,
  }

  return passwordOptions
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
