import React, {useReducer} from 'react';
import reducer from './reducer';
import state from './state';
function Provider({children}) {
    const [quizState, quizDispatch] = useReducer(reducer, state);
    return (
        <Context.Provider value={{quizState, quizDispatch}}>
            {children}
        </Context.Provider>
    )
}

export const Context = React.createContext();
export default Provider;