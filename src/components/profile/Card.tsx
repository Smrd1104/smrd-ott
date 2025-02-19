import img from "../../assets/JioStar.jpg"
import plus from "../../assets/plus-logo.png"
const card = () => {
  return (
    <div>
        <div className='flex flex-wrap gap-5'>
            <img src={img} alt='img' className='w-24 h-24 rounded-full'/>
            <img src={plus} alt='img' className='w-24 h-24  bg-white'/>
        </div>
    </div>
  )
}

export default card