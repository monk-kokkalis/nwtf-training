import Style from './Security.module.scss';
import PasswordInput from 'elements/PasswordInput/PasswordInput';
function Security() {
    return (
        <div className={Style.Main}>
            <div className="password">
                <PasswordInput label="Password" />
            </div>
            <div className="confirm--password">
                <PasswordInput label="Password confirmation" />
            </div>
        </div>
    )
}

export default Security;