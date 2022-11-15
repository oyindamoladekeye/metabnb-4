import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Placetostay from './pages/Placetostay';
import "./styles/header.css";
import "./styles/home.css"

function App() {
  return (
    <div className="App">
      <div className="main">
        <Navbar />
      </div>
      <Routes>
        <Route path="/metabnb-4" element={<Home />}/>
        <Route path="placetostay" element={<Placetostay />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
