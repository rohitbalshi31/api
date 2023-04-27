import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Posts from './pages/Posts';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
