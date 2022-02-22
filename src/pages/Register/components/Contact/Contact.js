import Style from './Contact.module.scss';
import TextField from 'elements/TextField/TextField';
import MaskedInput from 'elements/MaskedInput/MaskedInput';
function Contact() {
    return (
        <div className={Style.Main}>
            <div className="contact--number">
                <MaskedInput label="Mobile number" />
            </div>
            <div className="email">
                <TextField label="Email" />
            </div>
        </div>
    )
}

export default Contact;