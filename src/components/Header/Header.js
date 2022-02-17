import Style from './Header.module.scss';
// icons
import {
    ShoppingCart as ShoppingCartIcon
} from '@mui/icons-material';
// elements
import Button from 'elements/Button/Button';
import IconButton from '@mui/material/IconButton';
// router
import {useNavigate} from 'react-router-dom';
function Header() {
    const navigate = useNavigate();
    return (
        <header className={Style.Main}>
            <span className="organization--name">NWTF</span>
            <div className="links">
                <IconButton
                    color="primary"
                    aria-label="shopping" sx={{marginRight: '10px'}}>
                    <ShoppingCartIcon />
                </IconButton>
                <Button
                    variant="outlined"
                    text="Log in"
                    clickHandler={() => navigate('/login')} 
                />
                <Button text="Sign up" />
            </div>
        </header>
    )
}

export default Header;