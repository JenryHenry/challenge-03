// Assignment code here
var numbers = "1234567890";
var letters = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "[!@#$%^&*()<>,./?`~[]{}'=+-\"_|\\";
var length = 0;

function lengthPr() {
  length = prompt(
    "How many characters do you want your password to be? Enter a value between 8 and 128."
  );
  console.log(length);
  if (length < 8 || length > 128) {
    alert("Please enter a value between 8 and 128 >:(");
    lengthPr(
      "How many characters do you want your password to be? Enter a value between 8 and 128."
    );
  }
}

// Get references to the #generate element
// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var lowPr = confirm(
    "Do you want to include lowercase letters in your password?"
  );
  // } else {
  //   // Creates element based on tag entered by user
  //   var tag = document.createElement(tagName);

  //   // Adds text content to created tag
  //   tag.textContent = "This was made via prompts. It's a " + tagName + ".";

  //   // Appends tag as child of document body
  //   document.body.appendChild(tag);
  // }
  var capPr = confirm("Do you want to include uppercase letters?");
  var numPr = confirm("Do you want to include numbers?");
  var spePr = confirm("Do you want to include special characters?");

  lengthPr();
  console.log(length);
  var pw = "";
  // To create the password, I need to take the user input from the confirms to create a group of character types to draw from.
  // I will randomly choose one of these types, then choose a random character from its string.
  // I will then store this in the password variable.
  // Then, I will randomly choose from the remaining character types, then choose a random character from its string.
  // I will then store this character in the password variable.
  // I will repeat this until the character types are depleted.
  // Once depleted, I will repeat the process until the length of the password matches the user's number input.
  return pw;
}
// When I click the button, a series of prompts for password criteria pops up(lowercase, uppercase, numeric, special characters)
//The first prompt will ask if the user wants to use lowercase. Use a prompt variable to ask yes or no for lowercase
//The second prompt will ask if the user wants to use uppercase characters. Use a prompt variable to ask yes or no for uppercase
//The third prompt will ask if the user wants to use numbers. Use a prompt variable to ask yes or no for numbers
//The fourth prompt will ask if the user wants to use special characters. Use a prompt variable to ask yes or no for special characters
//*If the user enters a value other than 'yes' or 'no', will alert "Please enter yes or no"

// A prompt for password length appears after selecting the criteria
// Use a prompt variable to ask how many characters they want their password to be, between and including 8 and 128.
// I can enter a password length where 8 <= length <= 128
// If the user enters a number value outside the range, then will alert them to pick a number between 8 and 128.

// If no character type is selected, will prompt you to choose at least one of them.

// When input is given and confirmed, a password is generated that matches the selected criteria.
// Password generation function will check if each criteria was chosen to be included in the password.
// Password generation function will draw from each array randomly for each sequential password character, and choose each array index item randomly.
// Password generation function will stop once the string length matches the number given by the user for password length.

// When the password is generated, the password is displayed as an alert.

//Need arrays containing all the possible characters for each character type (numbers, letters, special characters)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
