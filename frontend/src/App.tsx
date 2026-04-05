import Forum from './Forum.tsx'
import { Routes, Route } from 'react-router-dom'
import Home from './Home.tsx'
import About from './About.tsx'
import CoursePage from './CoursePage.tsx'
import LessonPage from './LessonPage.tsx'

function App() {


  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/forum" element={<Forum/>}/>
        <Route path="/coursepage" element={<CoursePage/>}/>
        <Route path="/lessonpage" element={<LessonPage/>}/>
    </Routes>
  )
}

export default App