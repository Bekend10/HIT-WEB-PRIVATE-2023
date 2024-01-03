function myFind(arr , CallBackFunction){
    var ok = false;
    for (let i = 0 ; i < arr.length ; i++){
        if(CallBackFunction(arr[i]))  {
            return arr[i];
            ok = true;
        }
    }

    if(!ok) return -1;
}

console.log(myFind([1 ,2 , 3, 4 , 5] , (x) => x > 1));