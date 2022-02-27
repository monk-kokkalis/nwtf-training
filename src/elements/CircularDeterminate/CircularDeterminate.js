import Style from './CircularDeterminate.module.scss';
import CircularProgress from '@mui/material/CircularProgress';

function CircularDeterminate({value, color, subtitle}) {
    return (
        <div className={Style.Main}>
            <div className="foreground circular">
                <CircularProgress variant="determinate" size={200} {...{value}} sx={{color}} />
            </div>
            <div className="value--description">
                <div className="main">{value}%</div>
                <div className="secondary" style={{color}}>{subtitle}</div>
            </div>
            <div className="background circular">
                <CircularProgress variant="determinate" size={200} value={100} />
            </div>
        </div>
    );
}

export default CircularDeterminate;