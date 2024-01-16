const mongoose = require("mongoose");

const jobSchema =    mongoose.Schema({
    "company" : String,
    "postedAt": Date,
    "city": String,
    "location": String,
    "role": String,
    "level": String,
    "contract": String,
    "position": String,
    "language": String
});

const JobsModel = mongoose.model("jobs", jobSchema);

module.exports = {
    JobsModel
}