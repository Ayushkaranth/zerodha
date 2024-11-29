//db connect schema defined
const mongoose = require("mongoose");
require('dotenv').config();
const mongourl=process.env.MONGO_URL;
mongoose.connect(mongourl);

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});


const userModel = mongoose.model("user", userSchema);

module.exports={
    userModel
};