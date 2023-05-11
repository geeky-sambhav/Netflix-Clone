"use client"
import React from 'react'
import Banner from './components/Banner'
import Card from './components/card/card'
import SectionCards from './components/card/section-cards'
import styles from './page.module.css'
import getvideos from './lib/videos'
const page = () => {

const disneyvideos=getvideos();



  return (
    <>
<Banner title="Alice in Borderland" subtitle="Usagi" 
imgurl="download.webp"/>

<div className={styles.sectionWrapper}>

<SectionCards title="Disney" videos={disneyvideos} size="large"/>
<SectionCards title="Disney" videos={disneyvideos} size="medium"/><SectionCards title="Disney" videos={disneyvideos} size="small"/>
</div>







</>    

    
    
    )
}

export default page