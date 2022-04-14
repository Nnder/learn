const os = require('os');
const cluster = require('cluster');

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus().length)
// console.log(os)



// const cpus = os.cpus()

// if(cluster.isMaster){
//     for(let i = 0; i<cpus.length ; i++){
//         const CPUcore = cpus[i];
//         cluster.fork();
//         console.log(`Main worker with Pid ${process.pid}`)
//     }

//     cluster.on('exit', (worker,code,signal)=>{
//         console.log(`Worker with Pid ${process.pid} is Dead`)
//         cluster.fork()
//     })
// } else{
//     console.log(`Worker with Pid ${process.pid}`)

//     setInterval(()=>{
//         console.log(`Worker with Pid ${process.pid} still works`)
//     }, 5000)
// }


