import mongoose, { Schema } from "mongoose";
import slugify from "slugify";


const ProgramSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        unique: true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

ProgramSchema.pre("validate",function(next){
    this.slug = slugify(this.name, {
        lower:true,
        strict:true
    });
    next();
})
export const Program = mongoose.model("Program", ProgramSchema)