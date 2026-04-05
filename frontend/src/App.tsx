import { Routes, Route } from 'react-router-dom'
import Home from './Home.tsx'
import About from './About.tsx'
import Forum from './Forum.tsx'
import UploadPage from './UploadPage.tsx'
import CoursePage1 from './CoursePage1.tsx'
import CoursePage2 from './CoursePage2.tsx'
import CoursePage3 from './CoursePage3.tsx'
import CoursePage4 from './CoursePage4.tsx'
import LessonPage1 from './LessonPage1.tsx'
import LessonPage2 from './LessonPage2.tsx'
import LessonPage3 from './LessonPage3.tsx'
import LessonPage4 from './LessonPage4.tsx'
import Profile from './profile.tsx'
import FriendProfile from './FriendProfile.tsx'

function App() {


  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/forum" element={<Forum/>}/>
        <Route path='/uploadpage' element={<UploadPage/>}/>
        <Route path="/CoursePage1" element={<CoursePage1/>}/>
        <Route path="/CoursePage2" element={<CoursePage2/>}/>
        <Route path="/CoursePage3" element={<CoursePage3/>}/>
        <Route path="/CoursePage4" element={<CoursePage4/>}/>
        <Route path="/lessonpage1" element={<LessonPage1/>}/>
        <Route path="/lessonpage2" element={<LessonPage2/>}/>
        <Route path="/lessonpage3" element={<LessonPage3/>}/>
        <Route path="/lessonpage4" element={<LessonPage4/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/friendprofile" element={<FriendProfile/>}/>
    </Routes>
  )
}

export default App