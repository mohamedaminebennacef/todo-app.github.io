import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
    {
        content : {
            type : String,
            required : true,
        },
        isCompleted : {
            type : String,
            required : true,
        },
    },
        {
            timestamps : true,
        }
)
export const Todo = mongoose.model('todos',todoSchema)