const breaker = document.createElement("br")
const div = document.createElement("div")

const stage = document.getElementById("stage")
const main = document.getElementById("main")
const rotater = document.getElementById("rotater")

// rotater.addEventListener("onkeydown", init)
rotater.addEventListener("click", rotateMe)

// let arr = new Array();
// arr[0] = [1, 2, 3];
// arr[1] = [4, 5, 6];
// arr[2] = [7, 8, 9];
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

stage.append(matrix[0])
stage.append(div)
div.append(matrix[1])
stage.append(matrix[2])

function rotate(matrix) {
    const n = matrix.length;
    const x = Math.floor(n / 2);
    const y = n - 1;
    for (let i = 0; i < x; i++) {
        for (let j = i; j < y - i; j++) {
            k = matrix[i][j];
            matrix[i][j] = matrix[y - j][i];
            matrix[y - j][i] = matrix[y - i][y - j];
            matrix[y - i][y - j] = matrix[j][y - i]
            matrix[j][y - i] = k
        }
    }
}
function init() {
    stage.innerHTML = ""
    main.innerHTML = ""
    div.innerHTML = ""
}


function rotateMe() {
    init();
    rotate(matrix)
    stage.append(matrix[0])
    stage.append(div)
    div.append(matrix[1])
    stage.append(matrix[2])
}