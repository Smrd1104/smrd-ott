import HeroSlider from '../../components/hero'
import Sports from '../../components/sports/Sports'
import Movies from '../../components/movies/Movies'
import Tv from '../..//components/tv/Tv'
const index = () => {
  return (
    <div className=''>
        <HeroSlider/>
        <div className='px-2'>
        <Tv/>
        <Movies/>
        <Sports/>
        </div>
       
       

    </div>
  )
}

export default index