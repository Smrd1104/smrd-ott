import img from '../../assets/the-boys.jpeg'
const Card = () => {
  return (
    <div className=''>
        <div className=''>
        <img src={img} className='w-[300px] h-[250px] rounded-md border shadow-lg'/>
        </div>
    </div>
  )
}

export default Card