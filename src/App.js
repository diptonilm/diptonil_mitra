import './App.css';
import { One } from './firstcomponent';
import { Two } from './secondcomponent';
import { Three } from './thirdcomponent';
import { Four } from './fourthcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <One/>
        <Two/>
        <Three/>
        <Four/>
      </header>
    </div>
  );
}

export default App;
