import {useContext} from 'react';
import Style from './MultipleChoice.module.scss';
import {
    FormControlLabel,
    Radio,
    RadioGroup,
} from '@mui/material';
// context
import actions from '../../context/actions';
import {Context} from '../../context/Provider';
function MultipleChoice({questionItem, index}) {
    const context = useContext(Context);
    const {quizDispatch} = context;
    const {options, question} = questionItem;

    const onChange = (event) => {
        const {value} = event.target;
        quizDispatch({
            type: actions.UPDATE_ANSWER,
            payload: {index, answerValue: value}
        })
    }

    return (
        <div className={Style.Main}>
            <p>{question}</p>
            <section className="questions">
                <RadioGroup
                    {...{onChange}}
                    name={`question-${index}`}
                    className="radio--group flex">
                    {options.map(({label, value}) => (
                        <FormControlLabel
                            key={`${index}-${value}`}
                            value={value}
                            control={<Radio />}
                            label={`${value.toUpperCase()}. ${label}`}
                            className='flex--item'
                            labelPlacement='end'
                        />
                    ))}
                </RadioGroup>
            </section>
        </div>
    )
}

export default MultipleChoice;