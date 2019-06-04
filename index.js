const express = require("express");
const app = express();

app.get("/", function (req, res){
//logic
res.send("hallo sparrow")
});
app.listen(8080, function () {
    console.log("app listening on port 8080")
});