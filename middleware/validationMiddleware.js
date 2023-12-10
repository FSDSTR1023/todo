import { body, validationResult } from 'express-validator';

// Validation for creating a new user
export const validateUser = [
  body('name').isString().withMessage('Name must be a string'),
  body('surname').isString().withMessage('Surname must be a string'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Validation for creating a new task
export const validateTask = [
  body('title').isString().withMessage('Title must be a string'),
  body('description').optional().isString().withMessage('Description must be a string'),
  body('status').isIn(['PENDING', 'IN PROGRESS', 'COMPLETED']).withMessage('Invalid status'),
  // Additional validations can be added here
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Additional validation functions can be added as needed
