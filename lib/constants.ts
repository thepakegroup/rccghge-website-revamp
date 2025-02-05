// Get the current date
const currentDate = new Date();
// Check if it's Sunday (day 0 in JavaScript)
const isSunday = currentDate.getDay() === 0;

export const onThisDay = { next: { revalidate: 0 } };

export const EXTERNAL_MINISTRY_URLS = {
  Youth: "https://rccghge-youth-ministry.vercel.app/",
  Men: "https://rccghge-men-frontend.vercel.app",
};
