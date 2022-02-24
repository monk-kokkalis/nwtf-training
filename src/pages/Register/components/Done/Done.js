import {useEffect} from 'react';
import Style from './Done.module.scss';
import {
    CheckCircleOutlined as CheckCircleOutlinedIcon
} from '@mui/icons-material';
import EllipsisLoader from 'elements/EllipsisLoader/EllipsisLoader';

function Done() {
    useEffect(() => {
        console.log('use effect');
    }, [])

    return (
        <div className={Style.Main}>
            <CheckCircleOutlinedIcon fontSize="large" />
            <section className="icon">
                <span>Done!</span>
            </section>
            <section className="text">
                <span>Please wait</span>
                <EllipsisLoader />
            </section>
        </div>
    )
}

export default Done;