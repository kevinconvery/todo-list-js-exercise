// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to an object
// A new task will be created as incomplete
const newTask = function(title, description)  {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },


    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

const task1 = newTask("Clean cat litter", "Take out bag to garbage");
const task2 = newTask("Do Laundry", "put clothes in hamper first and carry down");
const tasks = [task1, task2];
// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// // Print the state of a task to the console in a nice readable way

// // DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
task2.logState();
task2.markCompleted();
task2.logState();
console.log(tasks);
