"use client";
import { useRecurrenceStore } from "../store/useRecurrenceStore";

export default function CustomPattern() {
  const { nthWeek, nthDay, setState } = useRecurrenceStore();

  const weeks = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
    { label: "Last", value: 5 },
  ];

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="mt-6 space-y-2">
      <label className="block font-medium">Custom Monthly Pattern</label>
      <div className="flex gap-2">
        <select
          value={nthWeek}
          onChange={(e) => setState({ nthWeek: parseInt(e.target.value) })}
          className="border p-2 rounded w-1/2"
        >
          {weeks.map((w) => (
            <option key={w.value} value={w.value}>
              {w.label}
            </option>
          ))}
        </select>

        <select
          value={nthDay}
          onChange={(e) => setState({ nthDay: e.target.value })}
          className="border p-2 rounded w-1/2"
        >
          {weekdays.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
      <p className="text-sm text-gray-500">
        Example: “{weeks.find(w => w.value === nthWeek)?.label} {nthDay} of every month”
      </p>
    </div>
  );
}
