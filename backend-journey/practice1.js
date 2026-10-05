function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const isEvenn = (n) => n % 2 === 0;
console.log(isEven(3));
const tasks = [];
let id = 1;
function addTask(title) {
  tasks.push({ id: id, title: title, done: false });
  id += 1;
}
addTask("learn js 1");
addTask("learn js 2");
addTask("learn js 3");

console.log(tasks);
function completeTask(task, Id) {
  let check = false;
  for (let i = 0; i < task.length; i++) {
    if (task[i].id === Id) {
      task[i].done = true;
      check = true;
      break;
    }
  }
  if (check) {
    console.log("done");
  } else {
    console.log("not found");
  }
}

completeTask(tasks, 3); // should print "done"
completeTask(tasks, 99); // should print "not found"
console.log(tasks); // task 3 should have done: true
function printPendingTasks(tasks) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].done === false) {
      console.log(tasks[i]);
    }
  }
}
printPendingTasks(tasks);
const pending = tasks.filter((t) => t.done != true);
console.log(pending);
