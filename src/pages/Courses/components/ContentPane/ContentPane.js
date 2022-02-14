import {useContext, useMemo} from 'react';
import Style from './ContentPane.module.scss';
import Card from 'elements/Card/Card';
import data from 'data/courses';
// redux
import {Context} from '../../context/Provider';
function ContentPane() {
    const context = useContext(Context);
    const {activeFilters} = context.filterState;
    const courses = useMemo(() => {
        const courses = data.map(el => {
            return el.courses?.map(course => {
                const {name, description} = course;
                return {name, description, category: el.category}
            })
        }).flat();

        if (activeFilters.includes('Paid')) {
            return [];
        }


        if (activeFilters.includes('Exams') || activeFilters.includes('Quizzes') || activeFilters.includes('Free')) {
            return courses;
        }

        if (activeFilters.length > 0) {
            return courses.filter(el => activeFilters.includes(el.category));
        } else {
            return courses;
        }
    }, [activeFilters])

    return (
        <div className={Style.Main}>
            {
                courses.length > 0 ? (
                    <div className="cards--grid">
                        {courses.map(({name}, key) => 
                            <Card
                                title={name}
                                index={key}
                                {...{key}}
                            />
                        )}
                    </div>
                )
                :
                <div className="no--results--notice">No results found</div>
            }
        </div>
    )
}

export default ContentPane;