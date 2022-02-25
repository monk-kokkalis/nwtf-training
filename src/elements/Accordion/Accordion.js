import MaterialAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {ExpandMore as ExpandMoreIcon} from '@mui/icons-material';
function Accordion({summary, details, disabled}) {
    const accordionStyle = {
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)', 
        boxShadow: 'none',
        fontSize: '17px',
        fontWeight: 500
    };
    const summaryStyle = {
        padding: '0 20px',
        fontSize: '15px',
        fontWeight: '400'
    }
    const detailsStyle = {
        padding: '0 16px 16px 16px'
    }
    return (
        <MaterialAccordion square={true} sx={accordionStyle} disabled={disabled || false}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={summaryStyle}>
                {summary}
            </AccordionSummary>
            <AccordionDetails sx={detailsStyle}>
                {details}
            </AccordionDetails>
        </MaterialAccordion>
    )
}

export default Accordion;