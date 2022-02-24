import React, {useReducer} from 'react';
import state from './reducer/state';
import reducer from './reducer/reducer';

function Provider({children}) {
    const [registerState, registerDispatch] = useReducer(reducer, state);
    return (
        <Context.Provider value={{registerState, registerDispatch}}>
            {children}
        </Context.Provider>
    )
}

export const Context = React.createContext();
export default Provider;