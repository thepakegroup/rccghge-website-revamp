import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formattedDateRange = (startDate: Date, endDate: Date) => {
  const formattedStartDate = startDate.toLocaleString(undefined, {
    month: "long",
    day: "numeric",
  });
  const formattedStartTime = startDate.toLocaleString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
  const formattedEndTime = endDate.toLocaleString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
  return `${formattedStartDate}, ${formattedStartTime}-${formattedEndTime}`;
};