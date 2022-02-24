import {
    FormControl,
    InputLabel,
    MenuItem,
    Select as MaterialSelect
} from '@mui/material';
function Select(props) {
    return (
        <FormControl fullWidth size="small">
            {props.label ? <InputLabel>{props.label}</InputLabel> : undefined}
            <MaterialSelect
                label={props.label}
                MenuProps={{
                    anchorOrigin:{
                        vertical: 'bottom',
                        horizontal: 'left',
                    },
                    transformOrigin: {
                        vertical: 'center',
                        horizontal: 'left',
                    },
                    PaperProps: {
                        style: {
                            maxHeight: '200px',
                        }
                    }
                }}
                name={props.name}
                onChange={props.onChange}
                value={props.value}>
                {props.options?.map((op, index) => (
                    <MenuItem key={index} value={op.value}>{op.label}</MenuItem>
                ))}                
            </MaterialSelect>
        </FormControl>
    )
}

export default Select;