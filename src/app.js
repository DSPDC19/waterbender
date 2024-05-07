const express = require("express");

const path = require("path");

const port=process.env.PORT||3000;

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname,"./public")));


app.get("/", (req, res) => {res.render("./pages/index")})
app.get("/dashboard", (req, res) => {res.render("./pages/dashboard")})
app.get("/report", (req, res) => {res.render("./pages/report")})
app.get("/settings", (req, res) => {res.render("./pages/settings")})
app.get("/consumption", (req, res) => {res.render("./pages/consumption")})

app.listen(port,()=>{
    console.log(`Server en http://localhost:${port}`)
});
