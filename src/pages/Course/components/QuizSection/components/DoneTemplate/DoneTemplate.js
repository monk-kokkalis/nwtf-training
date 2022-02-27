import Style from './DoneTemplate.module.scss';
import {useContext} from 'react';
import {Context} from '../../context/Provider';
function DoneTemplate() {
    const context = useContext(Context);
    return (
        <div className={Style.Main}>Done! {console.log(context.quizState.answers)}</div>
    )
}

export default DoneTemplate;