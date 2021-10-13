const mongoose = require("mongoose")
const expertsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:'Please enter name'
        },
        phone: {
            type: String
        },
        password:{
            type: String
        },
        address:{
            type: String
        }
    }
)

module.exports = mongoose.model("experts", expertsSchema);