import express from "express";
import {
  getOrganizerRequests,
  createOrganizerRequest,
  deleteOrganizerRequest,
} from "../Controllers/OrganizerRequestController.js";
import { protect } from "../Middleware/authmiddleware.js";

const router = express.Router();

router.get("/", protect, getOrganizerRequests);

router.post("/create", protect, createOrganizerRequest);

router.delete("/", protect, deleteOrganizerRequest);

export default router;

