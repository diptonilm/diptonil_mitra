
import './App.css';
import EventLogger from './HandleClick';
import {handleMouseOver} from "./HandleClick";
import {handleMouseOut} from "./HandleClick";


function App() {
  return (
    <div className="App">
      <EventLogger/>
      <handleMouseOver/>
      <handleMouseOut/>
    </div>
  );
}

export default App;
