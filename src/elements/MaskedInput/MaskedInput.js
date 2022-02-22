import {TextField as MaterialTextField} from '@mui/material';
import InputMask from 'react-input-mask';

function MaskedInput(props) {
    return (
        <InputMask mask="9999 999 9999" value={props.value} onChange={props.onChange} maskChar=" ">
            {(inputProps) => 
                <MaterialTextField
                    {...inputProps}
                    type="tel"
                    fullWidth={true}
                    label={props.label || 'Label'}
                    variant={props.variant || "outlined"}
                    size={props.size || "small"}
            />}
        </InputMask>
    )
}

export default MaskedInput;