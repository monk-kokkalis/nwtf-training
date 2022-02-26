import Style from './MultipleChoice.module.scss';
import {
    FormControlLabel,
    Radio,
    RadioGroup,
} from '@mui/material';
function MultipleChoice({questionItem, index}) {
    const {options, question} = questionItem;
    return (
        <div className={Style.Main}>
            <p>{question}</p>
            <section className="questions">
                <RadioGroup
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