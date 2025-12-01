import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {ACCESS_KEY} from '../config/constants.js'

const App11 = () => {
    const[imageList,setImageList]=useState([])
    useEffect(()=>{
        axios.get(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&per_page=30`)
        .then((response)=>setImageList(response.data))

    },[])
  return (
    <div>
        <div style={{
            display:'flex', flexWrap:'wrap', justifyContent:'center'
        }}>
            {imageList.map((image)=>{
                return(
                    <div key={image.id}>
                    <img
                    style={{
                        height:'250px', width:'250px',
                        objectFit:'cover'
                    }} 
                    alt={image.alt_description}
                    src={image.urls.regular}/>
                    <br/>
                    <small>{image.alt_description? image.alt_description
                    :"react"}</small>
                </div>
                )

            })}
        </div>
    </div>
  )
}

export default App11