/* 
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. 
Return your answer as a number. 

e.g.,
(sumMix([9, 3, '7', '3']), 22); 
(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

https://www.codewars.com/kata/57eaeb9578748ff92a000009
*/

const sumMix = arr => {
    // loop over the array
    return arr.reduce((a, c) => a + +c, 0)
    // convert everything into a number
    // add it all up
}

console.log(sumMix([9, 3, '7', '3']), 22)
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)

const sumMix2 = arr => {
    let sum = 0
    for (const num of arr) {
        sum += Number(num)
    }
    return sum;
}

console.log(sumMix2([9, 3, '7', '3']), 22)
console.log(sumMix2(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
console.log(sumMix2(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)