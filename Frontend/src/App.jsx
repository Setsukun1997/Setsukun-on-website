import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Journey from './pages/Journey';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Register from './pages/Register';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}