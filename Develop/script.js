// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercase = ['a','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numeric = ['1','2','3','4','5','6','7','8','9']
var special = ['!','@','#','$','%','^','&','*','~','+','-','?','>','<']
// error
function error(){
  window.alert("PLease enter a value between 8 or 128")
}
function generatePassword(){
  // gets the password length from user.
  let pass_length = window.prompt("How long would you like your password?");
  while(true){
    if (pass_length > 7 && pass_length < 129){
      // Asking for types of character in generated .
      let lCaseConfirm = window.confirm('Do you want lower case?');
      let uCaseConfirm = window.confirm('Do you want upper case?');
      let numConfirm = window.confirm('Do you want numeric characters?');
      let spConfirm = window.confirm('Do you want special characters?');
      let finalChoice = [];
      // checking what were confirmed.
      if(lCaseConfirm) {
        finalChoice.push(lowercase);
      } 
      if(uCaseConfirm) {
        finalChoice.push(upperCase);
      }
      if(numConfirm){
        finalChoice.push(numeric);
      }
      if(spConfirm){
        finalChoice.push(special)
      }
      let newList = [].concat(...finalChoice);
      return [newList, pass_length];
    } else {
      error();
      return;
    }
  } 
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var newPassword = "";
  var listOfCharacters = password[0];
  console.log(listOfCharacters);

  var passwordText = document.querySelector("#password");
  for (i = 0; i < password[1]; i++) {
    // generated an index for the created chracter list.
    let randomNum = Math.floor(Math.random()* password[0].length);
    newPassword = newPassword.concat(listOfCharacters[randomNum]);
  }
  passwordText.value = newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

