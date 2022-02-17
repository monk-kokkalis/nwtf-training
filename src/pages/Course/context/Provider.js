import React, {useReducer} from 'react';
import state from './reducers/modules/state';
import reducer from './reducers/modules/reducer';

function Provider({children}) {
    const [moduleState, moduleDispatch] = useReducer(reducer, state);
    return (
        <Context.Provider value={{moduleState, moduleDispatch}}>
            {children}
        </Context.Provider>
    )
}

export const Context = React.createContext();
export default Provider;