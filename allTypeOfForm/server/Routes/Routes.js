const express = require('express');
const {upload} = require("../Middlewares/Upload")
const path = require("path")
let router = express.Router();

const {
    Insert,
    getData,
    deleteData,
    viewData,
    Update
} = require("../Controllers/Insert")

router.post("/insert",upload.single("img"),Insert);
router.get("/getdata", getData);

router.get("/deletedata", deleteData);
router.get("/viewdata", viewData);
router.post("/update",upload.single("img"), Update);
module.exports = router;