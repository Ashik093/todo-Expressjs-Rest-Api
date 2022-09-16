const mongoose = require('mongoose')
const ProfileSchema = mongoose.Schema({
    FirstName: { type: String },
    LastName: { type: String },
    Email: { type: String },
    Password: { type: String },
    UserName: { type: String, unique: true },
    City: { type: String },
    MobileNumber: { type: String },
}, { vsersionKey: false })

const ProfileModel = mongoose.model('Profile', ProfileSchema)
module.exports = ProfileModel