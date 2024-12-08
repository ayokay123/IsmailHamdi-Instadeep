// class task ? 
  // constructor, add, remove

// class Priority
  // level, sortTask?

// class task
  // title, description, category, priority, due date
  // updateTask, deleteTask, retrieveTask(category or priority)

  class Task {
    constructor (title, description, category, priority, due_date) {
      this.title = title;
      this.description = description;
      this.category = category;
      this.priority = priority;
      this.due_date = due_date;
    }
  
    updateTask({title, description, category, priority, due_date}) {
      this.title = title;
      this.description = description;
      this.category = category;
      this.priority = priority;
      this.due_date = due_date;
    }
  
    addCategory(category) {
      this.category.push(category)
    }
    
    removeCategory(category) {
      if (this.category.length === 0) return;
      this.category = this.category.filter(cat => {
        return cat.name !== category})
    }
  }


  // facotry: type- add/remove/showAll
  class Category {
    constructor(name) {
      this.name = name;
    }

    showAll() {
      // return all categories
    }
  }

  class Priority {
    constructor(level) {
      this.level = level;
    }
  }

  class TaskFactor {
  }

 const main = () => {
  const category = new Category("A");
  const category2 = new Category("B");
  const priority = new Priority("HIGH")
  const tasks = [];
  const task = new Task("1", "sdfs", [category], priority, "2025-01-23");
  task.updateTask({...task, title: "2"})
  task.addCategory(category2)
  task.removeCategory("A")
  console.log(task);
 }

 main()