import React,{useState, useEffect} from "react"
import "./style.css"

function QuoteText(){

  const [yeQuote,updateYeQuote] = useState(null)
  const [error,setError] = useState(null)

  // if(!yeQuote){
  //   fetch("https://api.kanye.rest/")
  //   .then(api=>api.json())
  //   .then(jsonApi=>updateYeQuote(jsonApi))
  //   .catch(e=>setError(e))
  // }

  const fetchYeQuote = async () => {
    const response = await fetch("https://api.kanye.rest/")
    //all code below "await" will wait for the api to GET
    //you must have an async function to use await
    const nextData = await response.json()
      //without this await, nextData will return a promise instead of the data
      updateYeQuote(nextData)
  }

  // if(!yeQuote){
  //   fetchYeQuote()
  // }

  useEffect(()=>{
    fetchYeQuote()
  },[])
  //run this when the 2nd arg changes, the 2nd arg must be an array.
  //in this case, it will only run once
  //you could put an expression in the array, which would return a boolean

  if (error) {
    return(
      <div>
        Oh no something did bad: {error.message}
      </div>
    )
  }

  return(
    <div className="textwrapper">
      {yeQuote && <h1>{yeQuote.quote}</h1>}
    </div>
  )
}

export default QuoteText