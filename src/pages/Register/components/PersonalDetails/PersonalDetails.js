import {useContext} from 'react';
import Style from './PersonalDetails.module.scss';
import TextField from 'elements/TextField/TextField';
import Select from 'elements/Select/Select';
// data
import months from '../../data/options/months';
import days from '../../data/options/days';
import years from '../../data/options/years';
// meterial
import {
    FormControlLabel,
    Radio,
    RadioGroup
} from '@mui/material';
// context
import {Context} from '../../context/Provider';

function PersonalDetails() {
    const context = useContext(Context);
    const {registerState, registerDispatch} = context;
    const {
        firstName,
        lastName,
        birthdayMonth,
        birthdayDay,
        birthdayYear,
        gender
    } = registerState;

    const onChange = (event) => {
        const {name, value} = event.target;
        registerDispatch({
            type: name,
            payload: {value, valid: true, error: ''}
        })
    }

    return (
        <div className={Style.Main}>
            <div className="flex name">
                <div className="flex--item">
                    <TextField label="First name" name="firstName" value={firstName.value} {...{onChange}} />
                </div>
                <div className="flex--item">
                    <TextField label="Last name" name="lastName" value={lastName.value} {...{onChange}} />
                </div>
            </div>
            <div className="birthday">
                <div className="heading">Birthday</div>
                <section className="flex select">
                    <div className="flex--item">
                        <Select
                            {...{onChange}}
                            name="birthdayMonth"
                            options={months}
                            value={birthdayMonth.value}
                        />
                    </div>
                    <div className="flex--item">
                        <Select
                            {...{onChange}}
                            name="birthdayDay"
                            options={days}
                            value={birthdayDay.value}
                        />
                    </div>
                    <div className="flex--item">
                        <Select
                            {...{onChange}}
                            name="birthdayYear"
                            options={years}
                            value={birthdayYear.value}
                        />
                    </div>
                </section>
            </div>
            <div className="gender">
                <div className="heading">Gender</div>
                <RadioGroup
                    {...{onChange}}
                    name="gender"
                    row
                    className="gender--radio--group flex"
                    value={gender.value}>
                    <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                        className='flex--item'
                        labelPlacement='start' />
                    <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female" 
                        className='flex--item'
                        labelPlacement='start' />
                </RadioGroup>
            </div>
        </div>
    )
}

export default PersonalDetails;