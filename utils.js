function product(num1, num2) {
    console.log(num1 * num2); 
}

product(process.argv[2], process.argv[3]);

function divide(num1, num2) {
    console.log(num1/num2); 
}

divide(process.argv[2], process.argv[3])

function power(num1, num2) {
    console.log(num1**num2); 
}

power(process.argv[2], process.argv[3])

function subtract(num1, num2) {
    console.log(num1-num2); 
}

subtract(process.argv[2], process.argv[3])