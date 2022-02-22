import {useState} from 'react';
import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from '@mui/material';
import {
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon
} from '@mui/icons-material';

function PasswordInput(props) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const toggleVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <FormControl variant="outlined" fullWidth={true} size={props.size || "small"}>
            <InputLabel>{props.label || 'Label'}</InputLabel>
            <OutlinedInput
                label={props.label || 'Label'}
                type={passwordVisible ? 'text' : 'password'}

                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={toggleVisibility}
                            edge="end">
                            {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

export default PasswordInput;