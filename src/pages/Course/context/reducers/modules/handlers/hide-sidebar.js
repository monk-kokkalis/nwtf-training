function hideSidebar({state}) {
    return {
        ...state,
        sidebarVisible: false
    }
}

export default hideSidebar;