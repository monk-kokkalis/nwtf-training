import Style from './Course.module.scss';
// components
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import SidebarTemplate from './components/SidebarTemplate/SidebarTemplate';
// video
import setUpRouter from 'assets/video/setup-router.mp4';
function Course() {
    return (
        <div className={Style.Main}>
            <Header />
            <section className="content">
                <Sidebar visible={true} template={<SidebarTemplate />} />
                <section className="video">
                    <video width="100%" height="400px" controls>
                        <source src={setUpRouter} type="video/mp4" />
                    </video>
                </section>
            </section>
        </div>
    )
}

export default Course;