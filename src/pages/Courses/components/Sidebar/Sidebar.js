import Style from './Sidebar.module.scss';
import FilterBlock from './components/FilterBlock/FilterBlock';
import filters from 'data/courses';
// elements
// icons
import {
    ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
// elements
import IconButton from '@mui/material/IconButton';
// redux
function Sidebar({visible, clickCallback}) {
    return (
        <div className={Style.Main} data-visible={visible}>
            <IconButton
                color="primary"
                className="hide--filters"
                aria-label="hide"
                onClick={() => clickCallback()}>
                <ArrowBackIcon />
            </IconButton>
            <section className="filters">
                <FilterBlock heading="Category" items={filters.map(el => el.category)} />
                <FilterBlock heading="Evaluation" items={['Exams', 'Quizzes']} />
                <FilterBlock heading="Price" items={['Free', 'Paid']} />
            </section>
        </div>
    )
}

export default Sidebar;