import { Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { ITask } from "../@types/task";

interface TaskProps {
  task: ITask;
}

export function Task({ task }: TaskProps) {
  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <input type="checkbox" name="" id={`checkbox-${task.id}`} />
        <label htmlFor={`checkbox-${task.id}`}></label>
      </div>
      <span className={task.isSelected ? styles.selected : ""}>{task.label}</span>
      <button title="Apagar task">
        <Trash weight="bold" size={24} />
      </button>
    </div>
  );
}
