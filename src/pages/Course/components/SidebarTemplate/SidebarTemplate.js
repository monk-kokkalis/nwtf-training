import Button from 'elements/Button/Button';
import Style from './SidebarTemplate.module.scss';
import Accordion from 'elements/Accordion/Accordion';
function SidebarTemplate() {
    const firstModTemplate = (
        <div className="videos">
            <ul>
                <li>
                    <Button
                        text="1. Setting up the router"
                        variant="text"
                        fullWidth={true}
                    />
                </li>
                <li>
                    <Button
                        text="2. Straight vs crossover cable"
                        variant="text"
                        fullWidth={true}
                    />
                </li>
            </ul>
        </div>
    )

    return (
        <div className={Style.Main}>
            <Accordion
                summary="First Module Title"
                details={firstModTemplate}
            />
            <Accordion summary="Second Module" />
        </div>
    )
}

export default SidebarTemplate;