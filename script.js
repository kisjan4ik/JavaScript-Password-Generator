// Assignment Code
var generateBtn = document.querySelector("#generate");

var lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specSymbols = ["~", "`", "!", "#", "$", "%", "^", "&", "*", "+", "=", "-", "[", "]", ";", ",", "/", "{", "}", "|", ":", "<", ">", "?"];

function generatePassword() {


  var array = []

  var numOfChar = parseInt(prompt("How many characters would you like your password to contain?"))

  if (isNaN(numOfChar)) {
    alert("The password length must be provided as a number!");
  }
  else if (numOfChar < 8) {
    alert("Password length must be at least 8 characters!");
  }
  else if (numOfChar > 128) {
    alert("Password length must be less than 129 characters!");
  }
  else {

    var lcYes = confirm("Click OK to confirm including lower case letters");
    if (lcYes == true) {
      array.push(lcLetters)


      var ucYes = confirm("Click OK to confirm including upper case letters");
      if (ucYes == true) {
        array.push(ucLetters)
      }

      var numYes = confirm("Click OK to confirm including numeric charactres");
      if (numYes == true) {
        array.push(numSymbols)
      }

      var specYes = confirm("Click OK to confirm including special charactres");
      if (specYes == true) {
        array.push(specSymbols)
      }
      
    }



    return array.charAt(Math.floor(Math.random() * numOfChar))
  }

}









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// if (lcYes == false && ucYes == false && numYes && false && specYes == false) {
//   alert("You need to choose at leasr one character option")
// }
