const years = [];
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

for (let number = currentYear - 70; number <= currentYear; number++) {
    years.push({label: number, value: number})
}

export default years;