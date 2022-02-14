import actions from './actions';
import actionHandlers from './handlers/index';

function reducer(state, action) {
    switch(action.type) {
        case actions.ADD_FILTER:
            return actionHandlers.addFilter({state, action});
        case actions.REMOVE_FILTER:
            return actionHandlers.removeFilter({state, action});
        default:
            throw new Error(`${action.type} is not supported by the reducer`);
    }
}

export default reducer;