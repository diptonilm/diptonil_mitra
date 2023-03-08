import './App.css';
import Heading from './First';
import InputFields from './Second';
import Button from './Third';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading/>
        <InputFields/>
        <Button/>
      </header>
    </div>
  );
}

export default App;
