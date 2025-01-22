import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Paginas/Home";
import Empresa from "./components/Paginas/Empresa";
import Contato from "./components/Paginas/Contato";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/empresa" Component={Empresa}></Route>
        <Route path="/contatos" Component={Contato}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
