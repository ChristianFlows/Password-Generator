// Assignment code here

// Obj to store selected password arguments
var randomDataObj = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    special: getRandomSpecial
};

// Generate password function
function generatePassword(lower, upper, number, special) {

    // Accept PW Variables
    var pwVars = upper + lower + number + special;
    // Filter PW Variables
    //Array to sort here
    // Loop generator function to input each type

    // Password generated

}

// Random lowercase, uppercase, numeric, &&|| special character Generation

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
    var special = "\\!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"";
    return special[Math.floor(Math.random() * special.length)];
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
