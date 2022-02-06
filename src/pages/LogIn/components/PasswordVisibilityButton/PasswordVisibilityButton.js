import {
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon
} from '@mui/icons-material';

function PasswordVisibilityButton({toggleVisibility, passwordVisible}) {
    return (
        <button type="button" className="visibility" onClick={toggleVisibility}>
            {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </button>
    )
}

export default PasswordVisibilityButton;