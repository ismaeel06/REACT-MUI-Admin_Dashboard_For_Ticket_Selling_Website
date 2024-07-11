import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        default: "12345678",
    },

    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    isOrganizer: {
        type: Boolean,
        required: true,
        default: false,
    },
    created: {
        type: String,
        default: () => {
        const now = new Date();
        const options = { day: "numeric", month: "short", year: "numeric" };
        return now.toLocaleDateString("en-GB", options);
    },
    },
}
    
);

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

export default mongoose.model('User', userSchema);