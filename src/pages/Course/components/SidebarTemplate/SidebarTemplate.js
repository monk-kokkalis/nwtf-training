import {useContext} from 'react';
import {Context} from '../../context/Provider';
import Button from 'elements/Button/Button';
import Style from './SidebarTemplate.module.scss';
import Accordion from 'elements/Accordion/Accordion';
// context
import actions from '../../context/reducers/modules/actions';
// elements
import Checkbox from '@mui/material/Checkbox';
import StatusButton from './components/StatusButton/StatusButton';
// videos
import setupRouter from 'assets/video/setup-router.mp4';
import networkCross from 'assets/video/network-cross.mp4';
// icons
import {Article as ArticleIcon} from '@mui/icons-material';
function SidebarTemplate() {
    const context = useContext(Context);

    const quizzesSummary = (
        <div className="quizzes--summary" style={{
            alignItems: 'center',
            color: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            gap: '8px'
        }}>
            <ArticleIcon style={{fill: 'rgba(0, 0, 0, 0.75)'}} />
            <span>Quizzes</span>
        </div>
    )

    const quizTemplate = (
        <div className='videos'>
            <ul>
                <li>
                    <StatusButton />
                    <Button
                        text="1. Review of terms"
                        variant="text"
                        fullWidth={true}
                        clickHandler={
                            () => {console.log('very cool')}
                        }
                    />
                </li>
            </ul>
        </div>
    )

    const firstModTemplate = (
        <div className="videos">
            <ul>
                <li>
                    <Checkbox size="small" />
                    <Button
                        text="1. Setting up the router"
                        variant="text"
                        fullWidth={true}
                        clickHandler={
                            () => {
                                context.moduleDispatch({
                                    type: actions.UPDATE_CURRENT_VIDEO,
                                    payload: {video: setupRouter}
                                })
                            }
                        }
                    />
                </li>
                <li>
                    <Checkbox size="small" />
                    <Button
                        text="2. Straight vs crossover cable"
                        variant="text"
                        fullWidth={true}
                        clickHandler={
                            () => {
                                context.moduleDispatch({
                                    type: actions.UPDATE_CURRENT_VIDEO,
                                    payload: {video: networkCross}
                                })
                            }
                        }
                    />
                </li>
            </ul>
        </div>
    )

    return (
        <div className={Style.Main}>
            <h1 className="heading">
                Course modules
            </h1>
            <Accordion summary="First Module Title" details={firstModTemplate} />
            <Accordion summary="Second Module" disabled={true} />
            <Accordion summary={quizzesSummary} details={quizTemplate} />
        </div>
    )
}

export default SidebarTemplate;