const User = require('../models/tasks.model')

async function createUser(req,res) {
    User.create(req.body)
        .then(userDoc => {
            console.log(`User create worked well: ${userDoc}`)
            res.status(200).json(userDoc)
        })
        .catch(error => {
            console.log(`Creating a new user went wrong! Try again 😞 ${error}`)
            res.status(400).json(error)
            }
        );
}

async function getUsers(req,res) {
    User.find()
        .then(userDocs => {
            console.log('Found this: ', userDocs)
            res.status(200).json(userDocs)
            }
            )
        .catch(err => {
            console.log('Error while getting the users: ', err)
            res.status(400).json(err)
        });
}

async function deleteUserById(req,res) {
    User.findByIdAndDelete(req.params.id) // .findByIdAndRemove() works the same as .findByIdAndDelete()
        .then(userDoc => {
            console.log(`Deleted task with id: `, userDoc)
            res.status(200).json(userDoc)
        })
        .catch(err => {
            console.log('Error while deleting one task: ', err)
            if (err.name === 'ForbiddenError') {
                res.status(403).json({ error: 'Forbidden' }); // 403 Forbidden
                } else if (err.name === 'NotFoundError') {
                res.status(404).json({ error: 'Task Not Found.' }); // 404 Not Found
                } else {
                res.status(500).json({ error: 'Internal Error Server.' }); // 500 Internal Server Error
                }
        })
}

module.exports = {
    createUser,
    getUsers,
    deleteUserById,
}