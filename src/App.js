import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/AboutUs' Component={AboutUs}></Route>
          <Route path='/Login' Component={Login}></Route>
          <Route path='/Register' Component={Register}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;


