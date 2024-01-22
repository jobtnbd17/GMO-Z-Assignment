const mongoose = required('mongoose');
const Schema = mongoose.Schema

let employeeform = new Schema({
    employeeID:{
        type: String
    },
    fristname:{
        type : String
    },
    lastname:{
        type : String
    },
    Email :{
        type : String
    }
})
module.exports = mongoose.model('employeeform',employeeform)