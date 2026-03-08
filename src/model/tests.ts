import mongoose, { Document, Schema } from "mongoose";

export enum TestStatus {
    PENDING= "pending",
    COMPLETED="completed"
}

interface ITest extends Document {
    patientId: string
    testName: string
    result: string
    status: TestStatus
}

const testSchema = new Schema<ITest>({
    patientId: {
        type: String,
        required: [true, "PatientId is required"],
        trim: true,
        maxLength: [20, "PatientId should not exceed 20 characters"]
    },

    testName: {
        type: String,
        required: [true, "Test name is required"],
        trim: true,
        maxLength: [20, "Test should not exceed 20 characters"]
    },

    result: {
        type: String,
        required: [true, "Result is required"],
        trim: true,
        maxLength: [20, "result should not exceed 20 characters"]
    },

    status: {
        type: String, 
        enum: Object.values(TestStatus), 
        default: TestStatus.PENDING,
        required: true
    }
}, {timestamps: true})

const Test = mongoose.model<ITest>("Test", testSchema);

export default Test
export type {ITest}