var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix)


function transpose(matrix) {

    var result = new Array(matrix[0].length);

    for (var i = 0; i < result.length; i++) {

        result[i] = new Array(matrix.length);
        for (var j = 0; j < result[i].length; j++) {

            result[i][j] = matrix[j][i];
        }
    }

    return result;
}

console.log(matrix)