// Get the current date
const currentDate = new Date();
// Check if it's Sunday (day 0 in JavaScript)
const isSunday = currentDate.getDay() === 0;

export const onThisDay = { next: { revalidate: 0 } };

export const EXTERNAL_MINISTRY_URLS = {
  Youth: "https://rccghge.youth.kouakoudomagni.com",
  Men: "https://rccghge.men.kouakoudomagni.com",
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("API URL is not defined");
}

export { API_URL };
