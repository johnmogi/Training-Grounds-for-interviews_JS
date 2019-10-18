const stage = document.getElementById("stage")
var rotateArr = [1, 2,3,4,5,6,7]
tempArr = []
// ! function rotatingArr(arr, k){
stage.append(rotateArr)
const breaker = document.createElement("br")
stage.append(breaker)

let numberPop = prompt("number of times you'd like to rotate the array?")
function rotatingArr() { 
if (numberPop > rotateArr.length){return alert( " try a smaller number then " + (rotateArr.length +1))}
for (let i = 0; i < numberPop; i++) {
    let lastNum = rotateArr.pop(numberPop)
    tempArr.push(lastNum)  
    
}
for (let j = 0; j < rotateArr.length; j++) {
    tempArr.push(rotateArr[j]) 
}
}
rotatingArr();
stage.append(tempArr)

