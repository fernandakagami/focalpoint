import { useState } from 'react';

import Image from "next/image";

import trash from "@/assets/trash.png";

import styles from "./styles.module.scss";

export function ListTable() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleModalClose() {
		setModalIsOpen(false);
	}

  return (
       <main className={styles.container}>

        <div className={styles["list-container"]}>
          <section className={styles.section}>
            <h3 className={styles.title}>Suas tarefas de hoje</h3>
            <ul>

              <li className={styles["date-information"]}>
                <label className={styles["checkbox-container"]}>
                  <input type="checkbox" />
                  <span className={styles.checkmark}></span>
                </label>
                <p>Lavar as mãos</p>
                <Image  width={18} height={20} src={trash} alt="lixo" />
              </li>

              <li className={styles["date-information"]}>
                <input type="checkbox" />
                <p>Lavar as mãos</p>
                <Image src={trash} alt="lixo" />
              </li>

              <li className={styles["date-information"]}>
                <input type="checkbox" />
                <p>Lavar as mãos</p>
                <Image src={trash} alt="lixo" />
              </li>

              <li className={styles["date-information"]}>
                <input type="checkbox" />
                <p>Lavar as mãos</p>
                <Image src={trash} alt="lixo" />
              </li>

            </ul>
          </section>

          <section>
            <h3 className={styles.title}>Tarefas realizadas</h3>

            <ul>
              <li className={styles["date-information"]}>
                <input type="checkbox" />
                <p>Lavar as mãos</p>
                <Image src={trash} alt="lixo" />
              </li>
            </ul>
          </section>
        </div>

        <div className={styles["button-container"]}>
          <button className={styles["add-task"]}>Adicionar nova tarefa</button>
        </div>

      </main>
  );
}