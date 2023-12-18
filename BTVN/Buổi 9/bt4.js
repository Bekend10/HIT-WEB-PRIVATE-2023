function process(n){
    const triangle = [];

    for (let i = 0 ; i < n ; i++){
        triangle[i] = [];
        for (let j = 0 ; j <= i ; j++){
            if(j == 0 || j == i){
                triangle[i][j] = 1;
            }
            else{
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
    }

    return triangle;
}

const num = 5;
const x = process(num);
console.log(x);