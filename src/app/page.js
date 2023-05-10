import React from 'react'
import Banner from './components/Banner'
import Card from './components/card/card'

const page = () => {
  return (
    <>
<Banner title="Alice in Borderland" subtitle="Usagi" 
imgurl="download.jpg"/>
    <Card imgurl="/download.webp" size="large" />
    <Card imgurl="/download.webp" size="medium" />
    <Card imgurl="/download.webp" size="small" />

</>    

    
    
    )
}

export default page