import Style from './PersonalDetails.module.scss';
import TextField from 'elements/TextField/TextField';
import Select from 'elements/Select/Select';
// data
import months from './data/options/months';
import days from './data/options/days';
import years from './data/options/years';
// meterial
import {
    FormControlLabel,
    Radio,
    RadioGroup
} from '@mui/material';

function PersonalDetails() {
    return (
        <div className={Style.Main}>
            <div className="flex name">
                <div className="flex--item">
                    <TextField label="First name" />
                </div>
                <div className="flex--item">
                    <TextField label="Last name" />
                </div>
            </div>
            <div className="birthday">
                <div className="heading">Birthday</div>
                <section className="flex select">
                    <div className="flex--item">
                        <Select
                            onChange={() => console.log('change')}
                            options={months}
                            value={1}
                        />
                    </div>
                    <div className="flex--item">
                        <Select
                            onChange={() => console.log('change')}
                            options={days}
                            value={1}
                        />
                    </div>
                    <div className="flex--item">
                        <Select
                            onChange={() => console.log('change')}
                            options={years}
                            value={2002}
                        />
                    </div>
                </section>
            </div>
            <div className="gender">
                <div className="heading">Gender</div>
                <RadioGroup
                    defaultValue="male"
                    name="gender-radio-buttons-group"
                    row
                    className="gender--radio--group flex">
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