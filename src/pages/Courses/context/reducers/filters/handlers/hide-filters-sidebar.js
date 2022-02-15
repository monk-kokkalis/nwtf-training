function hideFiltersSidebar({state}) {
    return {
        ...state,
        sidebarVisible: false
    }
}

export default hideFiltersSidebar;