/* 
Lost number in sequence

An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
Example:
The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.
Note: N may be 1 or less (in the latter case, the first array will be []).

console.log(lostNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
console.log(lostNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
console.log(lostNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

https://www.codewars.com/kata/595aa94353e43a8746000120
*/

const lostNumber = (starting, mixed) => {
    // add up the two arrays and subtract the mixed from the starting
    const sumArr = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
    return sumArr(starting) - sumArr(mixed);
};

console.log(lostNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]), 2, "Deletion");
console.log(
    lostNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]),
    5,
    "Deletion"
);
console.log(
    lostNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]),
    0,
    "No deletion"
);

const lostNumber2 = (starting, mixed) => {
    // filter starting by !mixed.includes(value)[0] || 0
    return starting.filter((value) => !mixed.includes(value))[0] || 0;
};

console.log(lostNumber2([1, 2, 3, 4, 5], [3, 4, 1, 5]), 2, "Deletion");
console.log(
    lostNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]),
    5,
    "Deletion"
);
console.log(
    lostNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]),
    0,
    "No deletion"
);

const lostNumber3 = (starting, mixed) => {
    // brute force: sort the mixed array
    // cycle over starting
    // if starting[i] !== mixed[i], return starting[i]
    const mixedSort = mixed.sort((a, b) => a - b);
    for (let i = 0; i < starting.length; i++) {
        if (starting[i] !== mixedSort[i]) {
            return starting[i];
        }
    }
    return 0;
};

console.log(lostNumber3([1, 2, 3, 4, 5], [3, 4, 1, 5]), 2, "Deletion");
console.log(
    lostNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]),
    5,
    "Deletion"
);
console.log(
    lostNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]),
    0,
    "No deletion"
);
