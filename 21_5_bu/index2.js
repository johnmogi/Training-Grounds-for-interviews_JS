const matrix = [["a", "a", "a", "a"],
["b", "b", "b", "b"],
["c", "c", "c", "c"],
["d", "d", "d", "d"]]

console.log(matrix)
function rotate(matrix) {          // function statement
    const N = matrix.length - 1;   // use a constant
    // use arrow functions and nested map;
    const result = matrix.map((row, i) =>
        row.map((val, j) => matrix[N - j][i])
    );
    matrix.length = 0;       // hold original array reference
    matrix.push(...result);  // Spread operator
    return matrix;
}
console.log(matrix)
