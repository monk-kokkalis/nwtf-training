import {useState} from 'react';
import Style from './LogIn.module.scss';
import logo from 'assets/logo.svg';
import {Link} from "react-router-dom";
// components
import PasswordVisibilityButton from './components/PasswordVisibilityButton/PasswordVisibilityButton';
// elements
import Button from 'elements/Button/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
// router
import {useNavigate} from 'react-router-dom';
function LogIn() {
    // router
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const changeHandler = (event) => {
        console.log(event.target.id)
    }

    const clickHandler = async () => {
        if (!passwordVisible) {
            setError('Username or password is incorrect');
        } else {
            navigate('/courses');
        }
    }

    return (
        <div className={Style.Main}>
            <img src={logo} className="logo" alt="logo" />
            <h1>Sign in</h1>
            <h2>
                <span>Do you have an account?</span>
                <Link to="/register" className='register--link'>Sign up</Link>
            </h2>
            <form>
                <div className="input--block">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={changeHandler}/>
                </div>
                <div className="input--block">
                    <label htmlFor="password">Password</label>
                    <div className="password--group">
                        <input type={passwordVisible ? 'text' : 'password'} id="password" onChange={changeHandler}/>
                        <PasswordVisibilityButton
                            {...{passwordVisible}}
                            toggleVisibility={() => setPasswordVisible(!passwordVisible)}
                        />
                    </div>
                    <span className="error--container">{error}</span>
                </div>
                <section className="forgot--password">
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                    <Link to="/forgot-password" className='forgot--password'>Forgot password?</Link>
                </section>
                <Button
                    clickHandler={clickHandler}
                    loading={false}
                    text="Sign in"
                    style={{
                        borderRadius: '100px',
                        padding: '10px 20px',
                        textTransform: 'capitalize',
                        type: 'submit',
                        width: '100%',
                    }}
                />
            </form>
        </div>
    )
}   

export default LogIn;