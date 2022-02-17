import Style from './SidebarTemplate.module.scss';
import Accordion from 'elements/Accordion/Accordion';
function SidebarTemplate() {
    return (
        <div className={Style.Main}>
            <Accordion
                summary="First Module First Module"
            />
            <Accordion summary="Second Module" />
        </div>
    )
}

export default SidebarTemplate;