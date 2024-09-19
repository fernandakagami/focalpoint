'use client';

import { useState } from 'react';

import Image from "next/image";

import trash from "@/assets/trash.png";
import { Modal } from "@/components/Modal";

import styles from "./styles.module.scss";

export function ListTable() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  function handleModalType(type = "") {
    setModalIsOpen(true);
    setModalType(type);
  }

  function handleModalConfirm() {
		setModalIsOpen(false);
    setModalType("");
	}

	function handleModalClose() {
		setModalIsOpen(false);
    setModalType("");
	}

  function renderModalContentCreateTask() {
		return (
			<div className={styles["modal-form"]}>
				<form onSubmit={() => handleModalConfirm}>
					<div className={styles.field}>
						<label htmlFor="input-title">Título</label>
						<input type="text" id="input-title" placeholder="Digite" />
					</div>
				</form>
			</div>
		);
	}

  function renderModalContentDeleteTask() {
		return (
			<div className={styles["modal-form"]}>
				<form onSubmit={() => handleModalConfirm}>
					<div className={styles.field}>
						<p>Tem certeza que você deseja deletar essa tarefa?</p>
					</div>
				</form>
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

              <li>
                <label className={styles["checkbox-container"]}>
                  <input type="checkbox" />
                  <span className={styles.checkmark}></span>
                </label>
                <p>Lavar as mãos</p>
                <Image
                  width={18}
                  height={20}
                  src={trash}
                  alt="lixo"
                  className={styles.icon}
                  onClick={() => handleModalType("delete")}
                />
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