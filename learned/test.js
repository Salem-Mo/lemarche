//1 Import Express
// const express=require('express')
// const app=express()
// import express from 'express'

//2 End point types / Http Methods
// Get -> retrive data
// app.get('/hello', (req,res)=>{
//     res.send('Hello World')
// })
// app.get('/',(req,res)=>{
//     res.send('Welcome to my website')
// })
// Post -> Create Data
// app.post('/create',(req,res)=>{
//     res.send('Data created successfully')
// })
// Put -> Atualizar data
// Delete -> Deletar data
// app.delete('/users/:id',(req,res)=>{
//     const {id}=req.params
//     const FindUserI=users.findIndex((x)=>x.id ===id)
//     if (FindUserI == -1){
//         res.status(400).send("User Not Found")
//         return
//     }
//     users.slice(FindUserI,1)
//     res.status(200).send("User Deleted")

// })

// 3 Listen -> Assign a port
// port = 4000
// app.listen(port,()=>{
//     console.log('Server is running on port ' , {port})
// })
//

// Project
const express = require("express");
const app = express();
app.use(express.json());
const users = [];
app.get("/", (req, res) => {
    res.send("Welcome to my website");
});
app.get("/users", (req, res) => {
    if (users.length<=0){
        res.status(404).send("There is no users")
        return
    }
    res.status(201).send(users);
});
// let x = false;
app.post("/users", (req, res) => {
    reqUser= req.body
    let findUser = users.find((x)=> x.name === reqUser.name);
    if (findUser){
        res.status(400).send("User Already found")
    }else{
        users.push(reqUser)
        res.status(201).send(`Created\n ${reqUser.id} \n ${reqUser.name}`)
    }
});
app.delete('/users/:id',(req,res)=>{
    const {id}=req.params
    const FindUserI=users.findIndex((x)=>x.id ===id)
    if (FindUserI == -1){
        res.status(400).send("User Not Found")
        return
    }
    users.splice(FindUserI,1)
    res.status(200).send("User Deleted")

})

port = 4000;
app.listen(port, () => {
    console.log("Server is running on port ",port);
});
