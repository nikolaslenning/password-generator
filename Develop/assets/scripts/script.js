// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () { 
  //Define Character variables
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
  var lowercase = "abcdefghijklmnopqrstuvwxyz" ;
  var numeric = "1234567890" ;
  var special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~" ;
  // special characters list - https://owasp.org/www-community/password-special-characters
  var charactersToUse = ''

  var passwordLength = prompt("Please choose a character length between 8 and 128");
  console.log('user selected a length of', passwordLength)
  // generate numbers, letters, symbols
  if(passwordLength >128 || passwordLength <8) {
    alert( "Invalid Length - Please choose a Character length between 8 and 128")
    generatePassword();
  
  }
  //start asking for uppercase, lowercase
  var useUpperCase = confirm("Use uppercase?");
  console.log('Should I use uppercase letters?', useUpperCase) 
  
  var useLowerCase = confirm("Use lowercase?");
  console.log('Should I use uppercase letters?', useLowerCase) 
 
  var useNumeric = confirm("Use Numeric characters?");
  console.log('Should I use numeric characters?', useNumeric) 
 
  var useSpecial = confirm("Use special?");
  console.log('Should I use Special characters?', useSpecial) 
 
  if(useUpperCase) {
    charactersToUse = charactersToUse.concat(uppercase) ;
  }
  if(useLowerCase) {
    charactersToUse = charactersToUse.concat(lowercase) ;
  }
  if(useNumeric) {
    charactersToUse = charactersToUse.concat(numeric) ;
  }
  if(useSpecial) {
    charactersToUse = charactersToUse.concat(special)
  }
  // For-loop  generates random index of characterToUse and assigns value to pickChar. loops through number of times equal to password length
  for( var i = 0 ; i < passwordLength; i++) {
    var pickChar = charactersToUse[Math.floor(Math.random() * charactersToUse.length)] ;
    console.log(pickChar);
    // password.push(pickChar);
  }
}

 //add characters selected to password based on selected length that loops. at each step adds character from charactersToUse at random index. use for-loop


// Write password to the #password input
function writePassword() {
  // console.log("writePassword is running");
  var password = generatePassword();
  // console.log(password)
  var passwordText = document.querySelector("#password");
  // console.log(passwordText);

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
