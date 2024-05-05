import React, { useState } from "react";

function DateTimeRange({ dateCheck, onDateTimeChange }) {
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    onDateTimeChange(e.target.value, startTime, endDate, endTime);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
    onDateTimeChange(startDate, e.target.value, endDate, endTime);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    onDateTimeChange(startDate, startTime, e.target.value, endTime);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
    onDateTimeChange(startDate, startTime, endDate, e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex gap-2">
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          className="px-3 py-2 border bg-gray-50 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="time"
          value={startTime}
          onChange={handleStartTimeChange}
          className="px-3 py-2 border bg-gray-50 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="flex gap-2">
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          className="px-3 py-2 border bg-gray-50 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="time"
          value={endTime}
          onChange={handleEndTimeChange}
          className="px-3 py-2 border bg-gray-50 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      {dateCheck && (
        <p className="text-red-500 text-sm">
          End date cannot be before start date
        </p>
      )}
    </div>
  );
}

export default DateTimeRange;
