import Image from "next/image";

import logo from "@/assets/logo.png";

import styles from "./styles.module.scss";

export function LogoHeader() {
  return (
    <header className={styles.header}>
      <Image
        src={logo}
        alt="Logo da FocalPoint"
        width={150}
        height={36}
      />
      <p className={styles.welcome}>Bem-vindo de volta, Marcus</p>
      <p className={styles["date-information"]}>Segunda, 01 de dezembro de 2025</p>
    </header>
  );
}