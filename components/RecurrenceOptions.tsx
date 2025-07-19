"use client";
import { useRecurrenceStore } from '../store/useRecurrenceStore';

export default function RecurrenceOptions() {
  const { frequency, interval, setState } = useRecurrenceStore();

  return (
    <div className="space-y-4">
      <label className="block font-medium">Frequency</label>
      <select
        className="w-full border p-2 rounded"
        value={frequency}
        onChange={(e) => setState({ frequency: e.target.value as any })}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      <label className="block font-medium">Every X {frequency}(s)</label>
      <input
        type="number"
        min="1"
        className="w-full border p-2 rounded"
        value={interval}
        onChange={(e) => setState({ interval: parseInt(e.target.value) })}
      />
    </div>
  );
}
