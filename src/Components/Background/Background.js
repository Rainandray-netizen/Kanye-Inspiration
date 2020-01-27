import React,{useState, useEffect} from "react"
import "./style.css"

function Background(){

  const [nasaApi,updateNasaApi] = useState(null)
  const [fetchCount,setFetchCount] = useState(0)

  const randomThru = (val)=> {
    return Math.floor(Math.random()*val)+1
  }

  const fetchNasaApi = async () =>{
    const response = await fetch(`https://api.nasa.gov/planetary/apod?date=201${7+randomThru(2)}-${randomThru(12)}-${randomThru(28)}&api_key=t3aaVafpNpyEBRcLoh2kXF5A92gZJbNB7NbfbM83`)
    const nextData = await response.json()
    updateNasaApi(nextData)
    setFetchCount(fetchCount + 1)
  }

  // if(!nasaApi||nasaApi.media_type==="video"){
  //   fetchNasaApi()
  // }

  useEffect(()=>{
    if (!nasaApi || nasaApi.media_type==="video"){
      fetchNasaApi()
    }
  }, [fetchCount])
  //first time it loads the array contains null
  //second time the component loads the array contains things

  return(
    <figure>
      {nasaApi && <img src={nasaApi.url} alt={nasaApi.desc}/>}
    </figure>
  )
}

export default Background