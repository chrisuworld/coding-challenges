/* 
https://leetcode.com/problems/spiral-matrix-ii/

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

 

Example 1:

Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]

Example 2:

Input: n = 1
Output: [[1]]

 

Constraints:

    1 <= n <= 20


*/

const spiralMatrix = (n) => {
    // create our result variable
    const result = [];

    // create our array of array
    for (let i = 0; i < n; i++) {
        result.push([]);
    }
    return result;
};

console.log(spiralMatrix(3), [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
]);

console.log(spiralMatrix(1), [[1]]);
