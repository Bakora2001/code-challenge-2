//This is a function called arrGenerator that takes num1 and num2 as it's input
function arrGenerator(num1,num2) {
    let arr = [];
    for(let a = num1; a <= num2; a++){ //This is a loop that iterates over a range of the values given
        arr.push(a);
    }
    return arr;
}
console.log(arrGenerator(4,7));
console.log(arrGenerator(-4,7));