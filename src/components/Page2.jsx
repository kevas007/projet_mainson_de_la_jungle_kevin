import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../image/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css';
import { motion } from "framer-motion";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
function Page2() {
    let savedCart = localStorage.getItem('cart')
	let [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
	let  change = useHistory();
	let dis ={
		visibilite: {
			y:20,
			transition: {delay: 2}
		}
	};
	return (
		<div>
			<Banner className="d-flex flex-column" >
				<div className="d-flex mx-5">
					
				<img  className="img-fluid lmj-logo"  src={logo} alt='logo-la-maison-jungle' />
				<h1 className='lmj-title'>La maison jungle</h1>
				</div>
				<button  className="btn-success rounded-3" onClick={()=>{change.push("/")} }>Home</button>
			</Banner>
			<motion.div initial ={{opacity:0}}
                animate={{opacity:1}}
                transition ={{delay:1.5, duration: 1.5}}
                variants ={ dis
                } className='lmj-layout-inner'>
				<Cart  cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</motion.div>
			<Footer />
		</div>
	)
}

export default Page2