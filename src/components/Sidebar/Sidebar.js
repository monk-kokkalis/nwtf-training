import Style from './Sidebar.module.scss';
// icons
import {
    ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
// elements
import IconButton from '@mui/material/IconButton';
// redux
function Sidebar({visible, closeHandler, template}) {
    return (
        <div className={Style.Main} data-visible={visible}>
            <IconButton
                color="primary"
                className="hide"
                aria-label="hide"
                onClick={closeHandler}>
                <ArrowBackIcon />
            </IconButton>
            {template}
        </div>
    )
}

export default Sidebar;