// import/define application framework
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// // import Routes
const userRoutes = require('./routes/userRoutes')

// // Server Setup
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/users", userRoutes)

mongoose.connect("mongodb+srv://admin:admin123@cluster0.lsksn.mongodb.net/blueHive_test_app?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
	console.log("Connected Now to MongoDB Atlas")
})

app.listen(process.env.PORT || port, () => {
	console.log(`API is now online on port ${process.env.PORT || port}`)
})