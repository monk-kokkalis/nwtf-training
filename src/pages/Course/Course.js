import Style from './Course.module.scss';
// components
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
// video
import setUpRouter from 'assets/video/setup-router.mp4';
function Course() {
    return (
        <div className={Style.Main}>
            <Header />
            <section className="content">
                <Sidebar visible={true} />
            </section>
            <section className="video">
                <video width="100%" height="400px" controls>
                    <source src={setUpRouter} type="video/mp4" />
                </video>
            </section>
        </div>
    )
}

export default Course;