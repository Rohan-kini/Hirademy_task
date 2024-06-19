const mongoose=require('mongoose');

const assistantSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salary:{
        type:Number,
        required:true
    },
    department:{
        type:String,
        enum:['Tech','Non-Tech']
    },
    role:{
        type:String,
        default:'SDE'
    }


})

//create assistant model now 
const assistant=mongoose.model('assistant',assistantSchema);
module.exports=assistant;