function useAnswer({answers, index}) {
    const answer = answers.find(answer => answer.index === index);
    return answer?.answer;
}

export default useAnswer;