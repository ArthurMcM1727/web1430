// Use const and let and demonstrate multiple data types

const studentName = prompt('Enter your name:') || 'Student Name'; // string
const gradYear = parseInt(prompt('Graduation year (e.g., 2026):'), 10) || 2026; // number
const gradMonth = parseInt(prompt('Graduation month (1-12):'), 10) || 5; // number
const gradDay = parseInt(prompt('Graduation day (1-31):'), 10) || 15; // number

let confirmation = confirm('Do you confirm your graduation details? (OK = yes, Cancel = no)'); // boolean

const gradMonthStr = String(gradMonth).padStart(2, '0');
const gradDayStr = String(gradDay).padStart(2, '0');
const graduationDate = `${gradMonthStr}/${gradDayStr}/${gradYear}`; // string (composed)

console.log(`Student name: ${studentName}`);
console.log(`Graduation date: ${graduationDate}`);
console.log(`Confirmation response: ${confirmation}`);

// Show types to demonstrate at least three different data types
console.log(`Type of studentName: ${typeof studentName}`); // string
console.log(`Type of gradYear: ${typeof gradYear}`); // number
console.log(`Type of confirmation: ${typeof confirmation}`); // boolean