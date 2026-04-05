import { Routes, Route } from 'react-router-dom'
import Home from './Home.tsx'
import About from './About.tsx'

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
  )
}

export default App