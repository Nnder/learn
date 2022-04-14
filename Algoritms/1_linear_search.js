const arr = [1,2,3,4,1,2,3,4,5,1,2,5,12,5,2,5,12,2,5,5,12,5,6,7,8];
let count = 0;
function linearSearch(arr, n){
    for(let i = 0; i< arr.length; i++){
        count++;
        if(arr[i] == n) return i;
    }
    return null
}

console.log(linearSearch(arr, 8));
console.log(count);