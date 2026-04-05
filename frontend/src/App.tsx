import { Routes, Route } from 'react-router-dom'
import Home from './Home.tsx'
import About from './About.tsx'
import Forum from './Forum.tsx'
import UploadPage from './UploadPage.tsx'
import CoursePage from './CoursePage.tsx'
import LessonPage from './LessonPage.tsx'
import Profile from './profile.tsx'

function App() {


  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/forum" element={<Forum/>}/>
        <Route path='/uploadpage' element={<UploadPage/>}/>
        <Route path="/coursepage" element={<CoursePage/>}/>
        <Route path="/lessonpage" element={<LessonPage/>}/>
        <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App