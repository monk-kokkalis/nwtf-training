import Style from './Courses.module.scss';
import Header from 'components/Header/Header';
// context
import Provider, {Context} from './context/Provider';
// components
import Sidebar from './components/Sidebar/Sidebar';
import ContentPane from './components/ContentPane/ContentPane';
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
                                clickCallback={() => {
                                    context.filterDispatch({
                                        type: actions.HIDE_FILTERS_SIDEBAR
                                    })
                                }}
                                visible={context.filterState.sidebarVisible}
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