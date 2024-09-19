import styles from "./styles.module.scss";

export function CreateTaskModal({ children, title, isOpen, isClose, onConfirm, ...props}) {
  function handleCloseClick(e) {
		props.onClose?.('click', e.target);
	}

	function handleConfirmClick(e) {
		props.onConfirm?.();
	}

	function handleKeyDown(e) {
		if (e.key === 'Escape') props.onClose?.('esc', e.target);
	}

	if (!isOpen) return null;

	return (
		<div className={styles.wrapper} onKeyDown={handleKeyDown}>
			<div className={styles["modal-container"]}>
				<header>
					<h2>{title}</h2>
				</header>

				{children}

				<div className={styles.footer} >
					<button onClick={handleConfirmClick} className={styles['button-confirm']} >
						{props.footer?.confirmText ?? 'Adicionar'}
					</button>

					<button onClick={handleCloseClick} className={styles['button-cancel']}>
						{props.footer?.cancelText ?? 'Cancelar'}
					</button>
				</div>
			</div>
		</div>
	);
}