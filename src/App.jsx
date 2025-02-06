import { useState} from 'react'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import HomePage from './pages/HomePage';
import Blanko from './pages/Blanko';
import Slido from './pages/Slido';
import Tetro from './pages/Tetro';
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/blanko" element={<Blanko/>} />
          <Route path="/slido" element={<Slido/>} />
          <Route path="/tetro" element={<Tetro/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
