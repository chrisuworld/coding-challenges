/* 
Factorial

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,
5! = 5 * 4 * 3 * 2 * 1 = 120.
The value of 0! is 1.

Your task
You have to create the function factorial that receives n and returns n!. You have to use recursion.

https://www.codewars.com/kata/5694cb0ec554589633000036
*/

const factorial = (n) => {
    if (n < 2) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(2), 2);
console.log(factorial(3), 6);
console.log(factorial(4), 24);
console.log(factorial(5), 120);

// iterative solution
const factorial2 = (n) => {
    // 0! and 1! === 1
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};

console.log(factorial2(0), 1);
console.log(factorial2(1), 1);
console.log(factorial2(2), 2);
console.log(factorial2(3), 6);
console.log(factorial2(4), 24);
console.log(factorial2(5), 120);

// recursive with memoization
const memo = {};
const factorial3 = (n) => {
    if (n < 2) {
        return 1;
    } else if (memo[n]) {
        return memo[n];
    } else {
        let result = n * factorial3(n - 1);
        memo[n] = result;
        return result;
    }
};

console.log(factorial3(0), 1);
console.log(factorial3(1), 1);
console.log(factorial3(2), 2);
console.log(factorial3(3), 6);
console.log(factorial3(4), 24);
console.log(factorial3(5), 120);
