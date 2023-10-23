import Label from "../common/Label";
import s from "./index.module.scss";

export default function DateInput({ onSelectDate }) {
  const handleSelectDate = () => {
    onSelectDate();
  };

  return (
    <div className={s.dateGroup}>
      <Label htmlFor="dateSelect" text="날짜" isRequired={true} />
      <div className={s.calendarGroup}>
        <button
          id="dateInput"
          className={s.dateButton}
          onClick={handleSelectDate}
        >
          시작일
        </button>
        {/* <span className={s.separator}>-</span> */}
        <button
          id="dateInput"
          className={s.dateButton}
          onClick={handleSelectDate}
        >
          종료일
        </button>
      </div>
    </div>
  );
}
