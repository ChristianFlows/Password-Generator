// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "&", "*", "?", "-", "+", "=", ".", "/", "\\", ":", ";", "<", ">", "[", "]", "^", "_", "{", "}", "~"];

var confirmed = [];
var results = [];

function generatePassword() {

    // input for pwLength
    var pwLength = prompt("How long would you like your password to be? (8-128 characters)");

    while (pwLength <= 7 || pwLength >= 129) {
        alert("Oh no! Invalid length! The password length should be 8-128 characters.");
        return generatePassword();
    }   // if the pwlength is valid continue with confirming
    if (pwLength >= 8 && pwLength <= 128) {
        alert(pwLength + ' characters will be generated.')
        var lowerConfirm = confirm("Would you like your password to contain lowercase letters?");
    }
    if (lowerConfirm === true) {
        alert("YES! Lowercase letters!");
        confirmed = confirmed.concat(lowercase);
        var upperConfirm = confirm("Would you like your password to contain uppercase letters?");
    }
    if (upperConfirm === true) {
        alert("Sounds great, uppercase letters will be included!");
        confirmed = confirmed.concat(uppercase);
        var numberConfirm = confirm("Would you like your password to contain numbers?");
    }
    if (numberConfirm === true) {
        alert("Numbers are gonna be included in your password!");
        confirmed = confirmed.concat(number);

        var specialConfirm = confirm("Would you like your password to contain special characters?");
    }
    if (specialConfirm === true) {
        alert("Special characters incoming!");
        confirmed = confirmed.concat(special);
    }

    // if every confirm returns false
    if (lowerConfirm === false && upperConfirm === false && numberConfirm === false && specialConfirm === false) {
        alert("You must select at least one character type for your password to be generated.");
        return;
    }

    // randomize characters from confirmed array
    for (var i = 0; i < pwLength; i++) {
    var randomize = confirmed[Math.floor(Math.random() * confirmed.length)];
    results.push(randomize);
    }

    return results.join('');
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);