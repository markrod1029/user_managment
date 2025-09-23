const express = require("express");
const router = express.Router();
const db = require("../config/productionDb"); 

function handleError(res, err, message = "Something went wrong") {
  console.error(err);
  res.status(500).json({ error: message });
}

// Get all users
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    handleError(res, err, "Failed to fetch users");
  }
});

// Get single user
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(rows[0]);
  } catch (err) {
    handleError(res, err, "Failed to fetch user");
  }
});

// Add new user
router.post("/", async (req, res) => {
  try {
    const { fname, mname, lname, email, phone } = req.body;

    if (!fname || !lname || !email) {
      return res.status(400).json({ error: "Required fields are missing" });
    }

    const [result] = await db.query(
      "INSERT INTO users (fname, mname, lname, email, phone) VALUES (?, ?, ?, ?, ?)",
      [fname, mname, lname, email, phone]
    );

    res.json({
      id: result.insertId,
      fname,
      mname,
      lname,
      email,
      phone,
      message: "User added successfully",
    });
  } catch (err) {
    handleError(res, err, "Failed to add user");
  }
});

// Update user
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { fname, mname, lname, email, phone } = req.body;

    const [result] = await db.query(
      "UPDATE users SET fname = ?, mname = ?, lname = ?, email = ?, phone = ? WHERE id = ?",
      [fname, mname, lname, email, phone, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User updated successfully" });
  } catch (err) {
    handleError(res, err, "Failed to update user");
  }
});

// Delete user
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query("DELETE FROM users WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    handleError(res, err, "Failed to delete user");
  }
});

module.exports = router;
