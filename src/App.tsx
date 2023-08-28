import { ITask } from "./@types/task";
import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { TaskList } from "./components/TaskList";
import "./global.css";

const tasks: ITask[] = [
  {
    id: 1,
    label: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isSelected: false,
  },
  {
    id: 2,
    label: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isSelected: true,
  },
  {
    id: 3,
    label: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isSelected: false,
  },
];

function App() {
  return (
    <>
      <Header />
      <InputTask />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
