import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: true}); // this will record a timestamps when new user is created and updated.

// let's create a model now

const User = mongoose.model('User', userSchema);

// export the model to user it anywhere else on our application.

export default User;