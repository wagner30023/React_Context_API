import './App.css';

// 1 - config react router, sem links
import { BrowserRouter, Routes ,Route} from 'react-router-dom';

// 2 - adicionando links
// components
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">
      <h1> Context </h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
