import Style from './Address.module.scss';
import TextField from 'elements/TextField/TextField';
function Address() {
    return (
        <div className={Style.Main}>
            <div className="street">
                <TextField label="Street address" />
            </div>
            <div className="city flex">
                <div className="flex--item">
                    <TextField label="City" />
                </div>
                <div className="flex--item">
                <TextField label="State" />
                </div>
            </div>
            <div className="zip--code">
                <TextField label="Zip code" />
            </div>
        </div>
    )
}

export default Address;