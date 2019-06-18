require("dotenv").config();
const express = require("express");
const mysql = require("mysql")
const app = express();
const pool = mysql.createPool(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
);

app.get("/api/schools", (req, res) => {
    pool.query("SELECT reg_number, namme FROM student", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }

        res.json(rows);
    });
});

app.get("/api/schools/:high", (req, res) => {
    pool.query("SELECT * FROM high_school",
        (error, rows) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(rows);
        });
});





app.listen(8080, function () {
    console.log("app listening on port 8080")
});