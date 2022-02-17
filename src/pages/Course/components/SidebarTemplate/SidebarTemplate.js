import {useContext} from 'react';
import {Context} from '../../context/Provider';
import Button from 'elements/Button/Button';
import Style from './SidebarTemplate.module.scss';
import Accordion from 'elements/Accordion/Accordion';
// context
import actions from '../../context/reducers/modules/actions';
// videos
import setupRouter from 'assets/video/setup-router.mp4';
import networkCross from 'assets/video/network-cross.mp4';
function SidebarTemplate() {
    const context = useContext(Context);

    const firstModTemplate = (
        <div className="videos">
            <ul>
                <li>
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
            <Accordion
                summary="First Module Title"
                details={firstModTemplate}
            />
            <Accordion summary="Second Module" disabled={true} />
        </div>
    )
}

export default SidebarTemplate;