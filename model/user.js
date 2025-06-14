import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({    
    name:String
})
export const user = mongoose.model('User', userSchema);