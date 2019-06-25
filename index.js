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
    
    const {reg_number, namme, reg_id, form, namee} = req.body;
    

    
    //insert reg_number 
    
    if (!reg_number || !namme || !reg_id || !form || !namee){
        return res.status(400).json({ error: "Invalid payload"});
    }
    pool.getConnection((error, connection) => {
        if (error) {
            return res.status(500).json({ error });
        }
        connection.beginTransaction(error => {
            if (error) {
                return res.status(500).json({ error });
            }
            connection.query(
                "INSERT INTO high_school (namee, form, reg_id) VALUES (?,?,?)",
                [namee,form,reg_id],
                (error, results) => {
                    if (error) {
                        return connection.rollback(() => {
                            res.status(500).json({ error });
                        });         
                }

                const insertId = results.insertId;

                connection.query(
                    "INSERT INTO student (reg_number, namme,school_id) VALUES (?,?,?)   ",
                    [reg_number,namme,insertId],
                    (error, results) => {
                        if (error) {
                            return connection.rollback(() => {
                                res.status(500).json({ error });
                            });         
                    }

                connection.commit(error => {
                    if (error) {  
                        return connection.rollback(() => {
                            res.status(500).json({ error });
                        });
                    }

                    connection.release();
                    res.json(insertId);
                });
             }
            );
        }
        );
    });
});

});

app.put("/api/parent/:id", (req, res) => {
    const {reg_number,namme,school_id} = req.body;
if (
    !reg_number || !namme || !school_id
)
{
    return res.status(400).json({ error: "Invalid payload" });
}

pool.getConnection((error, connection) => {
    if (error) {
        return res.status(500).json({ error });
    }
    connection.beginTransaction(error => {
        if (error) {
            return res.status(500).json({ error });
        }




        connection.query(
            "UPDATE student SET reg_number = ?, namme = ?, school_id = ? WHERE id = ?",
            [reg_number,namme,school_id, req.params.id],
            (error, results) => {
                if (error) {
                    return connection.rollback(() => {
                        res.status(500).json({ error });
                    });
                }
                const changedRows = results.changedRows;
     

     connection.commit(error => {
        if (error) {
            return connection.rollback(() => {
                res.status(500).json({ error });
            });
        }
        connection.release();
        res.json(changedRows);
    });
}
);
}
);
}
);
});



app.delete("/api/parent/:id", (req, res) => {
    pool.query(
        "DELETE FROM student WHERE id = ?",
        [req.params.id],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(results.affectedRows);
        }
        );
    });


app.listen(8080, function () {
    console.log("app listening on port 8080")
});