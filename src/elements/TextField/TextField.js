import {TextField as MaterialTextField} from '@mui/material';

function TextField(props) {
    return (
        <MaterialTextField
            fullWidth={true}
            label={props.label || 'Label'}
            name={props.name}
            onChange={props.onChange}
            variant={props.variant || "outlined"}
            size={props.size || "small"}
            value={props.value}
        />
    )
}

export default TextField