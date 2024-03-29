import React, {Component} from 'react';
import { useHistory } from 'react-router-dom';
import Banner from './Banner';
import logo from '../image/logo.png';
import'../styles/Home.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// function Home ()  {
//     let  change = useHistory();

//         return (
//             <div>
//                 <Banner>
//                     <img  className="img-fluid lmj-logo"  src={logo} alt='logo-la-maison-jungle' />
//                     <h1 className='lmj-title'>La maison jungle</h1>
//                 </Banner>
//                 <div className="container d-flex justify-content-center align-content-center ">
//                     <div className="home mt-5 ">
//                         <div className="d-flex  justify-content-center align-content-center">
//                         <h1 className="text-success mb-5 ml-5 bton" > Bienvenue </h1>
//                         <img  className="img-fluid images"  src={logo} alt='logo-la-maison-jungle' />
                        
//                         </div>
//                         <button className="btn-success form-control w-50 " onClick={()=>{change.push("/Page2")} }>connexion</button>
//                     </div>
//                 </div>
//             </div>
//         );
    
// }

// export default Home;
export default class Home extends Component {
    render() {
        let dis ={
            visibilite: {
                y:20,
                transition: {delay: 1.5}
            }
        };
        return (
            <div>
            
                <Banner>
                    <img className="img-fluid lmj-logo"  src={logo} alt='logo-la-maison-jungle' />
    
                    <h1 className='lmj-title'>La maison jungle</h1>
                </Banner>
                <motion.div  initial ={{opacity:0}}
                animate={{opacity:1}}
                transition ={{delay:1.5, duration: 1.4}}
                variants ={ dis
                } className="container d-flex justify-content-center align-content-center ">
                    <div className="home mt-5 ">
                        <div className="d-flex justify-content-center align-content-center">
                            <h1 className="text-success mb-5 ml-5 bton" > Bienvenue </h1>
                            <img  className="img-fluid images"  src={logo} alt='logo-la-maison-jungle' />
                            
                        </div>
                        <button className="btn-success form-control w-50 " onClick={()=>{this.props.history.push("/Page2")} }>connexion</button>
                    </div>
                </motion.div>
            </div>
        )
    }
}
