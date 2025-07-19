import React, { useState } from 'react';

const RecurringDatePicker: React.FC = () => {
  const [recurrenceType, setRecurrenceType] = useState('daily');
  const [startDate, setStartDate] = useState('');

  return (
    <div>
      <h1>Recurring Date Picker</h1>

      <div>
        <label htmlFor="recurrence-type">Recurrence Type</label>
        <select
          id="recurrence-type"
          value={recurrenceType}
          onChange={(e) => setRecurrenceType(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div>
        <label htmlFor="start-date">Start Date</label>
        <input
          id="start-date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default RecurringDatePicker;
