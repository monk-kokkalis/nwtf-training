import Style from './QuizSection.module.scss';
// elements
import ProgressWizard from 'elements/ProgressWizard/ProgressWizard';
// data
import quiz from 'data/quiz';
// auxiliary
import createQuestions from './auxiliary/create-questions';
// components
import DoneTemplate from './components/DoneTemplate/DoneTemplate';
// context
import Provider from './context/Provider';
function QuizSection() {
    const content = createQuestions({questions: quiz});
    return (
        <Provider>
            <section className={Style.Main}>
                <div className="content">
                    <ProgressWizard {...{content, doneTemplate: <DoneTemplate />}} />
                </div>
            </section>
        </Provider>
    )
}

export default QuizSection;