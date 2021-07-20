import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light, price }) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick}>
		<div id ="mouv">
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' id="mouve" src={cover} alt={`${name} cover`} />
		</div>
			{name} 
			<div className="d-flex">
				<CareScale  className="pl-3 pr-3"  careType='water' scaleValue={water} />
				<p id='posit' >eau</p>
				<CareScale careType='light' scaleValue={light} />
				<p id='posit'>Soleil</p>
			</div>
		</li>
	)
}

export default PlantItem
