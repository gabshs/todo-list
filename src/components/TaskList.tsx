import { ITask } from "../@types/task";
import { Task } from "./Task";
import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: ITask[];
}

export function TaskList({ tasks }: TaskListProps) {
  const totalOfTasks = tasks.length;
  const totalOfCompletedTasks = tasks.filter((task) => task.isSelected).length;
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div>
          <h3>Tarefas criadas</h3>
          <span className={styles.counter}>{totalOfTasks}</span>
        </div>
        <div>
          <h3>Concluídas</h3>
          <span className={styles.counter}>
            {totalOfCompletedTasks} de {totalOfTasks}
          </span>
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
