(async ()=> {
    const module = await import('./module.js');
    console.log(module)
    console.log(module.secret_key)

    const person = module.default
    console.log(person);
})()

console.log(import.meta)
