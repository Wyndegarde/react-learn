import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
 const [tasks, setTasks] = useState([
    { id: 1, text: "Doctors Appointment", day: "Feb 5th", reminder: true },
    { id: 2, text: "Dentists Appointment", day: "Feb 7th", reminder: false },
    { id: 3, text: "School Meeting", day: "Feb 8th", reminder: true },
  ]);
  return (
    <div className="container">
      <Header title={"hello"} />
      <Tasks tasks = {tasks}/>
    </div>
  );
};

export default App;
