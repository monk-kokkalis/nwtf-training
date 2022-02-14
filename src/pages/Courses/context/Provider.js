import React, {useReducer} from 'react';
import state from './reducers/filters/state';
import reducer from './reducers/filters/reducer';

function Provider({children}) {
    const [filterState, filterDispatch] = useReducer(reducer, state);
    return (
        <Context.Provider value={{filterState, filterDispatch}}>
            {children}
        </Context.Provider>
    )
}

export const Context = React.createContext();
export default Provider;