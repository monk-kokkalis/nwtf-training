import MaterialAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {ExpandMore as ExpandMoreIcon} from '@mui/icons-material';
function Accordion({summary, details}) {
    const accordionStyle = { borderBottom: '1px solid rgba(0, 0, 0, 0.25)', boxShadow: 'none'};
    return (
        <MaterialAccordion square={true} sx={accordionStyle}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {summary}
            </AccordionSummary>
            <AccordionDetails>
                {details}
            </AccordionDetails>
        </MaterialAccordion>
    )
}

export default Accordion;