
function filterArray(arr) {
    return arr.filter(el => el % 2 === 0)
}

const array = [12, 34, 45, 23, 6, 78, 54, 90]
const filteredArray = filterArray(array)
console.log(filteredArray);