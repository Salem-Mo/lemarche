const mongoose =require('mongoose')

// const users_Schema = new mongoose.Schema({
//     name: { type: String, required: true },
//     age: { type: Number, required: true },
//     phone: { type: String, required: true },
//     country: { type: String, required: true },
//     salary: { type: Number, required: true },
// });
const taskSchema=new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false},
    completed: { type: Boolean, default: false},
})

// const Users = mongoose.model('Users', users_Schema);
module.exports = mongoose.model('Task', taskSchema);
// module.exports={Users,Tasks}
