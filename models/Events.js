const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: { type: String, required: true },
		universityId: { type: String, required: true },
		eventAgenda: { type: String, required: true },
        eventTitle: { type: String, required: true },
        EventOrganizer: { type: String, required: true },
        roomName: { type: String, required: true },
        eventDescription: { type: String, required: true },
        eventVenue: { type: String, required: true },
        eventType: { type: Number }
	},
	{ timestamps: true },
);

module.exports = mongoose.model('events', eventsSchema);