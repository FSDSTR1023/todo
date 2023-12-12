const User = require('../models/user.model');

async function createUser(req, res) {
    console.log('Request body:', req.body);
    User.create(req.body)
        .then((user) => {
            console.log('user created', user);
            res.status(200).json(user);
        })
        .catch((err) => {
            console.log(err, ' <---- try again, something went wrong');
            res.status(400).json(err);
        });
}

async function getUserById(req, res){
    User.findById(req.params.id) //Importante después de create
        .then((user) => {
            console.log('user found', user);
            res.status(200).json(user);
        })
        .catch((err) => {
            console.log(err, ' <---- try again, something went wrong')
            res.status(400).json(err);
        })
}

async function getAllUsers(req, res){
    User.find(req.body) // Aquí es lo mismo, en vez de poner create, es find, la cual busca todas las tasks.
        .then((users) => {
            console.log('users found', users);
            res.status(200).json(users);
        })
        .catch((err) => {
            console.log(err, ' <---- try again, something went wrong')
            res.status(400).json(err);
        })
}

async function deleteUserByID(req, res){
    User.findByIdAndDelete(req.params.id)
        .then((user) => {
            console.log('user deleted', user);
            res.status(200).json(user);
        })
        .catch((err) => {
            console.log(err, ' <---- try again, something went wrong')
            res.status(400).json(err);
        })
}

async function getUserById(req, res){
    User.findById(req.params.id) //Importante después de create
        .then((user) => {
            console.log('user found', user);
            res.status(200).json(user);
        })
        .catch((err) => {
            console.log(err, ' <---- try again, something went wrong')
            res.status(400).json(err);
        })
}



module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    deleteUserByID,
    getUserById
}

