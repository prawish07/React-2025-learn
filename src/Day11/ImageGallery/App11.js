import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {ACCESS_KEY} from '../config/constants.js'

const App11 = () => {
    const[imageList,setImageList]=useState([])
    const [tempimageList,setTempImageList]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        document.title="Image Gallery App"
        axios.get(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&per_page=30`)
        .then((response)=>{setImageList(response.data)
            setTempImageList(response.data)
            setIsLoading(false)
        })

    },[])
    const searchImage=(query)=>{
        if(query===""){
            setImageList(tempimageList)
        }                          
        else {const filteredImageList=imageList.filter((image)=>{
            image.alt_description=
            image.alt_description ==null? "react"
            :image.alt_description
            return image.alt_description.includes(query)

        })
        setImageList(filteredImageList)}
    }
  return (
    <div>
        <center><input 
        onChange={(e)=>searchImage(e.target.value)}
        type='text'
        style={{height:'40px',width:'50%'}}
        placeholder='Search Images'/></center>
        <div style={{
            display:'flex', flexWrap:'wrap', justifyContent:'center'
        }}>
            {imageList.length>0? imageList.map((image)=>{
                return(
                    <div key={image.id}>
                    <img
                    style={{
                        height:'250px', width:'250px',
                        objectFit:'cover',
                        margin:'10px'
                    }} 
                    alt={image.alt_description}
                    src={image.urls.regular}/>
                    <br/>
                    <small>{image.alt_description? image.alt_description.substring(0,20)
                    :"react"}</small>
                </div>
                )

            }):isLoading?"Loading...!!"
            :"no image found "}
        </div>
    </div>
  )
}

export default App11