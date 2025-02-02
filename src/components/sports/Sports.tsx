import Card from "./Card"

const Sports = () => {
  return (
    <div className=" my-10   flex flex-col gap-10 mx-10">
     <div className="  grid md:grid-cols-4 grid-cols-2 gap-5 ">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
     
      </div>
      <div className="  grid md:grid-cols-4 grid-cols-2 gap-5 ">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
     
      </div>
    </div>
  )
}

export default Sports
