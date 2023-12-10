function gcd(a , b){
    if(b == 0)  return a;
    return gcd(b , a % b);
}

function lcm(a , b){
    return (a * b) / gcd(a , b);
}

console.log("BCNN của 3 và 5 là " + lcm(3 , 5));
console.log("BCNN của 3 và 6 là " + lcm(3 , 6));