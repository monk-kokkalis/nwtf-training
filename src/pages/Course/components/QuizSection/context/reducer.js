import actions from './actions';
import actionHandlers from './handlers/index';
function reducer(state, action) {
    switch(action.type) {
        case actions.UPDATE_ANSWER:
            return actionHandlers.updateAnswer({state, action});
        default:
            throw new Error(`${action.type} is not supported by the reducer`);
    }
}

export default reducer;