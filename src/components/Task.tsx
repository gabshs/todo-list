import { Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { ITask } from "../@types/task";

interface TaskProps {
  task: ITask;
  onCheckTask: (taskId: number) => void;
}

export function Task({ task, onCheckTask }: TaskProps) {
  function handleSelectTask() {
    onCheckTask(task.id);
  }

  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <input type="checkbox" name="" id={`checkbox-${task.id}`} checked={task.isSelected} />
        <label onClick={handleSelectTask} htmlFor={`checkbox-${task.id}`}></label>
      </div>
      <span className={task.isSelected ? styles.selected : ""}>{task.label}</span>
      <button title="Apagar task">
        <Trash weight="bold" size={24} />
      </button>
    </div>
  );
}
