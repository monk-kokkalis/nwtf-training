import Style from './Courses.module.scss';
import Header from 'components/Header/Header';
// components
import Sidebar from './components/Sidebar/Sidebar';
function Courses() {
    return (
        <div className={Style.Main}>
            <Header />
            <section className="content">
                <Sidebar />
            </section>
        </div>
    )
}

export default Courses;