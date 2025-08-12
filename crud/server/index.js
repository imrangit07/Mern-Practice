const express = require("express");
const cors = require('cors');
const { connectDb } = require("./Models/ConnectDb");

const Routes = require("./Routes/routes")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/v1", Routes);

connectDb();
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
