const Emitter = require('events');
const emmiter = new Emitter();


emmiter.addListener('click', (e)=>{
    console.log('click')
})

emmiter.on('message', (data,second,third)=>{
    console.log(data)
    console.log(second)
    console.log(third)
})

const MESSAGE = process.env.message || '';

if(MESSAGE){
    emmiter.emit('message', MESSAGE,123,33);
} else{
    emmiter.emit('message','nothing','zero','zero');
}

// emmiter.once('message', (data,second,third)=>{
//     console.log(data)
//     console.log(second)
//     console.log(third)
// })

emmiter.removeAllListeners();


