'use client';

import { useState } from 'react';

import Image from "next/image";

import trash from "@/assets/trash.png";
import { Modal } from "@/components/Modal";

import styles from "./styles.module.scss";

export function ListTable() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleModalType(type = "") {
    setModalIsOpen(true);
    setModalType(type);
  }

  function handleModalConfirm(event) {
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    setTaskList([...taskList, { ...formValues, isFinished: false }]);

    setModalIsOpen(false);
    setModalType("");
  }

	function handleModalClose() {
		setModalIsOpen(false);
    setModalType("");
	}

  function renderModalContentCreateTask() {
		return (
      <div className={styles.field}>
        <label htmlFor="input-title" >Título</label>
        <input type="text" id="input-title" name="title" placeholder="Digite" />
  		</div>
		);
	}

  function renderModalContentDeleteTask() {
		return (
      <div className={styles.field}>
        <p>Tem certeza que você deseja deletar essa tarefa?</p>
      </div>
    );
	}

  return (
    <>
       <main className={styles.container}>

        <div className={styles["list-container"]}>
          <section className={styles.section}>
            <h3 className={styles.title}>Suas tarefas de hoje</h3>

            <ul>
              {taskList.map((task, index) => {
                if (task.isFinished) return null;
                return (<li key={index}>
                  <label className={styles["checkbox-container"]}>
                    <input type="checkbox" />
                    <span className={styles.checkmark}></span>
                  </label>
                  <p>{task.title}</p>
                  <Image
                    width={18}
                    height={20}
                    src={trash}
                    alt="lixo"
                    className={styles.icon}
                    onClick={() => handleModalType("delete")}
                  />
                </li>)
              })}
            </ul>
          </section>

          <section>
            <h3 className={styles.title}>Tarefas realizadas</h3>

            <ul>
              {taskList.map((task, index) => {
                if (!task.isFinished) return null;
                return (<li key={index}>
                  <label className={styles["checkbox-container"]}>
                    <input type="checkbox" />
                    <span className={styles.checkmark}></span>
                  </label>
                  <p>{task.title}</p>
                  <Image
                    width={18}
                    height={20}
                    src={trash}
                    alt="lixo"
                    className={styles.icon}
                    onClick={() => handleModalType("delete")}
                  />
                </li>)
              })}
            </ul>
          </section>
        </div>

        <div className={styles["button-container"]}>
          <button className={styles["add-task"]} onClick={() => handleModalType()}>Adicionar nova tarefa</button>
        </div>

      </main>

      <Modal
        confirmText={modalType === 'delete' ? 'Deletar' : 'Adicionar'}
        isOpen={modalIsOpen}
        title={modalType === 'delete' ? "Deletar tarefa" : "Nova tarefa"}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
        >
          {modalType === 'delete' ? renderModalContentDeleteTask() : renderModalContentCreateTask()}
      </Modal>
    </>
  );
}