import express from 'express';
const router = express.Router();
import users from '../mockup_data/users.js';


// GET/user: Get user information
router.get('/', (req, res) => {
    res.json(users);
});

// GET /user/:id: Get details of a user
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ msg: "User not found" });
    }
});

// POST/user/login: Login user
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        res.json({ msg: "User logged in successfully", user });
    } else {
        res.status(401).json({ msg: "Invalid credentials" });
    }
});

export default router;
