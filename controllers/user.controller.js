import User from "../models/user.model.js";

export async function getUsers(req, res) {
    User.find({})
        .then(usersInfo => {
            console.log(`User: ${usersInfo}`)
            res.status(200).json(usersInfo)
        })
        .catch(error => {
            console.log(`Getting Users went wrong! Try again 😞 ${error}`)
            res.status(400).json(error)
        }

        );
}
export async function createUser(req, res) {
    User.create(req.body)
        .then(userInfo => {
            console.log(`User create worked well: ${userInfo}`)
            res.status(200).json(userInfo)
        })
        .catch(error => {
            console.log(`Creating a new User went wrong! Try again 😞 ${error}`)
            res.status(400).json(error)
        }

        );
}

export async function getUserById(req, res) {
    User.findById(req.params.id)
        .then(userInfo => {
            console.log(`User By Id: ${userInfo}`)
            res.status(200).json(userInfo)
        })
        .catch(error => {
            console.log(`Invalid ID for User went wrong! Try again 😞 ${error}`)
            res.status(400).json(error)
        }

        );
}
export async function getUserToLogin(req, res) {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username }).exec();

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if the entered password matches the stored password
        if (user.password === password) {
            return res.status(200).json(user);
        } else {
            return res.status(401).json({ error: 'Incorrect password' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}