import constants from 'auxiliary/constants';
const {MULTIPLE_CHOICE} = constants;

const quiz = [
    {
        type: MULTIPLE_CHOICE,
        question: "A  device that converts data from a digital format into a format suitable for an analog such as telephone or radio.",
        options: [
            {label: 'Modem', value: 'a'},
            {label: 'Router', value: 'b'},
            {label: 'Switch', value: 'c'},
            {label: 'Firewall',value: 'd'}
        ],
        answer: 'a'
    },
    {
        type: MULTIPLE_CHOICE,
        question: "A software system that is designed to carry out web searches.",
        options: [
            {label: 'Web crawler', value: 'a'},
            {label: 'Search engine', value: 'b'},
            {label: 'Device driver', value: 'c'},
            {label: 'Web searcher', value: 'd'}
        ],
        answer: 'b'
    },
    {
        type: MULTIPLE_CHOICE,
        question: "A system for computers and services connected to the Internet that resolves domain names to IP addresses.",
        options: [
            {label: 'DNS', value: 'a'},
            {label: 'Internet protocol', value: 'b'},
            {label: 'Web server', value: 'c'},
            {label: 'SSL certificate', value: 'd'}
        ],
        answer: 'a'
    }
]

export default quiz;