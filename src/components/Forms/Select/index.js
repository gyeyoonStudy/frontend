import React, { useState, useRef, useMemo } from "react";
import styled from "styled-components";

import theme from "../../../styles/theme";

import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

const StyledDatePicker = styled(DayPicker)`
  width: 10vw;
  padding: 0.45rem 1.5rem;
  text-align: center;
  border-radius: 0.25rem;
  font-size: 0.7rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background-color: ${theme.colors.white};
  color: ${theme.colors.main_black};
  box-shadow: 0px 3px 3px 1px ${theme.colors.medium_gray};
`;

function DateSelect() {
  const [from, setFrom] = useState(undefined);
  const [to, setTo] = useState(undefined);
  const [date, setDate] = useState(undefined);
  const [month, setmonth] = useState(undefined);

  const modifiers = useMemo(
    () => ({
      selectDay: date,
    }),
    [date]
  );
  const modifiersStyles = {
    selectDay: {
      color: "#967999",
      backgroundColor: "#fff",
    },
    today: {
      color: "#999999",
    },
  };

  const modi = {
    from: {
      color: "#967999",
      backgroundColor: "#fff",
    },
    to: {
      color: "#999999",
    },
  };

  return (
    <div>
      <DayPicker
        month={month}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        numberOfMonths={2}
        selectedDays={[from, { from, to }]}
        onDayClick={(date) => {
          const range = DateUtils.addDayToRange(date, { from, to });
          setFrom(range.from);
          setTo(range.to);
        }}
      />
    </div>
  );
}

export default DateSelect;
