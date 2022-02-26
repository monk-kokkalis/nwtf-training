import Style from './QuizSection.module.scss';
// elements
import ProgressWizard from 'elements/ProgressWizard/ProgressWizard';
// data
import quiz from 'data/quiz';
// auxiliary
import createQuestions from './auxiliary/create-questions';
function QuizSection() {
    return (
        <section className={Style.Main}>
            <div className="content">
                <ProgressWizard content={createQuestions({questions: quiz})} />
            </div>
        </section>
    )
}

export default QuizSection;