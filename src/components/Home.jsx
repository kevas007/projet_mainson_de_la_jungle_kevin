
import { useHistory } from 'react-router-dom';
import Banner from './Banner';
import logo from '../image/logo.png';
import'../styles/Home.css';
function Home ()  {
    let  change = useHistory();

        return (
            <div>
            <Banner>
				<img  className="img-fluid"  src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
        <div className="container">
        <div className="home mt-5 ">
            <h1 className="text-success mb-5"> Bienvenue </h1>
                <button onClick={()=>{change.push("/Page2")} }>connexion</button>
            </div>
        </div>
            </div>
        );
    
}

export default Home;