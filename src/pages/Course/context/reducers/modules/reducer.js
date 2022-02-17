import actions from './actions';
import actionHandlers from './handlers/index';

function reducer(state, action) {
    switch(action.type) {
        case actions.HIDE_SIDEBAR:
            return actionHandlers.hideSidebar({state});
        case actions.SHOW_SIDEBAR:
            return actionHandlers.showSidebar({state});
        case actions.UPDATE_CURRENT_VIDEO:
            return actionHandlers.updateCurrentVideo({state, action})
        default:
            throw new Error(`${action.type} is not supported by the reducer`);
    }
}

export default reducer;