import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../image/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import { useHistory } from 'react-router-dom';
function Page2() {
    let savedCart = localStorage.getItem('cart')
	let [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
	let  change = useHistory();

	return (
		<div>
			<Banner className="d-flex flex-column" >
				<div className="d-flex mx-5">
					
				<img  className="img-fluid"  src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
				</div>
				<button  className="btn-success" onClick={()=>{change.push("/")} }>Home</button>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default Page2