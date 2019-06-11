const express = require("express");
const mysql = require("mysql")
const app = express();
const pool = mysql.createPool(
    {
        host: "localhost",
        user: "foo",
        password: "password",
        database: "sparrow_school",
        insecureAuth: true
    }
);

app.get("/api/schools", (req, res) => {
    pool.query("SELECT reg_number, namme FROM student", (error, rows) => {
        if (error){
            return res.status(500).json({ error });
        }

        res.json(rows);
    });
});

app.listen(8080, function () {
    console.log("app listening on port 8080")
});