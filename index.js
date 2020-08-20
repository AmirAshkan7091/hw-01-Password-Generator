let generateBtn = document.querySelector("#generate");

let arrayChar = []

let specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "-", "_"]
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",	"m", "n",	"o",	"p", "q",	"r",	"s",	"t",	"u",	"v",	"w",	"x",	"y",	"z"]
let upperChars = ["A", "B", "C", "D", "E", "F", "G",	"H",	"I",	"J",	"K",	"L",	"M",	"N",	"O",	"P",	"Q",	"R",	"S",	"T",	"U",	"V",	"W",	"X",	"Y",	"Z"] 
let userLengh;

function promptUser() {
  let pwLeng = Number(prompt("How many characters do you want in your password?"))
  if (pwLeng >= 8 && pwLeng <= 128) {
    userLengh=pwLeng
  }
  else{
    alert("Please try again and select a character length between 8-128 characters.")
    return;
  }
let specialConf = confirm("Would you like to include special characters in your password?")
  if (specialConf === true) {
    arrayChar.push(specialChars)
  } 
let numberConf = confirm("Would you like to include numbers in your password?")
  if (numberConf === true) {
    arrayChar.push(numbers)
  }
let lowerCaseConf = confirm("Would you like to include lower case in your password?")
  if (lowerCaseConf === true) {
    arrayChar.push(lowerChars)
  }
let upperCaseConf = confirm("Would you like to include upper case in your password?")
  if (upperCaseConf === true) {
    arrayChar.push(upperChars)
  }
  else{
    alert("You can not have a stong password.")
  }
}

function generatePassword() {
  let result = ""
  promptUser();
  for (let i = 0; i < userLengh; i++) {
   
    let one = Math.floor((Math.random() * arrayChar.length -1) +1)
    let two = Math.floor((Math.random() * arrayChar[one].length -1) +1)
    result+=arrayChar[one][two]
  }
    
  return result
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);