
const stage = document.getElementById("stage")
var breaker = document.createElement("br")


// const cols = [1, 1, 1]
// const rows = [2, 2, 2]

// const colsNum = 2
// const rowsNum = 1


//     for (let i = 0; i < colsNum; i++) {
//         console.log(cols)

//         for (let j = 0; j < rowsNum; j++) {
//             console.log(rows)

//         }

//     }


matrix1 = [1, 0, 1]
matrix2 = [0, 1, 1]
matrix3 = [1, 0, 0]




stage.append(matrix1)
stage.append(breaker)
stage.append(matrix2)
stage.append(breaker)
stage.append(matrix3)

var rotate = function (matrix1) {
    // Copy the original matrix
    var origMatrix = matrix1.slice();
    for (var i = 0; i < matrix1.length; i++) {
        // Map each row entry to its rotated value
        var row = matrix1[i].map(function (x, j) {
            var k = (matrix1.length - 1) - j;
            return origMatrix[k][i];
        });
        matrix[i] = row;
    }
    return matrix;
};


stage.append(breaker)
rotate(matrix1, matrix2, matrix3)
stage.append(matrix1, matrix2, matrix3)