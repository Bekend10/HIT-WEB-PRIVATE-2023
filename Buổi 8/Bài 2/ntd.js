function check(a , b , c){
    if(a + b > c && b + c > a && a + c > b){
        return "Tam giac";
    }
    return "Khong phai tam giac";
}

console.log("Với 3 cạnh là (3,4,5) :"+check(3,4,5));
console.log("Với 3 cạnh là (3,4,8) :"+check(3,4,8));