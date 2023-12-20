/* 

Remove consecutive words array

// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

console.log(removeConsecutiveDuplicates(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"])
console.log(removeConsecutiveDuplicates(["kelless","keenness"]) = ["keles","kenes"])
console.log(removeConsecutiveDuplicates(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
console.log(removeConsecutiveDuplicates(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
console.log(removeConsecutiveDuplicates(["kelless","keenness"]), ['keles','kenes'])
*/

const removeConsecutiveDuplicates = (arr) => {
    // map over the array, filter by char !== array[index + 1]
    return arr.map((word) =>
        word
            .split("")
            .filter((letter, index, array) => letter !== array[index - 1])
            .join("")
    );
};

console.log(
    removeConsecutiveDuplicates(["abracadabra", "allottee", "assessee"]),
    ["abracadabra", "alote", "asese"]
);
console.log(removeConsecutiveDuplicates(["kelless", "keenness"]), [
    "keles",
    "kenes",
]);
console.log(
    removeConsecutiveDuplicates([
        "ccooddddddewwwaaaaarrrrsssss",
        "piccaninny",
        "hubbubbubboo",
    ]),
    ["codewars", "picaniny", "hubububo"]
);
console.log(
    removeConsecutiveDuplicates(["abracadabra", "allottee", "assessee"]),
    ["abracadabra", "alote", "asese"]
);
console.log(removeConsecutiveDuplicates(["kelless", "keenness"]), [
    "keles",
    "kenes",
]);
