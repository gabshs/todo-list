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

  function changeCompletedTask(taskId: number) {
    const task = tasks.find((task) => task.id === taskId);

    if (!task) return;

    task.isSelected = !task.isSelected;

    setTasks([...tasks]);
  }

  function deleteTask(taskId: number) {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(filteredTasks);
  }

  return (
    <>
      <Header />
      <InputTask onCreateNewTask={createNewTask} />
      <TaskList tasks={tasks} onCheckTask={changeCompletedTask} onDeleteTask={deleteTask} />
    </>
  );
}

export default App;
