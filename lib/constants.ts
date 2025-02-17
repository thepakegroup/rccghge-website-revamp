// Get the current date
const currentDate = new Date();
// Check if it's Sunday (day 0 in JavaScript)
const isSunday = currentDate.getDay() === 0;

export const onThisDay = { next: { revalidate: 0 } };

export const EXTERNAL_MINISTRY_URLS = {
  Youth: "https://rccghge-youth-ministry.vercel.app/",
  Men: "https://rccghge.men.kouakoudomagni.com",
};

const apiUrl = process?.env?.NEXT_PUBLIC_STAGING_API_URL;

if (!apiUrl) {
  throw new Error("API URL is not defined");
}

export { apiUrl };