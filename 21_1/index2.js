const origArray = [1, 2, 3, 4, 5];
//* sort array:
origArray.sort();

var positiveArray = origArray.filter(function(number) {
  return number >= 0;
});

function checkVal() {
  let status = true;
  if (positiveArray[0] == 0) {
    return 0;
  }
  for (let i = 0; i < positiveArray.length; i++) {
    if (positiveArray[i] + 1 == positiveArray[i + 1] - 1) {
      let status = false;
      return positiveArray[i] + 1;
    }
    if (status == true) {
      return positiveArray[positiveArray.length - 1];
    }
  }
}
console.log(checkVal());
