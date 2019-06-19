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

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get("/api/student", (req, res) => {
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

app.post("/api/parent", (req, res) => {
    
    const {namme} = req.body;
    console.log(namme);

    //insert reg_number 
    
    if (!namme){
        return res.status(400).json({ error: "Invalid payload"});
    }
     pool.query(
         "INSERT INTO student (namme) VALUES (?)",
         [namme],
         (error, results) => {
             if (error) {
                 return res.status(500).json({ error });
             }
             res.json(result.insertId);
         }
     );

});



app.listen(8080, function () {
    console.log("app listening on port 8080")
});