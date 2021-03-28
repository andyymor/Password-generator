// Assignment Code
var generateBtn = document.querySelector("#generate");
var newPassword = prompt(" How many characters would you like your password to contain?"); 
var specialWords = prompt(" Click Ok to confirm including special characters") ;
var numbers = prompt(" Click Ok to confirm including numeric characters");
var lowercase = prompt(" Click Ok to confirm including lowercase characters");
var uppercase = prompt(" Click Ok to confirm including uppercase characters")


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
for (let i = 0; i < characterAmount; i++) {
  [Math.floor(Math.random() * characterAmount)]
  passwordCharacters.push(characters)
}
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
