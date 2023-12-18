const obj1 = {
    fullName : "Nguyễn Tiến Dũng" , 
    height : 198,
    weight : 50,
    calcBMI : function (height , weight){
        return weight / (height * height);
    }
}

const obj2 = {
    fullName : "Nguyễn Cao Cường" , 
    height : 165,
    weight : 70,
    calcBMI : function (height , weight){
        return weight / (height * height);
    }
}

if(obj1.calcBMI(obj1.height , obj1.weight) > obj2.calcBMI(obj2.height , obj2.weight)){
    console.log("BMI của " + obj1.fullName + " > BMI của" + obj2.fullName);
}
else if(obj1.calcBMI(obj1.height , obj1.weight) < obj2.calcBMI(obj2.height , obj2.weight)){
    console.log("BMI của " + obj1.fullName + " < BMI của" + obj2.fullName);
}
else{
    console.log("BMI của " + obj1.fullName + " = BMI của" + obj2.fullName);
}