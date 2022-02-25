import Button from 'elements/Button/Button';
import StatusButton from '../StatusButton/StatusButton';
// router
import {useNavigate} from 'react-router-dom';
function QuizTemplate() {
    const navigate = useNavigate();
    return (
        <div className='videos'>
            <ul>
                <li>
                    <StatusButton />
                    <Button
                        text="1. Review of terms"
                        variant="text"
                        fullWidth={true}
                        clickHandler={
                            () => {
                                navigate('/course/quiz');
                            }
                        }
                    />
                </li>
            </ul>
        </div>
    )
}

export default QuizTemplate;