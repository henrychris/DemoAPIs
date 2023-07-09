import express from 'express';
const router = express.Router();

// balance check
router.post('/balance-check', (req, res) => {
	res.send('Agent Balance');
});

// notifications
router.post('/notifications', (req, res) => {
	res.send('Post Notifications');
});

export { router };