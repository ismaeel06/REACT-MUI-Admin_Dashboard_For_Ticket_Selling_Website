import express from 'express';
import { getEventRequests,createEventRequest,deleteEventRequest } from '../Controllers/EventRequestsController.js';
import { protect } from '../Middleware/authmiddleware.js';

const router = express.Router();

router.get('/', protect, getEventRequests);

router.post('/create', protect, createEventRequest);

router.delete('/:id', protect, deleteEventRequest);

export default router;