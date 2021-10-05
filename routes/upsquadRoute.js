const router = require('express').Router();
const Events = require('../models/Events');

//get all getEvents
router.get('/getEvents', async (req, res) => {
	try {
		const getEvents = await Events.find();
        console.log(getEvents);

        let result = getEvents.map(({eventTitle, firstName, lastName }) => ({eventTitle, firstName, lastName}))

		res.status(200).json({
			status: 'succes',
			events: result
		});
	} catch (err) {
		res.sendStatus(500).json(err);
	}
});

module.exports = router;
