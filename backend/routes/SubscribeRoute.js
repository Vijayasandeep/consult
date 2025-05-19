import express from 'express';
import Subscriber from '../models/Subscriber.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { email } = req.body;

    if (!email || !/.+@.+\..+/.test(email)) {
        return res.status(400).json({ message: 'Invalid or missing email' });
    }

    try {
        const existing = await Subscriber.findOne({ email });
        if (existing) {
            return res.status(409).json({ message: 'Email already subscribed' });
        }

        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

        res.status(201).json({ message: 'Subscribed successfully!' });
    } catch (error) {
        console.error('Subscription error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
