import Style from './Course.module.scss';
// context
import Provider, {Context} from './context/Provider';
import actions from './context/reducers/modules/actions';
// components
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import SidebarTemplate from './components/SidebarTemplate/SidebarTemplate';
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
                            <section className="video">
                                <video width="100%" height="400px" controls key={context.moduleState.currentVideo}>
                                    <source src={context.moduleState.currentVideo} type="video/mp4" />
                                </video>
                            </section>
                        </section>
                    }
                </Context.Consumer>
            </Provider>
        </div>
    )
}

export default Course;