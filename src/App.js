import './App.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import ColorButton from './ColorButton';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
      <ColorButton/>
      </RecoilRoot>
    </div>
  );
}

export default App;
