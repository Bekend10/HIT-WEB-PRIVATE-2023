function findMax(a , b){
    return Math.max(a , b);
}

function maxNum(a , b , c){
    return findMax(a , findMax(b , c));
}

console.log("Max(1 , 4 , 3) là : " + maxNum(1 , 4 , 3));