const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true },
    email: { type: String, unique: true, index: true, required: true, dropDups: true },
    phone: { type: Number, unique: true, index: true, required: true,  dropDups: true },
    password: { type: String, index: true, required: true },
    
});



const Users = mongoose.model('users', userSchema)

module.exports = Users;