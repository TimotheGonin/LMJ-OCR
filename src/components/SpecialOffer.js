import { plantList } from "../datas/plantList";
function SpecialOffer(){
  return (
    <div>
      {plantList.map((plant)=>(
        plant.isSpecialOffer ? <span className='lmj-sales' key={`${plant.name}-SpecialOffer`}></span> : null
      ))}
    </div>
  )
}
export default SpecialOffer