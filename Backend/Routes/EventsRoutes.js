import express from 'express';
import { getEvents, getEventById, createEvent, updateEvent, deleteEvent } from '../Controllers/EventsController.js';
import { protect } from '../Middleware/authmiddleware.js';

const router = express.Router();

router.get('/', protect, getEvents);

router.get('/:id', protect, getEventById);

router.post('/create', protect, createEvent);

router.put('/:id', protect, updateEvent);

router.delete('/:id', protect, deleteEvent);

export default router;