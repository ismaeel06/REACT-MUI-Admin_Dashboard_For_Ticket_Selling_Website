import asyncHandler from "express-async-handler";
import OrganizerRequest from "../Model/OrganizerRequestModel.js";

const getOrganizerRequests = asyncHandler(async (req, res) => {
  const organizerRequests = await OrganizerRequest.find();
  res.status(200).json({ organizerRequests: organizerRequests });
});

const createOrganizerRequest = asyncHandler(async (req, res) => {
  const {
    organizerName,
    flagshipEvent,
    email,
    phone,
    requestDate,
  } = req.body;

  const organizerRequestExists = await OrganizerRequest.findOne({
    email: req.body.email,
  });
  if (organizerRequestExists) {
    res.status(400).json("Request already sent");
  }
  const organizerRequest = await OrganizerRequest.create({
    organizerName,
    flagshipEvent,
    email,
    phone,
    requestDate,
  });

  const newRequest = await organizerRequest.save();
  if (newRequest) {
    res.status(200).json({
      message: "Request sent",
      _id: newRequest._id,
      organizerName: newRequest.organizerName,
      flagshipEvent: newRequest.flagshipEvent,
      email: newRequest.email,
      phone: newRequest.phone,
      requestDate: newRequest.requestDate,
    });
  } else {
    res.status(400);
    throw new Error("Invalid request data");
  }
});

const deleteOrganizerRequest = asyncHandler(async (req, res) => {
  let organizerRequest;

  if (req.query.email) {
    organizerRequest = await OrganizerRequest.findOneAndDelete({ email: req.query.email });
  } else if (req.params.id) {
    organizerRequest = await OrganizerRequest.findByIdAndDelete(req.params.id);
  } else {
    res.status(404);
    throw new Error("Request not found");
    return;
  }

  if (organizerRequest) {
    res.json({ message: "Request removed" });
  } else {
    res.status(404);
    throw new Error("Request not found");
  }
});

export { getOrganizerRequests, createOrganizerRequest, deleteOrganizerRequest };
