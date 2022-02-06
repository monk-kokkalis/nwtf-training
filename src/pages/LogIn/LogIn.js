import {useState} from 'react';
import Style from './LogIn.module.scss';
import logo from 'assets/logo.svg';
import {Link} from "react-router-dom";
function LogIn() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const changeHandler = (event) => {
        console.log(event.target.id)
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log('sub!')
    }

    return (
        <div className={Style.Main}>
            <img src={logo} className="logo" alt="logo" />
            <h1>Sign in</h1>
            <h2>
                <span>Do you have an account?</span>
                <Link to="/register" className='register--link'>Sign up</Link>
            </h2>
            <form onSubmit={submitHandler}>
                <div className="input--block">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={changeHandler}/>
                </div>
                <div className="input--block">
                    <label htmlFor="password">Password</label>
                    <div className="password--group">
                        <input type={passwordVisible ? 'text' : 'password'} id="password" onChange={changeHandler}/>
                    </div>
                    {/* <span className="error--container">{error}</span> */}
                </div>
            </form>
        </div>
    )
}   

export default LogIn;