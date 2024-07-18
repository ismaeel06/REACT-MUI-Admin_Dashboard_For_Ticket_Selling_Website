import mongoose from "mongoose";

const organizerRequestSchema = mongoose.Schema({
    organizerName: {
        type: String,
        required: true,
    },
    flagshipEvent: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    requestDate: {
        type: String,
        default: () => {
            const now = new Date();
            const options = { day: "numeric", month: "short", year: "numeric" };
            return now.toLocaleDateString("en-GB", options);
        },
    },
});

export default mongoose.model("OrganizerRequest", organizerRequestSchema);