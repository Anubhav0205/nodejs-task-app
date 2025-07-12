const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const authenticate = require('../middleware/authMiddleware');
const checkPermission = require('../middleware/roleMiddleware');
const {
  addUser,
  getAllUsers,
  updateUser,
  deleteUser
} = require('../controllers/userController');

// Create user
router.post(
  '/',
  authenticate,
  checkPermission('add', 'User'),
  upload.single('image'),
  addUser
);

// Get all users
router.get(
  '/',
  authenticate,
  checkPermission('view', 'User'),
  getAllUsers
);

// Update user
router.put(
  '/:id',
  authenticate,
  checkPermission('update', 'User'),
  updateUser
);

// Delete user
router.delete(
  '/:id',
  authenticate,
  checkPermission('delete', 'User'),
  deleteUser
);

module.exports = router;
