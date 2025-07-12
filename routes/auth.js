const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Middlewares
const authenticate = require('../middleware/authMiddleware');
const checkRole = require('../middleware/roleMiddleware');

// 🔐 Auth routes
router.post('/register', register);
router.post('/login', login);

// ✅ Protected route (only for logged-in users)
router.get('/protected', authenticate, checkRole('Super-admin'), (req, res) => {
  res.json({
    message: `Welcome, your role is ${req.user.role}`,
    userId: req.user.id
  });
});

module.exports = router;