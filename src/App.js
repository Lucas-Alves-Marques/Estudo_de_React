import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';


function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <h1>Testando Evento</h1>
      <Evento Botao={'1'} />
      <Evento Botao={'2'} />
      <Form />
    </div>
  );
}

export default App;
