import HeroSlider from '../../components/hero'
import Sports from '../../components/sports/Sports'
import Movies from '../../components/movies/Movies'
import Tv from '../..//components/tv/Tv'
const index = () => {
  return (
    <div className=''>
        <HeroSlider/>
        <div className='md:-mt-14 -mt-56'>
        <Tv/>
        <Movies/>
        <Sports/>
        
        </div>
       
       

    </div>
  )
}

export default index