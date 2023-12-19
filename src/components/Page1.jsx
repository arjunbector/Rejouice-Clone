"use client";
import Navbar from "./Navbar";
import styles from "../styles/Page1.module.css";
import CustomeCursor from "./CustomeCursor";
import { useState } from "react";

const Page1 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };
  return (
    <main className={styles.main} onMouseMove={handleMouseMove}>
      <Navbar />
      <div className={styles.page1}>
        <CustomeCursor mousePosition={mousePosition}/>
        <video
          className={styles.video}
          autoPlay
          loop
          muted
          src="/assets/bgVideo.mp4"
        ></video>
        <div className={`${styles["page1-content"]}`}>
          <h1 className={`${styles["main-heading"]}`}>
            <span className={styles.span}>r</span>
            <span className={styles.span}>e</span>
            <span className={styles.span}>j</span>
            <span className={styles.span}>o</span>
            <span className={styles.span}>u</span>
            <span className={styles.span}>i</span>
            <span className={styles.span}>c</span>
            <span className={styles.span}>e</span>
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Page1;
