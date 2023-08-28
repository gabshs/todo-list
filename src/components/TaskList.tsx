import { Task } from "./Task";
import styles from "./TaskList.module.css";

export function TaskList() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div>
          <h3>Tarefas criadas</h3>
          <span className={styles.counter}>5</span>
        </div>
        <div>
          <h3>Concluídas</h3>
          <span className={styles.counter}>2 de 5</span>
        </div>
      </header>
      <div className={styles.taskList}>
        <Task />
        <Task />
        <Task />
      </div>
    </main>
  );
}
