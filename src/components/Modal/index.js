import styles from "./styles.module.scss";

export function Modal({ children, title, isOpen, onClose, onConfirm, ...props}) {
  function handleCloseClick() {
		onClose();
	}

	function handleConfirmClick(event) {
		event.preventDefault();
		console.log(event);
		onConfirm(event);
	}

	if (!isOpen) return null;

	return (
		<div className={styles.wrapper}>
			<div className={styles["modal-container"]}>
				<header>
					<h2>{title}</h2>
				</header>

				<div className={styles["modal-form"]}>
					<form onSubmit={handleConfirmClick}>

						{children}

						<div className={styles.footer} >
						<button type="submit" className={props.confirmText === "Deletar" ? styles['button-delete'] : styles['button-confirm']} >
							{props.confirmText}
						</button>

						<button onClick={handleCloseClick} className={styles['button-cancel']}>
							Cancelar
						</button>
					</div>
					</form>

				</div>
			</div>
		</div>
	);
}