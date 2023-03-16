import React, { useState } from "react";
import { Link, useLocation } from "wouter";

const POPULAR_GIFS = ["Pandas", "Carros", "Comida", "Galletas"];

export default function Home() {
  const[keyword, setKeyword] = useState('')
  const[path, pushLocation] = useLocation()

  
  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
    console.log(keyword)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value);
  }

  return (
    <>
      <h3 className="App-title">Los gifs más populares</h3>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' value={keyword} />
      </form>
      <ul>
      {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>   
      ))} 
      </ul>
    </>
  )
}

