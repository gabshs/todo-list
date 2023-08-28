import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { TaskList } from "./components/TaskList";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <InputTask />
      <TaskList />
    </>
  );
}

export default App;
