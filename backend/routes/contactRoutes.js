import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// Create a new contact submission
router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body;

        const newContact = new Contact({
            firstName,
            lastName,
            email,
            phone,
            message
        });

        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all contact submissions
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router; 