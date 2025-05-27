import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    passWord:String
})

const UserModel = mongoose.model("Users", userSchema);

export default UserModel;