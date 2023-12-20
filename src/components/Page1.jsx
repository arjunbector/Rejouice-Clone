"use client";
import Navbar from "./Navbar";
import styles from "../styles/Page1.module.css";
import CustomeCursor from "./CustomeCursor";
import { useState } from "react";
import { motion } from "framer-motion";

const Page1 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };
  const text = ["r", "e", "j", "o", "u", "i", "c", "e"];
  const handleMouseEnter = () => {
    setScale(1);
  };
  const handleMouseLeave = () => {
    setScale(0);
  };

  const container = {
    hidden: { opacity: 0,
    y:100 },
    show: {
      opacity: 1,
      y:0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y:100 },
    show: { opacity: 1, y:0 },
  };

  return (
    <main
      className={styles.main}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Navbar />
      <div className={styles.page1}>
        <CustomeCursor mousePosition={mousePosition} scale={scale} />
        <video
          className={styles.video}
          autoPlay
          loop
          muted
          src="/assets/bgVideo.mp4"
        ></video>
        <div className={`${styles["page1-content"]}`}>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className={`${styles["main-heading"]}`}
          >
            <motion.span variants={item} className={styles.span}>r</motion.span>
            <motion.span variants={item} className={styles.span}>e</motion.span>
            <motion.span variants={item} className={styles.span}>j</motion.span>
            <motion.span variants={item} className={styles.span}>o</motion.span>
            <motion.span variants={item} className={styles.span}>u</motion.span>
            <motion.span variants={item} className={styles.span}>i</motion.span>
            <motion.span variants={item} className={styles.span}>c</motion.span>
            {/* <motion.span variants={item} className={styles.span}>e</motion.span> */}
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Page1;
