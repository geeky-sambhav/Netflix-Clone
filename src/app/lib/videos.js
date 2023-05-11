import videoData from '../data/videos.json'

import React from 'react'

const getvideos = () => {
  return (


 videoData.items.map((item)=>{
return{

  title:item.snippet.title,
  imgurl:item.snippet.thumbnails.high.url,
  id: item?.id?.videoId
}


 })
  )
}

export default getvideos