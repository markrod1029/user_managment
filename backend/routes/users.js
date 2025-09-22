const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get all users
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get single user
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create user
router.post('/', (req, res) => {
  const { name, email, phone } = req.body;
  db.query(
    'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)',
    [name, email, phone],
    (err, results) => {
      if (err) throw err;
      res.json({ id: results.insertId, name, email, phone });
    }
  );
});

// Update user
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  db.query(
    'UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?',
    [name, email, phone, id],
    (err) => {
      if (err) throw err;
      res.json({ message: 'User updated successfully' });
    }
  );
});

// Delete user
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'User deleted successfully' });
  });
});

module.exports = router;