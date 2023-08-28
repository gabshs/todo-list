import { ITask } from "../@types/task";
import { Task } from "./Task";
import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: ITask[];
}

export function TaskList({ tasks }: TaskListProps) {
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
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </main>
  );
}
