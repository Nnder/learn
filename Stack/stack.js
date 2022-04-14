class Frame {
    constructor(n){
        this.a;
        this.b;
        this.n = n;
        this.segment = 0;
    }
}

function fib(n){
    let result = 0;
    stack = []
    stack.push(new Frame(n));

    while(stack.length != 0){
        let frame = stack[stack.length-1];
        switch(frame.segment){
            case 0:
                if(frame.n == 0) {
                    result = 0; 
                    stack.pop();
                }
                else if(frame.n == 1){
                    result = 1;
                    stack.pop();
                }
                else{
                    stack.push(new Frame(frame.n-2));
                    frame.segment = 1;
                }
                break;
            case 1:
                frame.a = result;
                stack.push(new Frame(frame.n - 1));
                frame.segment = 2;
                break;
            case 2:
                frame.b = result;
                result = frame.a + frame.b;
                stack.pop();
                break;
        }
    }
    return result
}

console.log(fib(10));