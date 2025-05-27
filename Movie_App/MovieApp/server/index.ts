import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import UserModel from './models/Users';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/MovieApp");

app.post("/register", async (req, res) => {
    UserModel.create(req.body)
        .then((Users) => res.json(Users))
        .catch(err => res.json(err)) 
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});