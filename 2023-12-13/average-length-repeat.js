/* 
Average length repeat

// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1
*/

const averageLengthRepeat = (arr) => {
    // get the average length of the characters in the array
    // map over, create a new array, repeat each character by the average
    // could also do Math.round(arr.join('').length / arr.length)
    const averageLength = Math.round(
        arr.reduce((acc, curr) => acc + curr.length, 0) / arr.length
    );
    return arr.map((value) => value[0].repeat(averageLength));
};

console.log(averageLengthRepeat(["u", "y"]), ["u", "y"]); // average length is 1
console.log(averageLengthRepeat(["aa", "bbb", "cccc"]), ["aaa", "bbb", "ccc"]); // average length is 3
console.log(averageLengthRepeat(["aa", "bb", "ddd", "eee"]), [
    "aaa",
    "bbb",
    "ddd",
    "eee",
]); // average length is 2.5 round up to 3
