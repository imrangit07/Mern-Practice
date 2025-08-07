const express =require("express");
const routes = require("./Routes/Routes")
const ConnectDb=require("./Modles/ConnectDb");
const cors = require("cors");

const app = express();
ConnectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const multer = require("multer");




app.use("/v1",routes);



app.listen(3000,()=>{console.log('Server is running on port 3000');})