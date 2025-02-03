import HeroSlider from '../../components/hero'
import Sports from '../../components/sports/Sports'
import Movies from '../../components/movies/Movies'
import Tv from '../..//components/tv/Tv'
const index = () => {
  return (
    <div className='py-10'>
        <HeroSlider/>
        <Tv/>
        <Movies/>
        <Sports/>
       
       

    </div>
  )
}

export default index