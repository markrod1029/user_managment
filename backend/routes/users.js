const express = require("express");
const router = express.Router();
const db = require("../config/productionDb");

function handleError(res, err, message = "Something went wrong") {
  console.error(err);
  res.status(500).json({ error: message });
}

// Get users
router.get("/", (req, res) => {
  try {
    db.query("SELECT * FROM users", (err, results) => {
      if (err) return handleError(res, err, "Failed to fetch users");
      res.json(results);
    });
  } catch (err) {
    handleError(res, err);
  }
});

// Put user
router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
      if (err) return handleError(res, err, "Failed to fetch user");
      if (results.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(results[0]);
    });
  } catch (err) {
    handleError(res, err);
  }
});

// Post user
router.post("/", (req, res) => {
  try {
    const { fname, mname, lname, email, phone } = req.body;

    if (!fname || !lname || !email) {
      return res.status(400).json({ error: "Required fields are missing" });
    }

    db.query(
      "INSERT INTO users (fname, mname, lname, email, phone) VALUES (?, ?, ?, ?, ?)",
      [fname, mname, lname, email, phone],
      (err, results) => {
        if (err) return handleError(res, err, "Failed to add user");
        res.json({
          id: results.insertId,
          fname,
          mname,
          lname,
          email,
          phone,
          message: "User added successfully",
        });
      }
    );
  } catch (err) {
    handleError(res, err);
  }
});

// Update user
router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { fname, mname, lname, email, phone } = req.body;

    db.query(
      "UPDATE users SET fname = ?, mname = ?, lname = ?, email = ?, phone = ? WHERE id = ?",
      [fname, mname, lname, email, phone, id],
      (err, results) => {
        if (err) return handleError(res, err, "Failed to update user");
        if (results.affectedRows === 0) {
          return res.status(404).json({ error: "User not found" });
        }
        res.json({ message: "User updated successfully" });
      }
    );
  } catch (err) {
    handleError(res, err);
  }
});

// Delete user
router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    db.query("DELETE FROM users WHERE id = ?", [id], (err, results) => {
      if (err) return handleError(res, err, "Failed to delete user");
      if (results.affectedRows === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ message: "User deleted successfully" });
    });
  } catch (err) {
    handleError(res, err);
  }
});

module.exports = router;
