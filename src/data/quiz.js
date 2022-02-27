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
    },
    {
        type: MULTIPLE_CHOICE,
        question: "The programming language used to create web applications on the internet.",
        options: [
            {label: 'HTML', value: 'a'},
            {label: 'CSS', value: 'b'},
            {label: 'JavaScript', value: 'c'},
            {label: 'Java', value: 'd'}
        ],
        answer: 'c'
    },
    {
        type: MULTIPLE_CHOICE,
        question: "It is a system of rules that define how data is exchanged within or between computers.",
        options: [
            {label: 'HTTP', value: 'a'},
            {label: 'HTML', value: 'b'},
            {label: 'Web semantics', value: 'c'},
            {label: 'Protocol', value: 'd'}
        ],
        answer: 'd'
    },
    {
        type: MULTIPLE_CHOICE,
        question: "It's a protocol for fetching resources such as HTML documents.",
        options: [
            {label: 'SSL', value: 'a'},
            {label: 'HTML', value: 'b'},
            {label: 'HTTP', value: 'c'},
            {label: 'UDP', value: 'd'}
        ],
        answer: 'c'
    },
    {
        type: MULTIPLE_CHOICE,
        question: "What is the secure version of HTTP?",
        options: [
            {label: 'SHTTP', value: 'a'},
            {label: 'HTTPS', value: 'b'},
            {label: 'Secure HTTP', value: 'c'},
            {label: 'SSL', value: 'd'}
        ],
        answer: 'b'
    },
    {
        type: MULTIPLE_CHOICE,
        question: "A server application that acts as an intermediary between a client requesting a resource and the server providing that resource.",
        options: [
            {label: 'Proxy server', value: 'a'},
            {label: 'Web server', value: 'b'},
            {label: 'Firewall', value: 'c'},
            {label: 'Reverse proxy', value: 'd'}
        ],
        answer: 'a'
    },
    {
        type: MULTIPLE_CHOICE,
        question: "A service that protects your internet connection and privacy online.",
        options: [
            {label: 'Antivirus software', value: 'a'},
            {label: 'VPN', value: 'b'},
            {label: 'Firewall', value: 'c'},
            {label: 'Windows defender', value: 'd'}
        ],
        answer: 'b'
    },
    {
        type: MULTIPLE_CHOICE,
        question: "A networking device that forwards data packets between computer networks.",
        options: [
            {label: 'Forwarder', value: 'a'},
            {label: 'PC', value: 'b'},
            {label: 'Switch', value: 'c'},
            {label: 'Router', value: 'd'}
        ],
        answer: 'd'
    }
]
export default quiz;