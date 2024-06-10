const express = require("express");
const router = express.Router();
const Task = require("../model/task");
const Article = require("../model/article");
// const Page1 =require(__dirname + '/page.jsx')
router.get("/", (req, res) => {
    // res.send("Welcome to my API");
    // res.sendFile(Page1)
    res.render("page.ejs")
});
router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(201).send(tasks);
    } catch (err) {
        res.status(400).send(err);
    }
});


router.post("/tasks", async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(`Task Created\n ${task}`);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.put("/tasks/:id",async (req,res)=>{
    try{
        const {id}=req.params
        const data=req.body
        const task = await Task.findOneAndUpdate(id,data,{new:true})
        res.status(201).send(`Task Updated\n ${task}`)
    }catch(err){
        res.send({message:err.message})
    }

})
router.delete('/tasks/:id', async(req,res)=>{
    try{
        const {id} =req.params
        const data =req.body
        await Task.findOneAndDelete(id)
        res.status(201).send(`Task Deleted`)
    }catch(err){
        res.status(400).send({message:err.message})
    }
})

module.exports = router;
