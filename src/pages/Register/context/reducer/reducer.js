function reducer(state, action) {
    return {...state, [action.type]: {...state[action.type], ...action.payload}}
}

export default reducer;