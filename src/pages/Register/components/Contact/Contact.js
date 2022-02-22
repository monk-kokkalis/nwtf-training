import Style from './Contact.module.scss';
import TextField from 'elements/TextField/TextField';
function Contact() {
    return (
        <div className={Style.Main}>
            <div className="email">
                <TextField label="Email" />
            </div>
        </div>
    )
}

export default Contact;