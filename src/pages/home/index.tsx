import HeroSlider from '../../components/hero'
import Sports from '../../components/sports/Sports'
import Movies from '../../components/movies/Movies'
import Tv from '../../components/tv/Tv'
import Category from '../category/index'

import BottomNav from '../../components/navbar/BottomNav'
const index = () => {
  return (
    <div className=''>
        <HeroSlider/>
        <div className='md:-mt-14 -mt-96 '>
        <Tv/>
        <Movies/>
        <Sports/>
        <Category/>
       
        <BottomNav/>
        
        </div>
       
       

    </div>
  )
}

export default index