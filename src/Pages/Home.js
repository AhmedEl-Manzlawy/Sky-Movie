import React from 'react'
import PopuSlider from '../components/Sliders/PopuSlider'
import TopSlider from './../components/Sliders/TopSlider';
import UpcSlider from './../components/Sliders/UpcSlider';
import NowpSlider from '../components/Sliders/NowpSlider';

const Home = () => {
  return (
    <div className='container py-3'>
    <h6>pouplar</h6>
    <PopuSlider />
    <h6>Top Rated</h6>
    <TopSlider/>
    <h6>Up Coming</h6>
    <UpcSlider />
    <h6>Playing Now</h6>
    <NowpSlider />
    </div>
  )
}

export default Home