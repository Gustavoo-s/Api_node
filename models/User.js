//import { type } from '@testing-library/user-event/dist/cjs/utility/type.js';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    
    age: {
        type: Number
    }, 

    email: {
        type: String,
        required: true
    }, 

    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('User', userSchema)