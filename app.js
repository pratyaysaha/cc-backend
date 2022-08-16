const express = require("express")
const mongoose = require("mongoose")
require("dotenv/config")
const morgan = require("morgan")
const cors = require("cors")

// gobals
const app = express()

//route

// Middlewares
app.use(cors())
app.use(morgan("tiny"))
app.use(express.json())
app.use(
	express.urlencoded({
		extended: true,
	})
)

//routes
app.get("/", (req, res) => {
	res.send("Hello World")
})

// mongo db config
mongoose.connect(process.env.DB_CONNECTION)

// listening to port
app.listen(process.env.PORT || 3000)
