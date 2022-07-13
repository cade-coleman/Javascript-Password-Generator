//Character arrays
var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacterArray = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '/', ':', ';', "'", '"', '<', '>', ',', '.', '?'];
var minCharacters = 8;
var maxCharacters = 128;


var newPassword = [];
var newArray = [];

const pass = $('textarea');


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


// Generates password
function generatePassword(){

  // Password length prompt
  var pwdLength = window.prompt ("How long would you like your password to be?  " + minCharacters + " through "+ maxCharacters,);{
 if (pwdLength > minCharacters && pwdLength < maxCharacters) {
      console.log(pwdLength);
      
  }
  else{
    window.alert("Length is invalid, please try again.");
    generatePassword();
  } 

    
    //  Prompt question windoes
    
  var uppers = window.confirm("Would you like to include uppercase varters?  click 'Okay' for yes or 'Cancel' for no");  
  var lowers = window.confirm("Would you like to include lowercase varters?  click 'Okay' for yes or 'Cancel' for no");
  var symbols = window.confirm("would you like to include symbols?  click 'Okay' for yes or 'Cancel' for no");
  var numbers = window.confirm("Would you like to include Numbers?  click 'Okay' for yes or 'Cancel' for no");
  
  // data validation

  if(uppers){
      newArray = newArray.concat(upperCase);
     
      }if(lowers){
      newArray = newArray.concat(lowerCase);
    
      }if(numbers){
      newArray = newArray.concat(numberArray);
    
   }if(symbols){
    newArray = newArray.concat(specialCharacterArray);
   
  };
  console.log(newArray);

  };
  
  for(var i = 0; i < pwdLength; i++){
    var random = Math.floor(Math.random() *newArray.length);
    newPassword.push(newArray[random]);
    
  }
return newPassword.join('');
}

