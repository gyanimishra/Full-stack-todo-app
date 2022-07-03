const express = require("express");
const connection = require("./db")
// const cors = require("cors");

const authRouter = require("./Routes/auth.Routes")
const taskRouter = require("./Routes/task.Routes")

const app = express();

// app.use(cors());
app.use(express.json())
app.use("/auth", authRouter)
app.use("/user", taskRouter)


app.listen(8080, async() => {
    try{
        await connection;   
        console.log("connected to db successfully")
    }
    catch{
        console.log("something went wrong while connecting to db")
    }
    console.log("Server listening on localhost:8080")
})