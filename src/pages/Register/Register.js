import Style from './Register.module.scss';
import {Link} from "react-router-dom";
import logo from 'assets/logo.svg';
// content
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import Address from './components/Address/Address';
import Contact from './components/Contact/Contact';
import Security from './components/Security/Security';
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
                        'Security',
                        'Address',
                        'Contact'
                    ]}
                    content={
                        [
                            <PersonalDetails />,
                            <Security />,
                            <Address />,
                            <Contact />,
                            <div>Done! Please wait</div>
                        ]
                    }
                    minHeight="240px"
                />
            </section>
        </div>
    )
}

export default Register