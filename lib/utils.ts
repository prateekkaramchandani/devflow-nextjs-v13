import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const currentTime = new Date();
  const timeDifference = currentTime.getTime() - createdAt.getTime();
  const secondsDifference = Math.floor(timeDifference / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  let timeAgo: string;

  for (const interval in intervals) {
    const count = Math.floor(secondsDifference / intervals[interval]);
    if (count > 0) {
      timeAgo =
        count === 1 ? `${count} ${interval} ago` : `${count} ${interval}s ago`;
      break;
    }
  }

  if (!timeAgo) {
    timeAgo = "Just now";
  }

  return timeAgo;
};

export const formatNumber = (num: number): string => {
  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  });

  return formatter.format(num);
};
