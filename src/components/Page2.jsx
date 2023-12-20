import styles from "../styles/Page2.module.css"
const Page2 = () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={`${styles["header-left"]}`}>
            <h3 className={`${styles["header-heading"]}`}>Full-service creative agency.</h3>
            <h3 className={`${styles["header-heading"]}`}>Two engagement models.</h3>
        </div>
        <div className={`${styles["header-right"]}`}>Paris & San Diego</div>
      </div>
      <div className={styles.line}></div>
    </main>
  )
}

export default Page2
