import {
  addDays,
  addWeeks,
  addMonths,
  addYears,
  isBefore,
  isEqual,
  getDay,
  startOfMonth,
  getDate,
} from "date-fns";

interface RecurrenceOptions {
  startDate: string | null;
  endDate: string | null;
  frequency: "daily" | "weekly" | "monthly" | "yearly";
  interval: number;
  weekdays?: string[];
  nthWeek?: number;
  nthDay?: string;
}

export function generateRecurringDates({
  startDate,
  endDate,
  frequency,
  interval,
  weekdays = [],
  nthWeek = 1,
  nthDay = "Monday",
}: RecurrenceOptions): Date[] {
  if (!startDate) return [];

  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;
  const results: Date[] = [];

  let current = new Date(start);

  const MAX_LIMIT = 1000;

  while (!end || isBefore(current, end) || isEqual(current, end)) {
    if (frequency === "daily") {
      results.push(new Date(current));
      current = addDays(current, interval);
    }

    else if (frequency === "weekly") {
      if (weekdays.length === 0) {
        results.push(new Date(current));
      } else {
        // generate all weekdays for current week
        const weekStart = new Date(current);
        for (let i = 0; i < 7; i++) {
          const day = addDays(weekStart, i);
          const dayName = day.toLocaleDateString("en-US", {
            weekday: "long",
          });
          if (weekdays.includes(dayName)) {
            if (!end || isBefore(day, end) || isEqual(day, end)) {
              results.push(day);
            }
          }
        }
      }
      current = addWeeks(current, interval);
    }

    else if (frequency === "monthly") {
      const nthDayNum = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(nthDay);
      const firstOfMonth = startOfMonth(current);
      let count = 0;

      for (let i = 0; i < 31; i++) {
        const day = addDays(firstOfMonth, i);
        if (getDay(day) === nthDayNum) {
          count++;
          if (count === nthWeek) {
            if (!end || isBefore(day, end) || isEqual(day, end)) {
              results.push(day);
            }
            break;
          }
        }
      }

      current = addMonths(current, interval);
    }

    else if (frequency === "yearly") {
      results.push(new Date(current));
      current = addYears(current, interval);
    }

    if (results.length > MAX_LIMIT) break;
  }

  return results.sort((a, b) => a.getTime() - b.getTime());
}
