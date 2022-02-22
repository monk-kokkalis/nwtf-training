import Style from './Security.module.scss';
import PasswordInput from 'elements/PasswordInput/PasswordInput';
function Security() {
    return (
        <div className={Style.Main}>
            <section className="flex">
                <div className="password flex--item">
                    <PasswordInput label="Password" />
                </div>
            </section>
            <section className="flex">
                <div className="confirm--password flex--item">
                    <PasswordInput label="Password confirmation" />
                </div>
            </section>
        </div>
    )
}

export default Security;