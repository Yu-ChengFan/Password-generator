// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercase = ['a','a','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numeric = ['1','2','3','4','5','6','7','8','9']
var special = ['!','@','#','$','%','^','&','*','(',')','~','+','-','?','>','<']

function error(){
  window.alert("PLease enter a value between 8 or 128")
}

function generatePassword(){
  let pass_length = window.prompt("how long");
  while(true){
    if (pass_length > 7 && pass_length < 129){
      let lCaseConfirm = window.confirm('Do you want lower case?');
      let uCaseConfirm = window.confirm('Do you want upper case?');
      let numConfirm = window.confirm('Do you want numeric characters?');
      let spConfirm = window.confirm('Do you want special characters?');
      let finalChoice = [];
      if(lCaseConfirm) {
        finalChoice.concat(lowercase);
      } 
      if(uCaseConfirm) {
        finalChoice.concat(upperCase);
      }
      if(numConfirm){
        finalChoice.concat(numeric);
      }
      if(spConfirm){
        finalChoice.concat(special)
      }
      return finalChoice;
      
    } else {
      error();
      return;
    }
  }
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

