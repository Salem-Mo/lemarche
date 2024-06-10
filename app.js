const express = require("express");
const mongoose = require("mongoose");
const mainRoutes = require("./routes/Routes");

const app = express();
// const port = 4000;
const port = process.env.PORT || 4000;


// Middleware
app.use(express.json());

app.use(mainRoutes);

// DB Connection
// mongoose.connect("mongodb://localhost:27017/todo");
mongoose.connect("mongodb+srv://salemmohamed:Sa12&Sa12@lemarche.xlhabtr.mongodb.net/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tlsAllowInvalidCertificates: true,
    tlsInsecure: true // use this with caution
  })
const db = mongoose.connection;
db.on("error", (err) => {
    console.log(`Connection Error:`);
});
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// Port Connection
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
