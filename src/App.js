import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <HelloWord />
      <SayMyName nome="Lucas Alves" />
      <SayMyName nome="Lucas Yohan" />
      <SayMyName nome={nome} />
      <Pessoa nome="João" idade="22" profissao="programador" foto="https://via.placeholder.com/150"/>
      <List />
    </div>
  );
}

export default App;
