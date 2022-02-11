import MaterialButton from '@mui/material/Button';

function Button(props) {
    const clickHandler = () => {
        if (props.clickHandler) {
            props.clickHandler();
        }
    }

    return (
        <MaterialButton
            onClick={clickHandler}
            sx={props.style}
            variant="contained">
            {props.text || 'Submit'}
        </MaterialButton>
    )
}

export default Button;