const User = require('../models/user.model');

async function createUser(req,res) {
    User.create(req.body)
    .then((user) => {
        console.log('user created', user);
        res.status(200).json(user);
    })
    .catch((err) => {
        console.log(err, 'Oh no! Something went wrong! Try again, you can do it!');
        res.status(400).json(err);
    });
}

async function getAllUsers(req,res) {
    User.find()
    .then((user) => {
        console.log('user found', user);
        res.status(200).json(user);
    })
    .catch((err) => {
        console.log(err, 'Oh no! Something went wrong! Try again, you can do it!');
        res.status(400).json(err);
    });
}

async function getUserById(req, res) {
    User.findById(req.params.id)
      .then((user) => {
        console.log('user found', user);
        res.status(200).json(user);
      })
      .catch((err) => {
        console.log(err, ' <---- error try again something went wrong');
        res.status(400).json(err);
      });
  }

  async function loginUser(req, res) {
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ msg: 'User not found' });
        }
        if (!req.body.password || user.password !== req.body.password) {
          return res.status(403).json({ msg: 'Forbidden' });
        }
        res.status(200).json({ msg: 'Login succesful' });
      })
      .catch((err) => {
        console.log(err, ' Error. Try again, something went wrong');
        res.status(400).json({msg: 'Something went wrong.'});
      });
  }

module.exports = { 
    getAllUsers, 
    createUser, 
    getUserById, 
    loginUser 
};