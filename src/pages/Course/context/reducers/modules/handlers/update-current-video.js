function updateCurrentVideo({state, action}) {
    return {
        ...state,
        currentVideo: action.payload.video
    }
}

export default updateCurrentVideo;