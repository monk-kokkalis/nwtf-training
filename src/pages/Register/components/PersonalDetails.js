import Style from './PersonalDetails.module.scss';
import TextField from 'elements/TextField/TextField';
import Select from 'elements/Select/Select';
// data
import months from './data/options/months';
import days from './data/options/days';
import years from './data/options/years';

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
        </div>
    )
}

export default PersonalDetails;