import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Body from './pages/Body';
import Footer from './pages/Footer';
import Fila from './pages/Fila';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/fila" element={<Fila />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
