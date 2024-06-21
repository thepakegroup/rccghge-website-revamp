// Get the current date
const currentDate = new Date();
// Check if it's Sunday (day 0 in JavaScript)
const isSunday = currentDate.getDay() === 0;

export const onThisDay = { next: { revalidate: 3600 } };