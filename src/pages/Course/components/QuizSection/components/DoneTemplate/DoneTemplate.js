import {useContext} from 'react';
import {Context} from '../../context/Provider';
function DoneTemplate() {
    const context = useContext(Context);
    return (
        <div>Done! {console.log(context.quizState.answers)}</div>
    )
}

export default DoneTemplate;