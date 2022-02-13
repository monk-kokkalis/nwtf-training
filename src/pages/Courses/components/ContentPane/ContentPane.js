import Style from './ContentPane.module.scss';
import Card from 'elements/Card/Card';
import data from 'data/courses';
function ContentPane() {
    const courses = data.map(el => {
        return el.courses?.map(course => {
            const {name, description} = course;
            return {name,description}
        })
    }).flat();
    
    return (
        <div className={Style.Main}>
            <div className="cards--grid">
                {courses.map(({name}, key) => 
                    <Card
                        title={name}
                        index={key}
                        {...{key}}
                    />
                )}
            </div>
        </div>
    )
}

export default ContentPane;