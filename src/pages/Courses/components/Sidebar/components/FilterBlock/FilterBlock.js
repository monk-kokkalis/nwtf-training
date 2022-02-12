import Style from './FilterBlock.module.scss';
// elements
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
function FilterBlock(props) {
    const {heading, items} = props;
    
    return (
        <div className={Style.Main}>
            <div className="heading">{heading}</div>
            <section className="checkboxes">
                {items.map((item, index) => <FormControlLabel key={index} sx={{height: '35px'}} control={<Checkbox />} label={item} />)}
            </section>
        </div>
    )
}

export default FilterBlock;