import {
    Check as CheckIcon,
    Close as CloseIcon
} from '@mui/icons-material';
function useTableConfig({quizState}) {
    const {quiz, answers} = quizState;
    const headers = createHeaders();
    const rows = createRows({quiz, answers});

    return {
        headers,
        rows
    }
}

function createRows({quiz, answers}) {
    const result = quiz.map((el, index) => {
        const studentAnswer = answers.find(ans => ans.index === index);
        return [
            index + 1,
            el.question,
            studentAnswer ? studentAnswer.answer.toUpperCase() : '-',
            el.answer.toUpperCase(),
            studentAnswer?.answer === el.answer ? <CheckIcon color="success" /> : <CloseIcon color="error" />
        ]
    })

    return result;
}

function createHeaders() {
    return [
        {
            id: 'question-number',
            label: '#',
            style: {
                width: 45,
                padding: 10
            },
            align: 'center'
        },
        {
            id: 'question',
            label: 'Question',
            style: {
                minWidth: 170,
                padding: 10
            },
            align: 'left'
        },
        {
            id: 'your-answer',
            label: 'Your answer',
            style: {
                minWidth: 100,
                padding: 10
            },
            align: 'center'
        },
        {
            id: 'right-answer',
            label: 'Correct answer',
            style: {
                minWidth: 120,
                padding: 10
            },
            align: 'center'
        },
        {
            id: 'result',
            label: 'Result',
            style: {
                minWidth: 65,
                padding: 10
            },
            align: 'center'
        },
    ]
}

export default useTableConfig;