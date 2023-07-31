import express from "express"

import mongoose from "mongoose"

require("dotenv").config()

import routes from "./routes/routes"

import cors from 'cors'

const app = express()
const PORT = process.env.PORT | 5000

app.use(express.json())
app.use(cors());

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

app.use("", routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));