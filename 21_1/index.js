// const randArray = [1, -1, 4, 8, 3] 1, -1, 4, 8, 3
const origArray = [1, -1, 4, 8, 3]
//* sort array:
origArray.sort()
//  * remove negative numbers from array:
var positiveArray = origArray.filter(function (number) {
    return number >= 0;
});
var min = Math.min.apply(null, positiveArray)
var max = Math.max.apply(null, positiveArray)
if (min == 0) { document.write("the 1st missing positive number is: " + min) }
else {

    for (let i = 0; i < positiveArray.length; i++) {
        var a = positiveArray[i]
        var b = positiveArray[i + 1]
        if (b != a + 1 || b == max) {
            document.write("the 1st missing positive number is: " + (a + 1))
            break
            //! due to firefox having problem with me returning here
        }
    }
}

//TODO think of an algorithm on the lines of:
// ? while (a/1) != 1
//? (a-1) + (a/a)
//? while (a>0){ if (a%b) ===0 (counter ++)}