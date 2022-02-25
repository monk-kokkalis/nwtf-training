import Style from './App.module.scss';
import {Routes, Route} from 'react-router-dom';
// pages
import Course from 'pages/Course/Course';
import Courses from 'pages/Courses/Courses';
import LogIn from 'pages/LogIn/LogIn';
import Register from 'pages/Register/Register';
function App() {
    return (
        <div className={Style.Main}>
            <Routes>
                <Route path="/" element={<Register />}/>
                <Route path="/course/*" element={<Course />}/>
                <Route path="/courses" element={<Courses />}/>
                <Route path="/login" element={<LogIn />}/>
                <Route path="/register" element={<Register />}/>
            </Routes>
        </div>
    );
}

export default App;
