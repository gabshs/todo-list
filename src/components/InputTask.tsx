import { PlusCircle } from "phosphor-react";
import styles from "./InputTask.module.css";
import { ChangeEvent, useState } from "react";

interface InputTaskProps {
  onCreateNewTask: (task: string) => void;
}

export function InputTask({ onCreateNewTask }: InputTaskProps) {
  const [newTaskInput, setNewTaskInput] = useState("");

  function handleCreateNewText() {
    onCreateNewTask(newTaskInput);
  }

  function handleNewTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskInput(event.target.value);
  }

  return (
    <div className={styles.container}>
      <input
        onChange={handleNewTaskInputChange}
        value={newTaskInput}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button disabled={newTaskInput.length < 3} onClick={handleCreateNewText}>
        Criar <PlusCircle weight="bold" size={16} />
      </button>
    </div>
  );
}
