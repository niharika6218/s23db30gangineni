const mongoose = require("mongoose")
const universitySchema = mongoose.Schema({
universityname: String,
departmentname: String,
score: Number
})
module.exports = mongoose.model("university",universitySchema)