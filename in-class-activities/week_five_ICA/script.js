// Use const and let and demonstrate multiple data types

const studentName = prompt('Enter your full name:') || 'Student Name'; // string
// Convert numeric input explicitly using Number() and parseInt()
const gradYear = Number(prompt('Graduation year (e.g., 2026):') || 2026); // number via Number()
const gradMonth = parseInt(prompt('Graduation month (1-12):'), 10) || 5; // number via parseInt()
const gradDay = parseInt(prompt('Graduation day (1-31):'), 10) || 15; // number via parseInt()

let confirmation = confirm('Do you confirm your graduation details?'); // boolean

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

// Display results using alert()
// Create graduation Date object from user input and calculate time remaining
const today = new Date();
const gradDateObj = new Date(gradYear, gradMonth - 1, gradDay);

const msPerHour = 1000 * 60 * 60;
const msPerDay = msPerHour * 24;

const msDiff = gradDateObj - today;
const daysUntilGradRaw = msDiff / msPerDay;
const daysUntilGrad = isNaN(daysUntilGradRaw) ? 0 : Math.ceil(daysUntilGradRaw);
const monthsUntilGrad = isNaN(daysUntilGradRaw) ? 0 : Math.floor(daysUntilGradRaw / 30);
const yearsUntilGrad = isNaN(daysUntilGradRaw) ? 0 : Math.floor(daysUntilGradRaw / 365);
const hoursUntilGrad = isNaN(msDiff) ? 0 : Math.ceil(msDiff / msPerHour);

// Use comparisons to provide messages
if (isNaN(msDiff)) {
	alert('Invalid graduation date provided.');
} else if (msDiff <= 0) {
	// Graduation date in the past
	alert(`Congratulations! You graduated on ${graduationDate}.`);
} else {
	// Graduation in the future
	let extraMsg = '';
	if (yearsUntilGrad < 1) {
		extraMsg = "You can do this! You are less than a year away from graduation!";
	}

	const summary = `Student name: ${studentName}\nGraduation date: ${graduationDate}\nConfirmation response: ${confirmation}\n\nTypes:\n  studentName: ${typeof studentName}\n  gradYear: ${typeof gradYear}\n  confirmation: ${typeof confirmation}\n\nTime remaining until graduation:\n  Days: ${daysUntilGrad}\n  Months (approx): ${monthsUntilGrad}\n  Years (approx): ${yearsUntilGrad}\n  Hours: ${hoursUntilGrad}\n\n${extraMsg}`;

	console.log(summary);
}