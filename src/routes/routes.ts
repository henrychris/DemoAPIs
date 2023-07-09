import express from 'express';
const router = express.Router();

// home page
router.get('/', (req, res) => {
	res.send('hello world');
});

// get by serial number
router.get('/get', (req, res) => {
	const serialNumber = req.query.serialNumber;
	res.send(`Henry Ihenacho: ${serialNumber}`);
});

// balance check
router.post('/balance-check', (req, res) => {
	res.send('Agent Balance');
});

// notifications
router.post('/notifications', (req, res) => {
	res.send('Post Notifications');
});

export { router };