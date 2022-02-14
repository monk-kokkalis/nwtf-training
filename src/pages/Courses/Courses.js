import Style from './Courses.module.scss';
import Header from 'components/Header/Header';
// context
import Provider from './context/Provider';
// components
import Sidebar from './components/Sidebar/Sidebar';
import ContentPane from './components/ContentPane/ContentPane';
function Courses() {
    return (
        <div className={Style.Main}>
            <Header />
            <Provider>
                <section className="content">
                    <Sidebar />
                    <ContentPane />
                </section>
            </Provider>
        </div>
    )
}

export default Courses;