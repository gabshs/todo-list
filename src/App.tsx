import { useState } from "react";
import { ITask } from "./@types/task";
import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { TaskList } from "./components/TaskList";
import "./global.css";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function createNewTask(newTask: string) {
    const task: ITask = {
      id: tasks.length + 1,
      label: newTask,
      isSelected: false,
    };

    setTasks([...tasks, task]);
  }
  return (
    <>
      <Header />
      <InputTask onCreateNewTask={createNewTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
