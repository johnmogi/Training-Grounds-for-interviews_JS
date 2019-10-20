var arr = [1, 2, 3, 4, 5, 6, 7]

let numberPop = prompt("number of times you'd like to rotate the array?")
// let numberPop = 1

for (let i = 0; i < numberPop; i++) {
    let sliceArr = arr.splice(arr.length - 1)
    arr.unshift(sliceArr[0])

}

console.log(arr)