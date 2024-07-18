import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    organizer: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    totalTickets: {
        type: Number,
        required: true,
    },
    ticketsSold: {
        type: Number,
        required: true,
    },
    created: {
        type: String,
        default: () => {
            const now = new Date();
            const options = { day: "numeric", month: "short", year: "numeric" };
            return now.toLocaleDateString("en-GB", options);
        },
    },
});

export default mongoose.model("Event", eventSchema);