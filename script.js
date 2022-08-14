//Password must be between 8-128 characters
//User can select if password can include lowercase,uppercase,numeric, and/or special characters
//ateleat one character type needs to be selected 

//creates random number
function randomNum(min,max){
  if (!max){
    max = min;
    min = 0
  }

  var randNum = Math.random();
  return Math.floor(min * (1 - randNum) + randNum * max);
}
//chooses random character
function randomChar(list){
  return list[randomNum(0 , list.length)];
}

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

for (var i = 0; i < alphabetChar.length;i++){
  upperChar[i] = alphabetChar[i].toUpperCase();
}
//empty string for user password
var userPassword = "";
//holds user criteria for the password
var userPref = []
//adds user selections to the user criteria list
if(numConfirm === true){
    userPref.push(randNum);
}
if(lowercaseConfirm === true){
  userPref.push(alphabetChar);
}

if(uppercaseConfirm === true){
  userPref.push(upperChar);
}
if(specialConfirm === true){
  userPref.push(specialChar);
}
//tells the user to select atleast one option and retarts the code
if(userPref.length === 0){
  window.alert("Please choose atleast one option, Try again.");
  return;
}
//for loop that adds random user criteria that runs on the password length that the user selected
for (var i = 0; i < passwordLimit; i++){
  var randCriteria = randomChar(userPref);
  var randItem = randomChar(randCriteria);
  userPassword += randItem;
}
console.log(userPassword);
//returns the userpassword for the function
return userPassword;
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
