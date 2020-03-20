
var generateBtn = document.querySelector("#generate");

function generatePassword() {


  var passwordCriteria = [
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", ":", ";", "<", ">", ",", ".", "?", "/"],
  ]

  var userCriteria = [];

  var passwordLength = prompt("Please enter any number between 8 and 128 for the password length")
  passwordLength = parseInt(passwordLength)

  if (passwordLength < 8 || passwordLength > 128 ||) {
    alert("Please enter any number between 8 and 128")
    return ("Try again!")
  }
  else

    var charTypes = ["lowercase", "uppercase", "numeric", "special characters"];

  var charTypesConfirms = [];

  for (var i = 0; i < charTypes.length; i++) {
    var charTypesConfirm = confirm("Do you want to include " + charTypes[i] + " in the password?");
    charTypesConfirms.push(charTypesConfirm);
  }

  for (var i = 0; i < charTypesConfirms.length; i++) {
    if (charTypesConfirms[i]) {
      userCriteria.push(passwordCriteria[i])
    }
  }

  if (charTypesConfirms[0] == true || charTypesConfirms[1] == true || charTypesConfirms[2] == true || charTypesConfirms[3] == true) {

    var userPassword = [];

    for (var i = 0; i < passwordLength; i++) {

      var arrayTypeRandomNum = Math.floor(Math.random() * userCriteria.length);

      var charTypeRandomNum = Math.floor(Math.random() * userCriteria[arrayTypeRandomNum].length);

      var char = userCriteria[arrayTypeRandomNum][charTypeRandomNum];

      userPassword.push(char);
    }

    userPassword = userPassword.join("");

    return userPassword;

  } else {
    alert("You must choose at least one character type.");
    return "Try again!";
  }

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
