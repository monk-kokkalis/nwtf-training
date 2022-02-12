import MaterialButton from '@mui/material/Button';

function Button(props) {
    const clickHandler = () => {
        if (props.clickHandler) {
            props.clickHandler();
        }
    }

    return (
        <MaterialButton
            color={props.color || 'primary'}
            onClick={clickHandler}
            sx={props.style}
            variant={props.variant || "contained"}>
            {props.text || 'Submit'}
        </MaterialButton>
    )
}

export default Button;