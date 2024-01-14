


// function runTwice(func) {
//     func();
//     func();
// }

// function testFunction() {
//     for (let i = 0; i < 2; i++) {
//         console.log(2 + 3)
//     }
// }

// runTwice(testFunction)


// multiply = (a, b) => a * b

// console.log(multiply(2, 3))

countPositive = arr => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        count += (arr[i] > 0) ? 1 : 0;
    }
    return count
}

console.log(countPositive([1, -1, 5]))