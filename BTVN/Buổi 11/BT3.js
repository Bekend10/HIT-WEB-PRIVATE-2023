function mySort(arr , CallBackFunction){
    for (let i = 0 ; i < arr.length - 1 ; i++){
        for (let j = i + 1; j < arr.length ; j++){
            if(CallBackFunction(arr[i] , arr[j]) > 0){
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}

console.log(mySort([1 , 4 , 5 , 6 , 19] , (a , b) => a - b));