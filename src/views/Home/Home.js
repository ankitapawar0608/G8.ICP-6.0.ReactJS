import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.css"

function Home() {
  return (
    <>
    <Navbar/>
    <div>


    <div class="start">
        <div>
            <h1 className="h1">Learn & become the</h1>
            <h2 className="h2">Top 1% software</h2>
            <h2 className="h2">developer</h2>
            <button className="explore-btn">Explore New Batches</button>
        </div>
        <div>
            <img src="shraddha.jpg" alt='alt' className="main-img"/>
        </div>
    </div>
      
    </div>
    </>
  )
}

export default Home