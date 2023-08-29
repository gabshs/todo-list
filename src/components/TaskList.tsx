import { ITask } from "../@types/task";
import { EmptyTaskList } from "./EmptyTaskLIst";
import { Task } from "./Task";
import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: ITask[];
  onCheckTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

export function TaskList({ tasks, onCheckTask, onDeleteTask }: TaskListProps) {
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
            {totalOfTasks === 0 ? "0" : `${totalOfCompletedTasks} de ${totalOfTasks}`}
          </span>
        </div>
      </header>
      <div className={styles.taskList}>
        {tasks.length === 0 ? (
          <EmptyTaskList />
        ) : (
          tasks.map((task) => <Task key={task.id} task={task} onCheckTask={onCheckTask} onDeleteTask={onDeleteTask} />)
        )}
      </div>
    </main>
  );
}
