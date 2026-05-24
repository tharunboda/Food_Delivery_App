import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Nav_bar/Header/Header'
import { ExploreMenu } from '../../Components/Explore_menu/ExploreMenu'
import { FoodDisplay } from '../../Components/FoodDisplay/FoodDisplay'
const Home = () => {

  const[category,setCategory]=useState('All')

  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home