var characterLength = 8 < 12;
var choiceArr = [];

var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '?', '/', '>', '<'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ];
var charSets = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePrompt() {
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

function generatePassword() {
  console.log("");
  var passwordLength = prompt("How many characters do you want the password to be? (8 - 128 characters")
  
  if (passwordLength >= 8 && passwordLength <= 128) {
    generatePrompt(); 
  }
  else {
    alert("Character length has to be a number between 8 and 28 digits.");
  }

  // 1. Prompt the user for the password criteria.
  //      a. password length between 8 < 128.
  //      b. lowercase, uppercase, special characters.
  // 2. Validate the input. 
  // 3. Generate password based on criteria.


  // 4. Display generated password on the page.
  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
