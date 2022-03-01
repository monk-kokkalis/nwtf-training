import Style from './SidebarTemplate.module.scss';
import Accordion from 'elements/Accordion/Accordion';
// components
import QuizTemplate from './components/QuizTemplate/QuizTemplate';
import ModuleTemplate from './components/ModuleTemplate/ModuleTemplate';
import SecondModuleTemplate from './components/SecondModuleTemplate/SecondModuleTemplate';
// icons
import {Article as ArticleIcon} from '@mui/icons-material';
function SidebarTemplate() {

    const quizzesSummary = (
        <div className="quizzes--summary" style={{
            alignItems: 'center',
            color: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            gap: '8px'
        }}>
            <ArticleIcon style={{fill: 'rgba(0, 0, 0, 0.75)'}} />
            <span>Quizzes</span>
        </div>
    )

    return (
        <div className={Style.Main}>
            <h1 className="heading">
                Course modules
            </h1>
            <Accordion summary="First Module Title" details={<ModuleTemplate />} />
            <Accordion summary="Second Module" details={<SecondModuleTemplate />} />
            <Accordion summary={quizzesSummary} details={<QuizTemplate />} />
        </div>
    )
}

export default SidebarTemplate;