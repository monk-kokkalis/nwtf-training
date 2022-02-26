import constants from 'auxiliary/constants';
import MultipleChoice from '../components/MultipleChoice/MultipleChoice';
function createQuestions({questions}) {
    const {MULTIPLE_CHOICE} = constants;
    
    const result = questions.map((questionItem, index) => {
        switch(questionItem.type) {
            case MULTIPLE_CHOICE:
                return <MultipleChoice {...{questionItem, index}} />
            default:
                return null;
        }
    })

    return result;
}

export default createQuestions;