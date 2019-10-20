// let arr = new Array();
// arr[0] = [1, 2, 3];
// arr[1] = [4, 5, 6];
// arr[2] = [7, 8, 9];
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(arr)

// var breaker = document.createElement("br")
// const stage = document.getElementById("stage")
// const main = document.getElementById("main")


// stage.append(breaker)
// stage.append(arr[0])
// stage.append(breaker)
// stage.append(arr[1])
// stage.append(breaker)
// stage.append(arr[2])


let numberPop = 1
// let numberPop = prompt("number of times you'd like to rotate the array? (let's stick to 3 or less for now)")

for (let i = 0; i < numberPop; i++) {
    let sliceArr = arr[0].splice(arr.length - 1)
    let sliceArr1 = arr[1].splice(arr.length - 1)
    let sliceArr2 = arr[2].splice(arr.length - 1)

    arr[0].unshift(sliceArr[0])
    arr[1].unshift(sliceArr1[0])
    arr[2].unshift(sliceArr2[0])

}

// console.log(arr[0][arr.length - 1])
console.log(arr)
// main.append(breaker)
// main.append(arr[0])
// main.append(breaker)
// main.append(arr[1])
// main.append(breaker)
// main.append(arr[2])