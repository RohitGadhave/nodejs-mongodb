const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchemaType = {
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    dob: {
        type: Date
    },
};

const userSchema = new Schema(userSchemaType, { timestamps: true });

//compiling schema into a Model.
module.exports.userModel = mongoose.model('Users', userSchema);