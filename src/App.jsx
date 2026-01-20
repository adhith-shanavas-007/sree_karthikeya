import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './index.css'
import HeroSlider from './Components/HeroSlider/HeroSlider'
import InfoBanner from './Components/InfoBanner/InfoBanner'
import WhoWeAre from './Components/WhoWeAre/WhoWeAre'
import BestCollections from './Components/BestCollections/BestCollections'
import FeaturedProductsHeader from './Components/FeaturedProductsHeader/FeaturedProductsHeader'
import FeaturedProductsGrid from './Components/FeaturedProductsGrid/FeaturedProductsGrid'
import PopularCategories from './PopularCategories/PopularCategories'
import Footer from './Footer/Footer'


const App = () => {
  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden', position: 'relative' }}>
      <Navbar/>
      <HeroSlider/>
      <InfoBanner/>
      <WhoWeAre/>
      <BestCollections/>
      <FeaturedProductsHeader/>
      <FeaturedProductsGrid/>
      <PopularCategories/>
      <Footer/>
    </div>
  )
}

export default App