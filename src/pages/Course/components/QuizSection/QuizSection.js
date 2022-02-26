import Style from './QuizSection.module.scss';
// elements
import ProgressWizard from 'elements/ProgressWizard/ProgressWizard';
// data
import quiz from 'data/quiz';
// auxiliary
import createQuestions from './auxiliary/create-questions';
function QuizSection() {
    const content = createQuestions({questions: quiz});
    const doneTemplate = <div>Finished the test!</div>
    return (
        <section className={Style.Main}>
            <div className="content">
                <ProgressWizard {...{content, doneTemplate}} />
            </div>
        </section>
    )
}

export default QuizSection;