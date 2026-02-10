const firstName = prompt('Enter your first name:');
const lastName = prompt('Enter your last name:');
const nickname = prompt('Enter a fun nickname:');

const f = firstName || '';
const l = lastName || '';
const n = nickname || '';

console.log(`Hello! My name is ${f} ${l}, but you can call me ${n}.`);

const fullNameWithSpace = f + ' ' + l;
console.log(`Your full name has ${fullNameWithSpace.length} characters.`);

// Fun fact: random number between 1 and 3 (inclusive), multiplied by 10
const randomNumber = Math.floor(Math.random() * 3) + 1;
const funFactValue = randomNumber * 10;
console.log(`Fun Fact: Did you know ${funFactValue} is a cool number about me?`);

// Prompt for a career goal and log it with its length
const careerGoal = prompt('Enter a career goal (e.g., "I want to be a software developer"):');
const cg = careerGoal || '';
console.log(`One of my goals is ${cg}.`);
console.log(`This goal has ${cg.length} characters.`);

// Prompt for birth year, calculate age and approximate days lived
const birthYearInput = prompt('Enter your birth year (e.g., 1995):');
const birthYear = parseInt(birthYearInput, 10) || 0;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
const daysLived = age * 365;
console.log(`I am ${age} years old, and I’ve lived approximately ${daysLived} days so far.`);

// Display today's date as MM/DD/YYYY and calculate days remaining in the year
const now = new Date();
const mm = String(now.getMonth() + 1).padStart(2, '0');
const dd = String(now.getDate()).padStart(2, '0');
const yyyy = now.getFullYear();
const todayFormatted = `${mm}/${dd}/${yyyy}`;

const todayMidnight = new Date(yyyy, now.getMonth(), now.getDate());
const endOfYear = new Date(yyyy, 11, 31); // Dec 31 of current year at midnight
const msPerDay = 1000 * 60 * 60 * 24;
let daysRemaining = Math.floor((endOfYear - todayMidnight) / msPerDay);
if (daysRemaining < 0) daysRemaining = 0;

console.log(`Today’s date is ${todayFormatted}, and there are ${daysRemaining} days left in the year.`);
