function formula(n){
    let data = {
        'number': n,
        'all numbers': [],
    }

    while(n!= 1){
        if(n % 2 == 0){
            n = n/2;
        } else {
            n = 3*n+1;
        }
        data["all numbers"].push(n);
    }
    return data
    
};


export default formula;