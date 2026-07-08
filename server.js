const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const db = new sqlite3.Database("./database.db");

// Create table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      available INTEGER DEFAULT 1
    )
  `);

  db.run(`
    INSERT OR IGNORE INTO users(id, name, available)
    VALUES
      (1, 'Alice', 1),
      (2, 'Bob', 0),
      (3, 'Charlie', 1),
      (4, 'David', 0)
  `);
});

// Get users
app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) return res.status(500).send(err);
    res.json(rows);
  });
});

// Toggle availability
app.post("/toggle/:id", (req, res) => {
  const id = req.params.id;

  db.get("SELECT available FROM users WHERE id = ?", [id], (err, row) => {
    if (err) return res.status(500).send(err);

    const newStatus = row.available ? 0 : 1;

    db.run(
      "UPDATE users SET available = ? WHERE id = ?",
      [newStatus, id],
      function (err) {
        if (err) return res.status(500).send(err);

        res.json({
          success: true,
          available: newStatus
        });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});