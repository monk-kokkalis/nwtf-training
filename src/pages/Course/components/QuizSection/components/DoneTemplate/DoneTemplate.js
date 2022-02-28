import Style from './DoneTemplate.module.scss';
import {useContext} from 'react';
import {Context} from '../../context/Provider';
// elements
import CircularDeterminate from 'elements/CircularDeterminate/CircularDeterminate';
function DoneTemplate() {
    const context = useContext(Context);
    return (
        <div className={Style.Main}>
            <section className="overview">
                <CircularDeterminate value={80} color="green" subtitle="Passed" />
                <div className="data">
                    <div className="row">
                        <div className="key">Date</div>
                        <div className="value">February 28, 2022</div>
                    </div>
                    <div className="row">
                        <div className="key">Answered</div>
                        <div className="value">10/10</div>
                    </div>
                    <div className="row">
                        <div className="key">Passing score</div>
                        <div className="value">8 (80%)</div>
                    </div>
                    <div className="row">
                        <div className="key">Score</div>
                        <div className="value">8 / 10 (80%)</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DoneTemplate;