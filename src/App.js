import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  // Tasks to Display
  const [tasks, setTasks] = useState([
    { id: 1, text: "Doctors Appointment", day: "Feb 5th", reminder: true },
    { id: 2, text: "Dentists Appointment", day: "Feb 7th", reminder: false },
    { id: 3, text: "School Meeting", day: "Feb 8th", reminder: true },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
};

export default App;
