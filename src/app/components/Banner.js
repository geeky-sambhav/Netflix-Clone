'use client';
import React from 'react'
import styles from './Banner.module.css'

const Banner = (props) => {
  const {title,subtitle,imgurl}=props;
  const handleOnPlay=()=>{
console.log('CLICKEDDDDD')
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
    <h3 className={styles.title}>{title}</h3>
<h3 className={styles.subtitle}>{subtitle}</h3>

<div className={styles.playBtnWrapper}>
<button className={styles.btnWithIcon} onClick={handleOnPlay}>
  
  <span className={styles.playText}>Play</span>
  
  </button></div></div>
</div>
<div 
className={styles.bannerImg}
style={{ backgroundImage: `url(${imgurl})`, width:'100%' , height:'100%',  position:'absolute' , backgroundSize:'cover' ,backgroundPosition:"50% 50%"   }}></div>


    </div>
  )
}

export default Banner