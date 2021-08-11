//4 arrays of available character options for password lower, cap, number, special
var alphaCapCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":"];

//function to ask user for necessary password requirements (prompts)
function getOptions() {
  var length = parseInt(prompt("How many characters would you like in your password?"));

  //14-27 conditional statements in regards to password length. Must be a number, < 8, & > 128. 
  if (isNaN(length) === true) {
    alert("Password length must be provided to move forward!");
    return;
  }

  if (length < 8) {
    alert("Minimum password length is 8. Please re-enter desired number.");
    return;
  }

  if (length > 128) {
    alert("Maximum password length is 128. Please re-enter desire number.");
    return;
  }

  //30-36 Variables to store boolean regarding additional password options special, cap, lower, and number.
  var hasAlphaCapCharacters = confirm("Click OK if you would like capital letters.");

  var hasAlphaLowerCharacters = confirm("Click OK if you would like lowercase letters.");

  var hasNumberCharacters = confirm("Click OK if you would like numbers.");

  var hasSpecialCharacters = confirm("Click OK if you would like special characters.")

  //Conditional statement to ensure user includes at least one type of character.
  if (
    hasAlphaCapCharacters === false &&
    hasAlphaLowerCharacters === false &&
    hasNumberCharacters === false &&
    hasSpecialCharacters === false
  ) {
    alert("Must clikc OK for at least one character option.");
    return;
  }

  //Object to store user input.
  var passwordOptions = {
    length: length,
    hasAlphaCapCharacters: hasAlphaCapCharacters,
    hasAlphaLowerCharacters: hasAlphaLowerCharacters,
    hasNumberCharacters: hasNumberCharacters,
    hasSpecialCharacters: hasSpecialCharacters
  };

  return passwordOptions;
}

//Function to pick random characters from provided arrays
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

//Function to generate password w/ provided answers
function generatePassword() {
  var options = getOptions();
  var result = [];

  var possCharacters = [];

  var commitedCharacters = [];

  //conditional statments to add arrays of capitals, lowercase, number, and special characters depending on user input. 
  //Followed by PUSH random characters to commitedCharacters
  if (options.hasAlphaCapCharacters) {
    possCharacters = possCharacters.concat(alphaCapCharacters);
    commitedCharacters.push(getRandom(alphaCapCharacters));
  }

  if (options.hasAlphaLowerCharacters) {
    possCharacters = possCharacters.concat(alphaLowerCharacters);
    commitedCharacters.push(getRandom(alphaLowerCharacters));
  }

  if (options.hasNumberCharacters) {
    possCharacters = possCharacters.concat(numberCharacters);
    commitedCharacters.push(getRandom(numberCharacters));
  }

  if (options.hasSpecialCharacters) {
    possCharacters = possCharacters.concat(specialCharacters);
    commitedCharacters.push(getRandom(specialCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possCharacters = getRandom(possCharacters);
    result.push(possCharacters);
  }

  for (var i = 0; i < commitedCharacters.length; i++) {
    result[i] = commitedCharacters[i];
  }

  return result.join('');
}


function createPassword() {
  var password = generatePassword();
  console.log(password)
  var passwordInput = document.querySelector("#password");
  passwordInput.value = password; 
}

var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);






