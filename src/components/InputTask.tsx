import { PlusCircle } from "phosphor-react";
import styles from "./InputTask.module.css";

export function InputTask() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle weight="bold" size={16} />
      </button>
    </div>
  );
}
