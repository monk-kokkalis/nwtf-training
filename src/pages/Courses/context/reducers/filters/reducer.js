import actions from './actions';
import actionHandlers from './handlers/index';

function reducer(state, action) {
    switch(action.type) {
        case actions.ADD_FILTER:
            return actionHandlers.addFilter({state, action});
        case actions.HIDE_FILTERS_SIDEBAR:
            return actionHandlers.hideFiltersSidebar({state});
        case actions.REMOVE_FILTER:
            return actionHandlers.removeFilter({state, action});
        case actions.SHOW_FILTERS_SIDEBAR:
            return actionHandlers.showFiltersSidebar({state});
        default:
            throw new Error(`${action.type} is not supported by the reducer`);
    }
}

export default reducer;