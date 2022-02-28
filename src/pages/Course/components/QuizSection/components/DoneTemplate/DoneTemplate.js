import {useContext} from 'react';
import Style from './DoneTemplate.module.scss';
import {Context} from '../../context/Provider';
// elements
import CircularDeterminate from 'elements/CircularDeterminate/CircularDeterminate';
import Table from 'elements/Table/Table';
// date formatting
import strftime from 'strftime';
// hooks
import useQuizResult from '../../hooks/use-quiz-result';
import useTableConfig from './hooks/use-table-config';

function DoneTemplate() {
    const context = useContext(Context);
    const {quizState} = context;
    const quizResult = useQuizResult({quizState});
    const {
        answered,
        passingScore,
        score,
        percentage,
        color,
        subtitle
    } = quizResult;
    const tableConfig = useTableConfig({quizState});

    return (
        <div className={Style.Main}>
            <section className="overview">
                <div className="circular--container">
                    <CircularDeterminate value={percentage} color={color} subtitle={subtitle} />
                </div>
                <div className="data">
                    <div className="row">
                        <div className="key">Date</div>
                        <div className="value">{strftime('%B %e, %Y at %l:%M %P', new Date())}</div>
                    </div>
                    <div className="row">
                        <div className="key">Answered</div>
                        <div className="value">{answered}</div>
                    </div>
                    <div className="row">
                        <div className="key">Passing score</div>
                        <div className="value">{passingScore}</div>
                    </div>
                    <div className="row">
                        <div className="key">Score</div>
                        <div className="value">{score}</div>
                    </div>
                </div>
            </section>
            <div className="notice">Summary</div>
            <section className="table">
                <Table headers={tableConfig.headers} rows={tableConfig.rows} />
            </section>
        </div>
    )
}

export default DoneTemplate;