import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Please provide Job Title"],
        minlength: [1, "Job title must contain atleast 1 character"],
        maxlength: [50, "Job title cannot exceed 50 character"],
    },
    description:{
        type: String,
        required: [true, "Please provide Job description"],
        minlength: [1, "Job description must contain atleast 1 character"],
        maxlength: [350, "Job description cannot exceed 350 character"],
    },
    category:{
        type: String,
        required: [true, "Job category is required"],
    },
    country:{
        type: String,
        required: [true, "Job country is required"],
    },
    city:{
        type: String,
        required: [true, "Job city is required"],
    },
    location:{
        type: String,
        required: [true, "Please provide exact location"],
        minlength: [10, "Job location must contain atleast 10 character"],
    },
    fixedSalary:{
        type: Number,
        minlength: [4, "Fixed Salary must contains atleast 4 digits"],
        maxlength: [9, "Fixed Salary cannot exceed 9 digits"],
    },
    salaryFrom:{
        type:Number,
        minlength: [4, "Salary from must contains atleast 4 digits"],
        maxlength: [9, "Salary from cannot exceed 9 digits"],
    },
    salaryTo:{
        type:Number,
        minlength: [4, "Salary to must contains atleast 4 digits"],
        maxlength: [9, "Salary to cannot exceed 9 digits"],
    },
    expired:{
        type:Boolean,
        default:false,
    },
    jobPostedOn:{
        type: Date,
        default: Date.now,
    },
    postedBy:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },
});
export const Job = mongoose.model("Job", jobSchema);