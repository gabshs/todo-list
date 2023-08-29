import clipboard from "../assets/Clipboard.svg";

import styles from "./EmptyTaskList.module.css";

export function EmptyTaskList() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="Clipboard" />
      <h2>Você ainda não tem tarefas cadastradas</h2>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
