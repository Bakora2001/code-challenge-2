//THis is a function called swapLetter that takes string as it's input
function swapLetter(string){
    return string.split('').map(function(letter) {
// If else condition that compares the characters to the UpperCase Letter
        if (letter === letter.toUpperCase()) {
            return letter.toLowerCase();
        } else{
            return letter.toUpperCase();
        }
    }).join(''); //This method joins back the array to a single string
}
let input = 'The Quick Brown Fox';
let output = swapLetter(input);
console.log(output);