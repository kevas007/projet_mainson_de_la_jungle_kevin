import CareScale from './CareScale'
import '../styles/PlantItem.css'


function handleClick(plantName) {
    alert (`Vosu voulez achetr 1 ${plantName}? Tèes bon choix 🌱✨`)   
}


function PlantItem({cover, name, water, light, price}) {
    return(
        <li className="lmj-plant-item" onClick ={()=> handleClick}>

        <span className='lmj-plant-item-prive'>{price}</span>
        <img src={cover} alt={`${name} cover`} className="lmj-plant-item" />
        {name}
        <div>
        <CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
        </div>
        </li>
    
    )
    
}

    export default PlantItem