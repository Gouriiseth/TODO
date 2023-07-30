const mongoose=require('mongoose')
const todoSchema=new mongoose.schema({
    body: {
        type: String,
        required: true,
    },

    status: {
        type:Boolean,
        default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
})

const Todo=mongoose.model("Todo",todoSchema)

module.exports=Todo