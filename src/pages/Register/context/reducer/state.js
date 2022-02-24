const state = {
    firstName: {value: '', valid: true, error: ''},
    lastName: {value: '', valid: true, error: ''},
    birthdayMonth: {value: 1, valid: true, error: ''},
    birthdayDay: {value: 1, valid: true, error: ''},
    birthdayYear: {value: new Date().getFullYear(), valid: true, error: ''},
    gender: {value: 'male', valid: true, error: ''}
}
export default state;