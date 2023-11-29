const User = require('../models/user.model');

async function getUsers(req,res) {
    User.findAll()
        .then(users => {
            console.log('Found this: ', tauserssks)
            res.status(200).json(users)
        })
        .catch(err => {
            console.log('Error while getting the users: ', err)
            res.status(400).json(err)
        });
}

async function createUser(req, res) {
    const user= req.body;
    console.log(user);
    User.create(user)
    .then(user => {
        console.log(`Student create worked well: ${user}`)
        res.status(200).json(user)
    })
    .catch(err => {
        console.log('Error while creating the task: ', err)
        res.status(400).json(err)
    });
}

module.exports = {
    getUsers,
    createUser
}