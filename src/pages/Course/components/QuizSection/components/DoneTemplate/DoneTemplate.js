import Style from './DoneTemplate.module.scss';
import {useContext} from 'react';
import {Context} from '../../context/Provider';
// elements
import CircularDeterminate from 'elements/CircularDeterminate/CircularDeterminate';
function DoneTemplate() {
    const context = useContext(Context);
    return (
        <div className={Style.Main}>
            <CircularDeterminate value={80} color="green" subtitle="Passed" />
        </div>
    )
}

export default DoneTemplate;