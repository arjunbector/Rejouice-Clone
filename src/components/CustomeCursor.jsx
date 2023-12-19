"use client";
import styles from "../styles/customCursor.module.css"
import { easeInOut, motion } from "framer-motion"

const CustomeCursor = (props) => {
  return (
    <motion.div
    className={styles.cursor}
    animate={{
        x:props.mousePosition.x-50,
        y:props.mousePosition.y-50
    }}
    transition={{
        type:"spring",
        ease:"easeOut",
    }}
    >
        <h5 className={styles.text}>Play Reel</h5>
    </motion.div>
  )
}

export default CustomeCursor
