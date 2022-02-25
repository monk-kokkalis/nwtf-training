import {useContext} from 'react';
import Button from 'elements/Button/Button';
import Checkbox from '@mui/material/Checkbox';
// videos
import setupRouter from 'assets/video/setup-router.mp4';
import networkCross from 'assets/video/network-cross.mp4';
// context
import {Context} from '../../../../context/Provider';
import actions from '../../../../context/reducers/modules/actions';
// router
import {useNavigate} from 'react-router-dom';
function ModuleTemplate() {
    const context = useContext(Context);
    const navigate = useNavigate();
    return (
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
                                navigate('/course/video')
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
                                navigate('/course/video')
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
}

export default ModuleTemplate;