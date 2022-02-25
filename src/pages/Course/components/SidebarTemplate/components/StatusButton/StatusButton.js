import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import {
    Check as CheckIcon,
    CircleOutlined as CircleOutlinedIcon
} from '@mui/icons-material';

function StatusButton() {
    const [checked, setChecked] = useState(false);
    const checkStyle = {
        fill: '#43A047'
    }
    const iconStyle = {
        fill: 'rgba(0, 0, 0, 0.8)'
    }
    return (
        <IconButton
            onClick={() => setChecked(!checked)}
            color="primary">
            {checked ? <CheckIcon style={checkStyle} /> : <CircleOutlinedIcon style={iconStyle} />}
        </IconButton>
    )
}

export default StatusButton;