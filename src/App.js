import './App.css';
import BemVindo from './components/Bemvindo';
import SeuNome from './components/Seunome';
import { useState } from 'react';

function App() {

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>Testando State Lift</h1>
      <SeuNome setNome={setNome} />
      <BemVindo nome={nome}/>
    </div>
  );
}

export default App;
