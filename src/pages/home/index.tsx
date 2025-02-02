import HeroSlider from '../../components/hero'
import Sports from '../../components/sports/Sports'

const index = () => {
  return (
    <div className=''>
        <HeroSlider/>
        <Sports/>
        {/* <div className='grid grid-cols-4 gap-5 px-10 py-10 container mx-auto'>
        <VideoCard/>
        <VideoCard/> 
        <VideoCard/>
         <VideoCard/>
         </div> */}
    </div>
  )
}

export default index