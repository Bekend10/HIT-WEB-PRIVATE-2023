function myReduce(arr, CallBackFunction, initialValue, i = 0) {
    if (i === arr.length) {
      return initialValue;
    }
  
    const currentValue = arr[i];
    const updatedValue = CallBackFunction(initialValue, currentValue, i, arr);
  
    return myReduce(arr, CallBackFunction, updatedValue, i + 1);
  }
  

  const numbers = [1, 2, 3, 4, 5];
  const sum = myReduce(numbers, (acc, curr) => acc + curr, 0);
  
  console.log(sum);
  