"use client";
import { useRecurrenceStore } from "../store/useRecurrenceStore";
import { useState } from "react";

export default function DateSelector() {
  const { startDate, endDate, setState } = useRecurrenceStore();
  const [showEndDate, setShowEndDate] = useState(Boolean(endDate));

  return (
    <div className="space-y-4 mt-6">
      <div>
        <label className="block font-medium">Start Date</label>
        <input
          type="date"
          value={startDate || ""}
          className="w-full border p-2 rounded"
          onChange={(e) => setState({ startDate: e.target.value })}
        />
      </div>

      <div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showEndDate}
            onChange={() => {
              setShowEndDate(!showEndDate);
              if (!showEndDate === false) {
                setState({ endDate: null });
              }
            }}
          />
          Set an end date
        </label>

        {showEndDate && (
          <input
            type="date"
            value={endDate || ""}
            className="w-full border p-2 rounded mt-2"
            onChange={(e) => setState({ endDate: e.target.value })}
          />
        )}
      </div>
    </div>
  );
}
