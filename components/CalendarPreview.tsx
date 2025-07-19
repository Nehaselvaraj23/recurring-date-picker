"use client";
import { useRecurrenceStore } from "../store/useRecurrenceStore";
import { generateRecurringDates } from "../utils/recurrenceLogic";
import { format } from "date-fns";

export default function CalendarPreview() {
  const {
    startDate,
    endDate,
    frequency,
    interval,
    weekdays,
    nthWeek,
    nthDay,
  } = useRecurrenceStore();

  const recurringDates = generateRecurringDates({
    startDate,
    endDate,
    frequency,
    interval,
    weekdays,
    nthWeek,
    nthDay,
  });

  if (!startDate) {
    return <p className="text-sm text-red-500">Please select a start date</p>;
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Upcoming Recurring Dates</h3>
      {recurringDates.length === 0 ? (
        <p className="text-gray-500">No dates to show.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {recurringDates.slice(0, 10).map((date, index) => (
            <div
              key={index}
              className="bg-blue-100 rounded p-2 text-center text-sm"
            >
              {format(date, "eeee, dd MMM yyyy")}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
