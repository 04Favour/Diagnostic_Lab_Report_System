import mongoose, { Document, Schema } from "mongoose";

interface IPatient extends Document{
    name: string
    phone: number
    age: number
    email: string
}

const patientSchema = new Schema<IPatient>({
    name: {
        type: String,
        required: [true, "Patient name is required"],
        trim: true,
        maxLength: [30, "Patient name cannot exceed 30 characters"]
    },

    phone: {
        type: Number,
    },

    age: {
        type: Number,
    },

    email: {
        type: String,
        required: [true, "Email is required"]
    }
}, {timestamps: true})

const Patient = mongoose.model<IPatient>("Patient", patientSchema);

export default Patient
export type {IPatient}