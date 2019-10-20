const breaker = document.createElement("br")
const div = document.createElement("div")
const div2 = document.createElement("div")
const main = document.getElementById("main")

var myArray = [1, 1, 1, 2, 3, 8, 8, 8, 9];
myArray.sort()
stage.append(" original array is :" + myArray)
stage.append(div)
div.append(" original array length is : " + myArray.length)
stage.append(breaker)
// console.log(myArray.length)

function arrayFix() {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[0] == myArray[i]) {
            myArray.shift()
        }
        if (myArray[i] == myArray[i++]) {
            myArray.length--
        }
        // if (myArray[i] == myArray[i + 2]) {
        //     myArray.length--
        // }

    }
}
arrayFix();

//! this is quite ugly- must fix it in a better way....
if (myArray[0] == myArray[1]) {
    myArray.shift()
}
// main.innerHTML = ""
main.append(breaker)
main.append("output array is :" + myArray)
main.append(div2)
div2.append(" output array length is : " + myArray.length)