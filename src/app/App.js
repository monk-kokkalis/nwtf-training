import Style from './App.module.scss';
import {Routes, Route} from 'react-router-dom';
// pages
import LogIn from 'pages/LogIn/LogIn';
import Register from 'pages/Register/Register';
function App() {
    return (
        <div className={Style.Main}>
            <Routes>
                <Route path="/" element={<LogIn />}/>
                <Route path="/register" element={<Register />}/>
            </Routes>
        </div>
    );
}

export default App;
