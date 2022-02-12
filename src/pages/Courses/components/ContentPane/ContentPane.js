import Style from './ContentPane.module.scss';
import Card from 'elements/Card/Card';
function ContentPane() {
    return (
        <div className={Style.Main}>
            <div className="cards--grid">
                <Card />
            </div>
        </div>
    )
}

export default ContentPane;