const mongoose = require("mongoose")
const universitySchema = mongoose.Schema({
universityname: String,
departmentname: {
    type: String,
    required: true,
    match: /^[a-zA-Z]+$/
  },
score: {
    type:Number,
    min: 1,
    max: 400 } 
})
module.exports = mongoose.model("university",universitySchema)