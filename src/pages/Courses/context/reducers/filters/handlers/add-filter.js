function addFilter({state, action}) {
    const {filter} = action.payload;
    return {
        ...state,
        activeFilters: state.activeFilters.concat(filter)
    }
}

export default addFilter;