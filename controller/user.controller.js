const mongoose = require('mongoose')
const User = require('../models/user.models')
const Task = require('../models/task.models')


async function createUser(req, res) {
  User.create(req.body)
    .then(userDoc => {
      console.log(`User create worked well: ${userDoc}`)
      res.status(200).json(userDoc)
    })
    .catch(error => {
      console.log(`Creating a new user went wrong! Try again 😞 ${error}`)
      res.status(400).json({ error: 'Failed to create user' })
    });
}

async function getUserById(req,res) {
  User.find()
    .then(userDoc => {
      console.log('Found this user by their ID: ', userDoc)
      res.status(200).json(userDoc)
    })
    .catch(err => {
      console.log('Error while getting the user: ', err)
      res.status(400).json(err)
    });
}

async function updateUser(req, res) {
  try {
    if (Array.isArray(req.body.task)) {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $addToSet: req.body },
        { new: true }
      );
      console.log('Updated user tasks:', updatedUser);
      res.status(200).json(updatedUser);
    } else {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      console.log('Updated user:', updatedUser);
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(400).json(error);
  }
}

async function deleteUser(req,res) {
  User.findByIdAndDelete(req.params.id)
    .then(deletedUser => {
      console.log(`Deleted task with id: ${deletedUser.id}`)
      res.status(200).json(deleteUser)
    })
    .catch(err => {
      console.log('Error while deleting one task: ', err)
      res.status(400).json(err)
    })
}

async function patchPassword(req,res) {
  Task.findByIdAndUpdate(req.params.id,
    {
      $set: { password: req.body }
    },
    { 
      new: true
    }
  ) 
    .then(updatePassword => {
      console.log('Updated tasks: ', updatePassword)
      res.status(200).json(updatePassword)
    })
    .catch(err => {
      console.log('Error while updating tasks: ', err)
      res.status(400).json(err)
    });

}



module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  patchPassword,
}