// import logo from './logo.svg';
import './App.css';
import Listing from './components/Listing';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
	return (
    <Router>
		<div className="App">
			<NavBar />
      {/* <Sidebar/> */}
			<header className="App-header">
      <Switch>
        <Route exact path={["/", "/home"]} component={Home}/>
      </Switch>
			</header>
		</div>
    </Router>
	);
}

export default App;
