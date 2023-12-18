function exchangeNumberToArray(num){
    let numStr = num.toString();
    let ans = [];

    for (let i = 0 ; i < numStr.length ; i++){
        ans.push(parseInt(numStr.charAt(i)));
    }

    return ans;
}

var a = 9999;
var b = 1234;

console.log(exchangeNumberToArray(a += 1));
console.log(exchangeNumberToArray(b += 1));