import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function cart({cart, updateCart}) {

    let [isOpen, setIsOpen] = useState(true)
    let total = cart.reduce(
        (acc, planType)=> acc + planType.amount * planType.price,0)
        useEffect(()=>{
            document.title =`LMJ ${total}€ d'achats`
        }, [total])
    return isOpen? (
        <div className ="lmj-cart">
            <button className= 'lmj-cart-toogle-button' onClick={()=> setIsOpen(false)}
            >
                Fermer
            </button>

            {cart.length >0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price , amount}, index) =>(
                            <div key={`${name} -${index}`}>
                                {name} {price} x {amoun}
                            </div>
                        ))}
                    </ul>
                    <h3>Total : {total}€</h3>
                    <button onClick ={()=> updateCart([])}> Vider le panier </button>
                </div> ) :(
                    <div>Votre panier est vide</div>
                )}
        </div>
    ) :(
        <div className="lmj-cart-closed" onClick={()=>setIsOpen(true)}>
            <button className="lmj-cart-toggle-button">
                Ouvrir le panier
            </button>
        </div>

    )
}
export default Cart