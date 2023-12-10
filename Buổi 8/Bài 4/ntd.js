function kiemTraSoDX(a){
    let characters = a.toString();
    let characters_reverse = characters.split('').reverse().join('');
    if(characters === characters_reverse){
        return "Chuỗi đối xứng";
    }
    return "Chuỗi không đối xứng";
}

console.log("Chuỗi (123) là chuỗi : " + kiemTraSoDX(123));
console.log("Chuỗi (121) là chuỗi : " + kiemTraSoDX(121));