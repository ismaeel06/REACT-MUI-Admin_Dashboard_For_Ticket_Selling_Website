import asynchandler from 'express-async-handler';
import Event from '../Model/EventsModel.js';

const getEvents = asynchandler(async (req, res) => {
    const events = await Event.find();
    res.status(200).json({ events: events });
});

const getEventById = asynchandler(async (req, res) => {
    const event = await Event.findById(req.params.id);
    if (event) {
        res.status(200).json({ event: event });
    } else {
        res.status(404);
        throw new Error('Event not found');
    }
});

const createEvent = asynchandler(async (req, res) => {
    const { name, organizer, venue, genre, date, totalTickets, ticketsSold } = req.body;
    const event = await Event.create({
        name,
        organizer,
        venue,
        genre,
        date,
        totalTickets,
        ticketsSold,
    });
    const newEvent = await event.save();
    if (newEvent) {
        res.status(200).json({
            message: 'Event created',
            _id: newEvent._id,
            name: newEvent.name,
            organizer: newEvent.organizer,
            venue: newEvent.venue,
            genre: newEvent.genre,
            date: newEvent.date,
            totalTickets: newEvent.totalTickets,
            ticketsSold: newEvent.ticketsSold,
        });
    }
});

const updateEvent = asynchandler(async (req, res) => {
    const event = await Event.findById(req.params.id);
    if (event) {
        event.name = req.body.name || event.name;
        event.organizer = req.body.organizer || event.organizer;
        event.venue = req.body.venue || event.venue;
        event.genre = req.body.genre || event.genre;
        event.date = req.body.date || event.date;
        event.totalTickets = req.body.totalTickets || event.totalTickets;
        event.ticketsSold = req.body.ticketsSold || event.ticketsSold;

        const updatedEvent = await event.save();
        res.status(200).json({
            message: 'Event updated',
            _id: updatedEvent._id,
            name: updatedEvent.name,
            organizer: updatedEvent.organizer,
            venue: updatedEvent.venue,
            genre: updatedEvent.genre,
            date: updatedEvent.date,
            totalTickets: updatedEvent.totalTickets,
            ticketsSold: updatedEvent.ticketsSold,
        });
    } else {
        res.status(404);
        throw new Error('Event not found');
    }
});

const deleteEvent = asynchandler(async (req, res) => {
    const event = await Event.findById(req.params.id);
    if (event) {
        await event.deleteOne({_id: req.params.id});
        res.status(200).json({ message: 'Event removed' });
    } else {
        res.status(404);
        throw new Error('Event not found');
    }
});

export { getEvents, getEventById, createEvent, updateEvent, deleteEvent };
