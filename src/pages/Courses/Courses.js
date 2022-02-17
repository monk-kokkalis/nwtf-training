import Style from './Courses.module.scss';
// context
import Provider, {Context} from './context/Provider';
// components
import Header from 'components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import ContentPane from './components/ContentPane/ContentPane';
import SidebarTemplate from './components/SidebarTemplate/SidebarTemplate';
// redux
import actions from './context/reducers/filters/actions';
function Courses() {
    return (
        <div className={Style.Main}>
            <Header />
            <Provider>
                <Context.Consumer>
                    {context => 
                        <section className="content">
                            <Sidebar
                                closeHandler={() => {
                                    context.filterDispatch({
                                        type: actions.HIDE_FILTERS_SIDEBAR
                                    })
                                }}
                                visible={context.filterState.sidebarVisible}
                                template={<SidebarTemplate />}
                            />
                            <ContentPane />
                        </section>
                    }
                </Context.Consumer>
            </Provider>
        </div>
    )
}

export default Courses;