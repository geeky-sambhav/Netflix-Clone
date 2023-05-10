"use client"
import React from 'react'
import cls from 'classnames'
import Image from 'next/image';
import styles from "./card.module.css"
import { motion } from "framer-motion"
const Card = (props) => {
    const{imgurl,size}=props
const classMap={
large:styles.lgItem,
medium: styles.mdItem,
small: styles.smItem

}

  return (
    <div 
    

    className={styles.container}>
   <motion.div
   whileHover={{ scale: 1.1}}
   className={cls(styles.imgMotionWrapper,classMap[size])}>
 <Image 
      src={imgurl}
      alt="Picture of the author"
fill
className={styles.cardImg}
      />



    </motion.div> 
    </div>
  )
}

export default Card