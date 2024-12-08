const { retrieveTask, addTask, deleteTask, updateTask } = require("../services/task.service")

const getTasksController = (request, response) => {
  const param = request.body

  try {
    const tasks = retrieveTask(param.category || '', param.due_date || '')
    response.status(200).json(tasks)
  } catch (error) {
    response.status(500)
  }
}

const createTaskController = (request, response) => {
  const task = request.body

  try {
    const newTask = addTask(task)
    response.status(200).json(newTask)
  } catch (error) {
    response.status(500)
  }
}

const updateTaskController = (request, response) => {
  const id = parseInt(request.params.id)
  const task = request.body

  try {
    const updatedTask = updateTask(id, task)
    response.status(200).json(updatedTask)
  } catch (error) {
    response.status(500)
  }
}

const deleteTaskController = (request, response) => {
  const id = parseInt(request.params.id)

  try {
    const task = deleteTask(id)
    response.status(200).json(task)
  } catch (error) {
    response.status(500)
  }
}

module.exports = {
  getTasksController,
  createTaskController,
  updateTaskController,
  deleteTaskController
}