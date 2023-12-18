import Navbar from "./Navbar";
import styles from "../styles/Page1.module.css";

const Page1 = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.page1}>
        <video className={styles.video} autoPlay loop muted src="/assets/bgVideo.mp4"></video>
        <div className={`${styles["page1-content"]}`}></div>
      </div>
    </main>
  );
};

export default Page1;
