var arr = [1, 2, 3, 4, 5, 6, 7]
var breaker = document.createElement("br")

stage.append(arr)
stage.append(breaker)


let numberPop = prompt("number of times you'd like to rotate the array?")

function arrayRotate(arr, count) {
    count -= arr.length * Math.floor(count / arr.length);
    arr.push.apply(arr, arr.splice(0, count));
    return arr;
}
for (let i = 1; i <= numberPop; i++) {
    var breaker = document.createElement("br")

    stage.append(arrayRotate(arr, i))
    stage.append(" number of times rotated: " + i)
    stage.append(breaker)
    // console.log(arrayRotate(arr, i), i);
}

//TODO ["🧡", "💚", "💙", "💜", "🖤"]