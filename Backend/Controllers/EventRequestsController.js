import asynchandler from 'express-async-handler';
import EventRequest from '../Model/EventRequestsModel.js';

const getEventRequests = asynchandler(async (req, res) => {
    const eventRequests = await EventRequest.find();
    res.status(200).json({ eventRequests: eventRequests });
});

const createEventRequest = asynchandler(async (req, res) => {
    const { name, organizer, venue, genre, date, totalTickets } = req.body;
    const eventRequest = await EventRequest.create({
        name,
        organizer,
        venue,
        genre,
        date,
        totalTickets,
    });
    const newEventRequest = await eventRequest.save();
    if (newEventRequest) {
        res.status(200).json({
            message: 'Event request created',
            _id: newEventRequest._id,
            eventName: newEventRequest.name,
            organizer: newEventRequest.organizer,
            venue: newEventRequest.venue,
            genre: newEventRequest.genre,
            date: newEventRequest.date,
            totalTickets: newEventRequest.totalTickets,
        });
    }
});

const deleteEventRequest = asynchandler(async (req, res) => {
    const eventRequest = await EventRequest.findById(req.params.id);
    if (eventRequest) {
        await eventRequest.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'Event request deleted' });
    } else {
        res.status(404);
        throw new Error('Event request not found');
    }
});

export { getEventRequests, createEventRequest, deleteEventRequest };