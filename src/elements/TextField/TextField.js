import {TextField as MaterialTextField} from '@mui/material';

function TextField(props) {
    return (
        <MaterialTextField
            fullWidth={true}
            label={props.label || 'Label'}
            variant={props.variant || "outlined"}
            size={props.size || "small"}
        />
    )
}

export default TextField