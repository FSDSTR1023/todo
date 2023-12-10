import User from '../models/Users.js';

const UserController = {
  getUserInfo: async (req, res) => {
    try {
      // Example: Retrieve all users
      // In a real-world scenario, you'd typically fetch specific user info,
      // for example, using an ID from req.user or req.params
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      res.status(500).send('Error retrieving users');
    }
  },

  createUser: async (req, res) => {
    try {
      // Example: Create a new user
      // In a real-world scenario, you'd handle user creation logic here
      const newUser = new User({
        // Define user properties here based on your schema
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
      });

      // Save the new user to the database
      await newUser.save();

      res.status(201).json(newUser); // Respond with the created user
    } catch (error) {
      res.status(500).send('Error creating user');
    }
  },
};

export default UserController;
