import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your name"],
        minlength: [3, "Name must contains atleast 3 characters"],
        maxlength: [30, "Name cannot exceed 30 characters"],
    },
    email: {
        type: String,
        required: [true, "Please provide your Email"],
        validator: [validator.isEmail, "Please provide valid Email"],
    },
    phone: {
        type: Number,
        required: [true, "Please provide your Number"],
    },
    password: {
        type: String,
        required: [true, "Please provide your password"],
        minlength: [8, "Password must contains atleast 8 characters"],
        maxlength: [32, "Password cannot exceed 32 characters"],
        select: false,
    },
    role: {
        type: String,
        required: [true, "Please provide your Role"],
        enum: ["Job Seeker", "Employer"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

//hashing the password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);

});

//comparing password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Generating jwt token for authentication
userSchema.methods.geJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_Secret_Key, {
        expiresIn: process.env.JWT_Expire,
    });
};

export const User = mongoose.model("User", userSchema);