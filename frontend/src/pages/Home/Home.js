import React from 'react'
import './Home.css'
import Headers from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownlode from '../../components/AppDownlode/AppDownlode'

const Home = () => {

  const [category, setCategory] = React.useState("All")

  return (
    <div>
      <Headers />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownlode />
    </div>
  )
}

export default Home
