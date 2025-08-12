const express = require('express');
const Routes = express.Router();
const taskCont = require("../Controllers/taskController")


Routes.post('/add',taskCont.addTask)
Routes.delete('/delete',taskCont.deleteTask)
Routes.get('/change',taskCont.changeStatus)

module.exports=Routes