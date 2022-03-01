import {useContext} from 'react';
import Button from 'elements/Button/Button';
import Checkbox from '@mui/material/Checkbox';
// videos
// // first module
import setupRouter from 'assets/video/first-module/setup-router.mp4';
import networkCross from 'assets/video/first-module/network-cross.mp4';
import modemVsRouter from 'assets/video/first-module/modem-vs-router.mp4';
import sslHttps from 'assets/video/first-module/ssl-https.mp4';
import dnsServer from 'assets/video/first-module/dns-server.mp4';

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
                <li>
                    <Checkbox size="small" />
                    <Button
                        text="3. Modem vs Router"
                        variant="text"
                        fullWidth={true}
                        clickHandler={
                            () => {
                                navigate('/course/video')
                                context.moduleDispatch({
                                    type: actions.UPDATE_CURRENT_VIDEO,
                                    payload: {video: modemVsRouter}
                                })
                            }
                        }
                    />
                </li>
                <li>
                    <Checkbox size="small" />
                    <Button
                        text="4. SSL, HTTPS"
                        variant="text"
                        fullWidth={true}
                        clickHandler={
                            () => {
                                navigate('/course/video')
                                context.moduleDispatch({
                                    type: actions.UPDATE_CURRENT_VIDEO,
                                    payload: {video: sslHttps}
                                })
                            }
                        }
                    />
                </li>
                <li>
                    <Checkbox size="small" />
                    <Button
                        text="5. DNS server"
                        variant="text"
                        fullWidth={true}
                        clickHandler={
                            () => {
                                navigate('/course/video')
                                context.moduleDispatch({
                                    type: actions.UPDATE_CURRENT_VIDEO,
                                    payload: {video: dnsServer}
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