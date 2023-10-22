import { useState } from "react";
import { DateRange } from "react-date-range";
import dayjs from "dayjs";
import { useRecoilState } from "recoil";
import { noteFormState } from "../../../recoil/post/atom";

import Label from "../common/Label";
import s from "./index.module.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function DateInput({ onSelectDate }) {
  const [formData, setFormData] = useRecoilState(noteFormState);
  const [openCalender, setOpenCalendar] = useState(false);
  const [selectDate, setSelectDate] = useState([
    {
      startDate: null,
      endDate: new Date(""),
      key: "selection",
    },
  ]);

  // const handleOpenCalender = () => {
  //   onSelectDate();
  // };

  const handleOpenCalender = () => {
    setOpenCalendar((prev) => !prev);
  };

  const handleSelectDate = (item) => {
    setSelectDate([item.selection]);
    console.log([item.selection]);
    if ([item.selection][0].startDate !== [item.selection][0].endDate) {
      setOpenCalendar(false);
      setFormData({
        ...formData,
        date: {
          startDate: dayjs([item.selection][0].startDate).format("YYYY.MM.DD"),
          endDate: dayjs([item.selection][0].endDate).format("YYYY.MM.DD"),
        },
      });
    }
  };

  console.log(formData);
  return (
    <div className={s.dateGroup}>
      <Label htmlFor="dateSelect" text="날짜" isRequired={true} />
      <div className={s.calendarGroup}>
        <button
          id="dateInput"
          className={s.dateButton}
          onClick={handleOpenCalender}
        >
          {formData.date.startDate ? formData.date.startDate : "시작일"}
        </button>
        {/* <span className={s.separator}>-</span> */}
        <button id="dateInput" className={s.dateButton}>
          {formData.date.endDate ? formData.date.endDate : "종료일"}
        </button>
        <div className={s.calendar}>
          {openCalender && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => handleSelectDate(item)}
              dateDisplayFormat="MM-dd-yyyy"
              moveRangeOnFirstSelection={false}
              ranges={selectDate}
            />
          )}
        </div>
      </div>
    </div>
  );
}
