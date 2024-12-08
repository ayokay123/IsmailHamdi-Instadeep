const express = require("express");
const { getTasksController, createTaskController, deleteTaskController, updateTaskController } = require("../controllers/tasks.controller");
const router = express();

router.get('/task', getTasksController);
router.post('/task', createTaskController);
router.delete('/task/:id', deleteTaskController);
router.put('/task/:id', updateTaskController);

module.exports = { router }