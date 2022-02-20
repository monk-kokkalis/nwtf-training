import Style from './Register.module.scss';
import {Link} from "react-router-dom";
import logo from 'assets/logo.svg';
// content
import PersonalDetails from './components/PersonalDetails';
// elements
import Wizard from 'elements/Wizard/Wizard';
function Register() {
    return (
        <div className={Style.Main}>
            <img src={logo} className="logo" alt="logo" />
            <h1>Register</h1>
            <h2>
                <span>Already have an account?</span>
                <Link to="/login" className='login--link'>Sign in</Link>
            </h2>
            <section className="wizard">
                <Wizard
                    steps={[
                        'Personal details',
                        'Address',
                        'Contact'
                    ]}
                    content={
                        [
                            <PersonalDetails />,
                            <div>fat second</div>,
                            <div>fat third</div>
                        ]
                    }
                />
            </section>
        </div>
    )
}

export default Register