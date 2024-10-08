import connectDB from "./database/db_connection.js"
import UserModel from "./model/User.js"
import express from "express"
import cors from "cors"
import router from "./routes/routes.js"

// const express = require("express")
// const mongoose = require("mongoose")
// const cors = require("cors")
// const UserModel = require("./model/User")

const app = express()
app.use(express.json())
app.use(cors())

connectDB();

app.use("/api", router)

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email : email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post("/register", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("server is running")
})