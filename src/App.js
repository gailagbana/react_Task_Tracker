import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Dentist Appointment",
      date: "Febuary 15th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Shopping Spree",
      date: "May 20th at 12:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "School Meeting",
      date: "July 12th at 10:00am",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    let number = tasks.length;
    const id = number + 1;

    console.log(id);

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task to Show"
      )}
      <Footer />
    </div>
  );
}

export default App;
