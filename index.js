const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.set("strictQuery",false);

app.use(express.json());
// mongoose.connect("mongodb://localhost:27017/Tak_API",() => {
//     console.log("connected to Database successfully");
// });

mongoose.connect("mongodb://localhost:27017/Tak_API")
.then(() => {
    console.log("connected to Database successfully")
})
const tasks = require("./routes/task");
app.use(tasks);

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log('Server is running on 5000');
});