const pool = require("../database");

const addTask = (task) => {
  return pool.query("INSERT INTO tasks (title, description, priority, category, due_date, comp_status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [task.title, task.description, task.priority, task.category, task.due_date,task.comp_status], (error, results) => {
    if (error) {
      throw error;
    }

    return results.rows[0].id
  });
};

const retrieveTask = (category, due_date) => {
  const condition = "";
  if (category) {
    if (condition.length) {
      condition += " AND";
    } else {
      condition += " WHERE";
    }
    condition += ` category = ${category}`;
  }

  if (due_date) {
    if (condition.length) {
      condition += " AND";
    } else {
      condition += " WHERE";
    }
    condition += ` due_date = ${due_date}`;
  }


  return pool.query(`SELECT $ FROM tasks ${condition}`, (error, results) => {
    if (error) {
      throw error;
    }

    return results.rows
  });
};

const deleteTask = (id)  => {
  pool.query(`DELETE FROM tasks WHERE id = $1`, [id], (error, results) => {
    if (error) {
      throw error
    }
    return id;
  })
}

const updateTask = (id, task) => {
  pool.query(`UPDATE tasks SET title = $1, description = $2, priority= $3, category= $4, due_date= $5, comp_status= $6 WHERE id = $7`, [task.title, task.description, task.priority, task.category, task.due_date,task.comp_status, id], (error, results) => {
    if (error) {
      throw error;
    }

    return id;
  })
}

module.exports = { deleteTask, retrieveTask, addTask, updateTask}