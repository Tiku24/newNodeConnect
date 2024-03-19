require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./utils/db");

const PORT = 8000;

const User = require('./models/user_model');

async function insert()
{
   await User.create({
    username:'Tikeshwar',
    email:'tikuz2410@gmail.com',
    password:'tiku1234',
    phone:'6261895572'
    });
}
insert();

connectDb().then(() => {
app.get("/", (req, res) => {
  return res.send("Started");
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
});