const mongoose =require('mongoose')
const articleSchema = new mongoose.Schema({
    "title":{type:String},
    "body":{type:String},
    "likes":{type:Number}
})


module.exports=mongoose.model("Article",articleSchema)