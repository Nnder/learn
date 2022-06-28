const express = require('express');
const path = require('path');
const app = express();

let id = 0;

const CONTACTS = [
    {id:++id, name:'Roma', value:'dddddd', marked:false}
]

app.use(express.json());

app.get('/api/contacts', (req,res)=>{
    res.status(200).json(CONTACTS);
})

app.post('/api/contacts',(req,res)=>{
    const contact = {...req.body, id: ++id, marked:false};
    CONTACTS.push(contact);
    res.status(201).json(contact);
})

app.delete('/api/contacts/:id',(req,res)=>{
    CONTACTS.filter(c=>c.id !== req.params,id);
    res.status(200).json({message:`contact with id ${req.params.id} has been deleted`});
})

app.put('/api/contacts/:id',(req,res)=>{
    const index = CONTACTS.findIndex(c=>c.id === req.params.id);
    CONTACTS[index] = req.body
    res.json(CONTACTS[index]);
})

app.use(express.static(path.resolve(__dirname,'client')));

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','index.html'));
});

app.listen(3000, ()=>{
    console.log('server');
})
