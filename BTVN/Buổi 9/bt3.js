function solve(arr , target){
    const ans = [];
    for (let i = 0 ; i < arr.length - 1; i++){
       const tmp = target - arr[i]; 
        for (let j = i + 1 ; j < arr.length ; j++){
            if(arr[j] == tmp){
                ans.push(i , j);
                return ans;
            }
        }
    }

    return "-1";
    
}

const arr = [2, 7, 11, 15];
const arr2 = [3 , 2, 4];
const target = 9;
const target2 = 6;
console.log(solve(arr , target));
console.log(solve(arr2 , target2));