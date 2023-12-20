"use client";
import styles from "../styles/customCursor.module.css"
import { motion } from "framer-motion"

const CustomeCursor = (props) => {
  return (
    <motion.div
    className={styles.cursor}
    animate={{
        x:props.mousePosition.x-50,
        y:props.mousePosition.y-50,
        scale:props.scale
    }}
    transition={{
        type:"spring",
        stiffness:100,
        ease:"easeOut",
        scale:{
            type:"linear",
        }
    }}
    >
        <h5 className={styles.text}>Play Reel</h5>
    </motion.div>
  )
}

export default CustomeCursor
