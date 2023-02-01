let mongoose = require('mongoose');

let schema = mongoose.Schema

let categorySchema = new schema({
    name:{
        type: String,
        require: true
    },
    created:{
        type:Date,
        default: () =>{
            return new Date();
        }
    }
})


module.exports = mongoose.model("category",categorySchema)