const randArray = [2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 5, 8, 8]
const stage = document.getElementById("stage")
let major = Math.floor(randArray.length / 2);

function countInArray(arr, e) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === e) {
            count++;
        }
    }
    return count;
}
for (let i = 0; i < randArray.length; i++) {
    // console.log(randArray[i])
    let countAmount = countInArray(randArray, randArray[i])
    if (countAmount >= major) {
        stage.append("the given array was : " + randArray)
        const breaker = document.createElement("br")
        stage.append(breaker)
        stage.append("the Majority number is : " + randArray[i])
        break
    }

}