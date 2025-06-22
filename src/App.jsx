import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Project } from './pages/Project';
import { Contact } from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
