var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '?', '/', '>', '<'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ];
var charSets = [];

var generateBtn = document.querySelector("#generate");

function generatePrompt() {
  charSets = [];
  if (confirm("Include special characters?")) {
    charSets = charSets.concat(specialCharArr);
  }
  
  if (confirm("Include lowercase characters?")) {
    charSets = charSets.concat(lowerCaseArr);
  }

  if (confirm("Include uppercase characters?")) {
    charSets = charSets.concat(upperCaseArr);
  }

  if (confirm("Include numbers?")) {
    charSets = charSets.concat(numberArr);
  }
}

function randomizeChar(passwordLength) {
  retVal = ""
  for (var i = 0; i < passwordLength; i++) {
    retVal += charSets[Math.floor(Math.random() * charSets.length)]
  }
  return retVal;
}

function generatePassword() {
  var passwordLength = window.prompt("How many characters do you want the password to be? (8 - 128 characters")
  if (passwordLength >= 8 && passwordLength <= 128) {
    generatePrompt(); 
    randomizeChar(passwordLength);
  }
  else {
    alert("Character length has to be a number between 8 and 28 digits.");
  }
  return retVal;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
