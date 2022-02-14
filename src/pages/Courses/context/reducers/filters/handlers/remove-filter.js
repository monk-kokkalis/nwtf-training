function removeFilter({state, action}) {
    const activeFiltersClone = [...state.activeFilters];
    const {filter} = action.payload;
    const targetIndex = activeFiltersClone.findIndex(el => el === filter);
    activeFiltersClone.splice(targetIndex, 1);
    return {
        ...state,
        activeFilters: activeFiltersClone
    }
}

export default removeFilter;