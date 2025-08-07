const express = require('express');
const {upload} = require("../Controllers/Upload")
const path = require("path")
let router = express.Router();

const {Insert} = require("../Controllers/Insert")

router.post("/insert",upload.single("img"),Insert);
module.exports = router;