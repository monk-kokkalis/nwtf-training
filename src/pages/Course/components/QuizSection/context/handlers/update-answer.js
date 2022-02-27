function updateAnswer({state, action}) {
    const {index, answerValue} = action.payload;
    const answers = [...state.answers];
    const answerIndex = answers.findIndex(el => el.index === index);
    if (answerIndex === -1) {
        answers.push({
            index,
            answer: answerValue
        })
    } else {
        answers[answerIndex].answer = answerValue;
    }
    return {
        ...state,
        answers
    }
}

export default updateAnswer;