// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z']
  var num = ['0','1','2','3','4','5','6','7','8','9']
  var sym = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+']
  var password = ''

  var pwlength = parseInt(prompt('How long do you want the password length to be?'))
  var upperCaseChar = confirm('Would you like a uppercase letter?:')
  var lowerCaseChar = confirm('Would you like a lowercase letter?:')
  var numChar = confirm('Would you like a number?:')
  var symChar = confirm('Would you like a symbol character?:')

  if (upperCaseChar)
    password += upperCase
  if (lowerCaseChar)
    password += lowerCase
  if (numChar)
    password += num
  if (symChar)
    password += sym

for (var i=0; i < pwlength; i++) {
  var char = password.charAt(Math.floor(Math.random() * password.length))
}

}
