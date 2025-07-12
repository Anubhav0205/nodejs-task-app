const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authMiddleware');
const checkPermission = require('../middleware/roleMiddleware');
const {
  addTask,
  getAllTasks,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// Create task
router.post(
  '/',
  authenticate,
  checkPermission('add', 'Task'),
  addTask
);

// Get all tasks
router.get(
  '/',
  authenticate,
  checkPermission('view', 'Task'),
  getAllTasks
);

// Update task
router.put(
  '/:id',
  authenticate,
  checkPermission('update', 'Task'),
  updateTask
);

// Delete task
router.delete(
  '/:id',
  authenticate,
  checkPermission('delete', 'Task'),
  deleteTask
);

module.exports = router;
