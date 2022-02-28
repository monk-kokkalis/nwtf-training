function useQuizResult({quizState}) {
    const {quiz, answers} = quizState;
    const answered = `${answers.length}/${quiz.length}`;
    const passingScore = `${quiz.length * 0.8} (80%)`;
    const score = resolveScore({quiz, answers});
    
    return {
        answered,
        passingScore,
        score: score.text,
        percentage: score.percentage,
        color: score.percentage >= 80 ? 'green' : 'red',
        subtitle: score.percentage >= 80 ? 'Passed' : 'Failed'
    }
}

function resolveScore({quiz, answers}) {
    const mapped = quiz.map((item, index) => {
        const studentAnswer = answers.find(el => el.index === index);
        return item.answer === studentAnswer?.answer ? 'correct' : 'wrong';
    });
    const correctCount = mapped.filter(el => el === 'correct').length;
    const percentage = (correctCount / quiz.length) * 100
    return {
        text: `${correctCount}/${quiz.length} (${percentage}%)`,
        percentage: percentage
    };
}

export default useQuizResult;