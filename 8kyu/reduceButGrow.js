// Description:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//My Solution:
function grow(x){
    let sum = x.reduce((acc, c) => acc * c, 1)
    return sum
    }