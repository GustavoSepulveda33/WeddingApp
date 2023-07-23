
import express from "express"; 
import mysql from "mysql"; 
import cors from "cors";


// Creating app using an express function: 
const app = express(); 

// Creating database using createConnection method and mysql: 
const db = mysql.createConnection({

    host: "localhost", 
    user: 'root',
    password: "Gr33n4est!",
    database: "WeddingApp"

})

// MIDDLEWARE: 
app.use(express.json());
app.use(cors());


// Testing connection to backend on port 8000: 
app.get("/", (req, res) => {

    res.json("hello this is the backend");     

})

// testing db info
app.get("/Users", (req, res) => {


    const q = "SELECT * FROM Users"; 

    db.query(q, (err, data) => {

        if(err) return res.json(err)
        return res.json(data)

    })


})

// endpoint to write to the 'Users' table in db during sign-up process. 
app.post("/signUp", (req, res) => {

    const q = "INSERT INTO Users (userName, userEmail, userPassword) VALUES (?)"

    const values  = [
        req.body.userName,
        req.body.userEmail,
        req.body.userPassword
    ]

    db.query(q, [values], (err, data) => {

        if(err) return res.json(err)
        return res.json("User added successfully.")

    } )

})



// APP PORT NUMBER FOR BACKEND SERVER: 
app.listen(8000, () => {

    console.log("Connected to backend");

})