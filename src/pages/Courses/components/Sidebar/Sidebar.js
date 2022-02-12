import Style from './Sidebar.module.scss';
import FilterBlock from './components/FilterBlock/FilterBlock';
import filters from 'data/courses';
function Sidebar() {
    return (
        <div className={Style.Main}>
            <section className="filters">
                <FilterBlock heading="Category" items={filters.map(el => el.category)} />
                <FilterBlock heading="Evaluation" items={['Exams', 'Quizzes']} />
                <FilterBlock heading="Price" items={['Free', 'Paid']} />
            </section>
        </div>
    )
}

export default Sidebar;