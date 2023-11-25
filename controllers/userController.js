import User from '../models/user.model.js'

const getUsers = async (req, res) => {
    User.find()
    .then(userList => res.status(200).json(userList))
    .catch(error => {
        console.log(`Error finding the users: ${error}`)
        res.status(400).json(error)
    })
}

const verifyUser = async (req, res) => {
    User.findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(error => {
        console.log(`Error finding the user: ${error}`)
        res.status(400).json(error)
    })
}

const createUser = async (req, res) => {
    User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(error => {
        console.log(`Creating a new user went wrong! Try again 😞 ${error}`)
        res.status(400).json(error)
    })
}

const userController = {
    getUsers,
    verifyUser,
    createUser
}

export default userController