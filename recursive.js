// ================== Counting Sheep ==========================
// TODO: 1. Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// input: integer (5)
// expected output: integer: 'Another sheep jumps over the fence'
// base case: integer (0)

function howManySheeps(int) {
    // base case
    if (int === 0) {
        console.log('All sheep jumped over the fence')
        return;
    }
    // general case
    if (int > 0) {
        console.log(`${int}: Another sheep jumped over the fence`)
        howManySheeps(int - 1); // recursive call
    }
}

howManySheeps(5);

//TODO 2. Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

//input: base, exponent; base integer, exponent whole number
//output: base raised to the exponent
//base case: base raised to the 1st power (or itself)

function powerCalculator(base, exp){
  if(exp <= 0){
    return console.log('exponent should be >= 0')
  }

  //base case
  if (exp === 1){
    return base
  }
  //general case
  return base * powerCalculator(base, exp-1)

}

console.log(powerCalculator(4,3));

//TODO 3.Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
// input: abcde
// output: edcba

function reverseString(string) {
    // base case
    if (string.length <= 0) {
        return '';
    }
    if (string.length >= 1) {
        return string[string.length - 1] + reverseString(string.slice(0, -1));
    }
}

console.log(reverseString('cat'))

//TODO 4.Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.


function triangular(n) {
    // base case
    if (n === 1) { // when number reaches 0
        return 1;
    } else {
        return n + triangular(n - 1);
    }
}

console.log(triangular(3))