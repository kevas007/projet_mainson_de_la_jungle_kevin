import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({cart , updateCarte}){
    let [activeCategory, setActiveCategory] = useState('')
    let category = plantList.reduce( 
        (acc, item) =>
        acc.includes(item.category)? acc : acc.concat(item.category),[]
    )
    function addToCart(name, price) {
        let currentPlantAdded = cart.find((plant)=> plant.name === name)
        if(currentPlantAdded){
            let cartFliteredCurrentPlant = cart.filter((plant)=> plant.name !==name)
            updateCarte([
                ...cartFliteredCurrentPlant,{
                    name, price , amount:  currentPlantAdded.amount + 1},
                ])
        
    }
    else{
        updateCarte([...cart,{name, price, amount:1}])
    }

}
return (
    <div className="lmj-shopping-list">
    <categories
        categories ={categories}
        setActiveCategory ={setActiveCategory}
        activeCategory ={activeCategory}
    />
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
    </div>
    )
    }