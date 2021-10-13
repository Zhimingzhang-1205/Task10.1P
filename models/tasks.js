const mongoose = require("mongoose")
const tasksSchema = new mongoose.Schema(
    {
        type:{
            type:String
        },
        title:{
            type:String
        },
        des:{
            type:String
        },
        suburb:{
            type:String
        },
        date:{
            type:String
        },
        suggest:{
            type:String
        },
        number:{
            type:String
        },
        img:{
            type:String
        }
    }
)

module.exports = mongoose.model("tasks", tasksSchema);