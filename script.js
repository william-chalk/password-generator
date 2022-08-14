// Assignment code here
function generatePassword(){
  var passwordLimit = window.prompt("Please choose the amount of characters you would like your password to be 8-128.");

  if(passwordLimit < 8 || passwordLimit >128){
    window.alert("Please choose a valid number between 8-128");
    return
  }

  var numConfirm = window.confirm("Would you like numbers in your password?");
  var specialConfirm = window.confirm("Would you like special characters in your password?");
  var lowercaseConfirm = window.confirm("Would you like lowercase letters in your password?");
  var uppercaseConfirm = window.confirm("Would you like uppercase letters in your password?");
//diffrent password criteria for the user
var alphabetChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = ["!","'","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","_","~"];
var randNum = ["0","1","2","3","4","5","6","7","8","9"];
var upperChar = [];

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
