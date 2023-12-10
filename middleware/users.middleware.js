import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/Users.js';

// Example of an authentication middleware
export const authenticateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.sendStatus(401);

  const token = authorization.split(' ')[1] || authorization; // Handle token prefixed with 'Bearer '
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Example of a password hashing middleware
export const hashPassword = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    next();
  } catch (error) {
    res.status(500).send('Error in password hashing');
  }
};

// Add more middleware as per your application's needs
