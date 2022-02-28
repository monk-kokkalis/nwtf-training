import Style from './CircularDeterminate.module.scss';
import CircularProgress from '@mui/material/CircularProgress';

function CircularDeterminate({value, color, subtitle}) {
    const variant = 'determinate';
    const size = 170;
    const thickness = 1.6;
    return (
        <div className={Style.Main}>
            <div className="foreground circular">
                <CircularProgress {...{variant, size, thickness, value}} sx={{color}} />
            </div>
            <div className="value--description">
                <div className="main">{value}%</div>
                <div className="secondary" style={{color}}>{subtitle}</div>
            </div>
            <div className="background circular">
                <CircularProgress {...{variant, size, thickness}} value={100} />
            </div>
        </div>
    );
}

export default CircularDeterminate;