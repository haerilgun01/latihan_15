import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import id from "date-fns/locale/id";

const StyledDatePicker = styled(DatePicker)`
  font-family: "Lexend", sans-serif;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  margin: 0.5rem 0;
  background-color: #333;
  color: white;
  border: 1px solid #666;
`;

const DateInput = ({ date, setDate }) => {
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  registerLocale("id", id);
  setDefaultLocale("id");

  return (
    <div>
      <StyledDatePicker
        id="date"
        selected={date}
        onChange={handleDateChange}
        dateFormat="dd MMMM yyyy"
        locale="id"
        autoComplete="off"
      />
    </div>
  );
};

export default DateInput;
