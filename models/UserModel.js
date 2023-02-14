import mongoose from "mongoose";

const User = mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    gender:{
        type: String
    }
});

export default mongoose.model('Users', User);
