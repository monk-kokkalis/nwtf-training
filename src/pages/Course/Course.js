import Style from './Course.module.scss';
// context
import Provider, {Context} from './context/Provider';
import actions from './context/reducers/modules/actions';
// components
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import SidebarTemplate from './components/SidebarTemplate/SidebarTemplate';
import VideoSection from './components/VideoSection/VideoSection';
import QuizSection from './components/QuizSection/QuizSection';
// router
import {Routes, Route} from 'react-router-dom';
function Course() {
    return (
        <div className={Style.Main}>
            <Header />
            <Provider>
                <Context.Consumer>
                    {context => 
                        <section className="content">
                            <Sidebar
                                closeHandler={() => {
                                    context.moduleDispatch({
                                        type: actions.HIDE_SIDEBAR
                                    })
                                }}
                                visible={context.moduleState.sidebarVisible}
                                template={<SidebarTemplate />}
                            />
                            <Routes>
                                <Route index element={<VideoSection />} />
                                <Route path="/video" element={<VideoSection />} />
                                <Route path="/quiz" element={<QuizSection />} />
                            </Routes>
                        </section>
                    }
                </Context.Consumer>
            </Provider>
        </div>
    )
}

export default Course;