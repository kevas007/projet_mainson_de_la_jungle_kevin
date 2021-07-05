import Page2 from './Page2';
import Home from './Home';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';

function App() {
	return (
		<Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>  
        <Route path="/page2"  component={Page2}/>  
        </Switch>
        
      </div>
    </Router>
	)
}

export default App
