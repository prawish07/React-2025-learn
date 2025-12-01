import React,{useEffect} from 'react'
import axios from 'axios'

const App10 = () => {
    useEffect(()=>{
        // fetch(`https://numverify.com/pricing.com`)
        // .then((response)=>console.log(response))
        axios.get(`http://numbersapi.com/1`)
        .then((response)=>console.log(response))

    },[])
  return (
    <div>App10</div>
  )
}

export default App10