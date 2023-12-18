function moveZerosToEnd(arr) {
    let nonZeroElements = arr.filter(element => element !== 0);
    
    let zeroCount = arr.length - nonZeroElements.length;
    
    let resultArray = nonZeroElements.concat(Array(zeroCount).fill(0));
    
    return resultArray;
}

let inputArray = [0, 2, 0, 4, 0, 6, 7, 8, 9];
let resultArray = moveZerosToEnd(inputArray);

console.log(resultArray);
