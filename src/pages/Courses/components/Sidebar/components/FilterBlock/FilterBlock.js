import {useContext} from 'react';
import Style from './FilterBlock.module.scss';
// elements
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
// redux
import {Context} from '../../../../context/Provider';
import filterActions from '../../../../context/reducers/filters/actions';
function FilterBlock(props) {
    const context = useContext(Context);
    const {filterDispatch} = context;
    const {heading, items} = props;
    
    
    return (
        <div className={Style.Main}>
            <div className="heading">{heading}</div>
            <section className="checkboxes">
                {items.map((item, index) => 
                    <FormControlLabel
                        key={index}
                        sx={{height: '35px'}}
                        control={<Checkbox onChange={(event) => {
                            if (event.target.checked) {
                                filterDispatch({
                                    type: filterActions.ADD_FILTER,
                                    payload: {filter: item}
                                })
                            } else {
                                filterDispatch({
                                    type: filterActions.REMOVE_FILTER,
                                    payload: {filter: item}
                                })
                            }
                        }} />}
                        label={item}
                    />
                )}
            </section>
        </div>
    )
}

export default FilterBlock;