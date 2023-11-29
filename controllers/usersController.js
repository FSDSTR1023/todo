import User from '../models/user.model.js';

// GET /user: Get all users
export async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// GET /user/:id: Get user by id.
export async function getUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send({ msg: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// POST /user/login: Login user
export async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email, password: password }); 
        if (user) {
            const token = generateJwtToken(user._id); // Function to generate JWT
            res.json({ token });
            res.json({ msg: "User logged in successfully", user });
        } else {
            res.status(401).json({ msg: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function createUser(req, res) {
    try {
        const newUser = new User(req.body);
        // Save the user to the database
        const savedUser = await newUser.save();
        // Send back the created user data
        res.status(201).json(savedUser);
    } catch (error) {
        // Handle errors such as duplicate email, missing fields, etc.
        res.status(400).json({ message: error.message });
    }
}