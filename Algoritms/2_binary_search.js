const array = Array.from(Array(100000).keys())
let count = 0;

function binarySearch(arr, item){
    let start = 0;
    let end = arr.length;
    let middle;
    let found = false;
    let position = -1;
    
    while(found === false && start <= end){
        count++;
        middle = Math.floor((start + end) / 2)
        if(arr[middle] === item){
            found = true;
            position = middle;
            return position;
        }
        if(item < array[middle]){
            end = middle-1;
        } else { 
            start = middle+1;
        }
    }
    return position;
}

function recursionBinarySearch(array, item, start, end){
    count++;
    let middle = Math.floor((start + end) / 2)
    if(item === array[middle]){
        return middle
    }
    if( item < array[middle]){
        return recursionBinarySearch(array,item,start, middle - 1)
    } else {
        return recursionBinarySearch(array,item,middle + 1, end)
    }
}

console.log(recursionBinarySearch(array,66259,0,array.length))

// console.log(binarySearch(array, 66312))
console.log(count);