const sortedArr = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9,]
let newSortLength = sortedArr.length - 1

console.log(sortedArr.length)
// todo look for a way to compare each item in array

for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] == sortedArr[i]++) {

        newSortLength--
        console.log(newSortLength)
    }
}