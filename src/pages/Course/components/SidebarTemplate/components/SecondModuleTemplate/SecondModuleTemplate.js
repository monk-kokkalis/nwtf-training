import {useContext} from 'react';
import Button from 'elements/Button/Button';
import Checkbox from '@mui/material/Checkbox';
// videos
import firewall from 'assets/video/second-module/firewall.mp4';
import proxyServer from 'assets/video/second-module/proxy-server.mp4';
import server from 'assets/video/second-module/server.mp4';
// context
import {Context} from '../../../../context/Provider';
import actions from '../../../../context/reducers/modules/actions';
// router
import {useNavigate} from 'react-router-dom';
function SecondModuleTemplate() {
    const context = useContext(Context);
    const navigate = useNavigate();
    return (
        <div className="videos">
            <ul>
                <li>
                    <Checkbox size="small" />
                    <Button
                        text="1. What is a firewall?"
                        variant="text"
                        fullWidth={true}
                        clickHandler={
                            () => {
                                navigate('/course/video')
                                context.moduleDispatch({
                                    type: actions.UPDATE_CURRENT_VIDEO,
                                    payload: {video: firewall}
                                })
                            }
                        }
                    />
                </li>
                <li>
                    <Checkbox size="small" />
                    <Button
                        text="2. Proxy server"
                        variant="text"
                        fullWidth={true}
                        clickHandler={
                            () => {
                                navigate('/course/video')
                                context.moduleDispatch({
                                    type: actions.UPDATE_CURRENT_VIDEO,
                                    payload: {video: proxyServer}
                                })
                            }
                        }
                    />
                </li>
                <li>
                    <Checkbox size="small" />
                    <Button
                        text="3. Server"
                        variant="text"
                        fullWidth={true}
                        clickHandler={
                            () => {
                                navigate('/course/video')
                                context.moduleDispatch({
                                    type: actions.UPDATE_CURRENT_VIDEO,
                                    payload: {video: server}
                                })
                            }
                        }
                    />
                </li>
            </ul>
        </div>
    )
}

export default SecondModuleTemplate;