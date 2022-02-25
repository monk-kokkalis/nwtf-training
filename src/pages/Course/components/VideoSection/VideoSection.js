import {useContext} from 'react';
import Style from './VideoSection.module.scss';
import {Context} from '../../context/Provider';
function VideoSection() {
    const context = useContext(Context);
    return (
        <section className={Style.Main}>
            <video width="100%" height="400px" controls key={context.moduleState.currentVideo}>
                <source src={context.moduleState.currentVideo} type="video/mp4" />
            </video>
        </section>
    )
}

export default VideoSection;