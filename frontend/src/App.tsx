import Forum from './Forum.tsx'
import { Routes, Route } from 'react-router-dom'
import Home from './Home.tsx'
import About from './About.tsx'

function App() {


  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/forum" element={<Forum/>}/>
    </Routes>
  )
}

export default App