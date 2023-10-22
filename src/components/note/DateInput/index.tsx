import s from "./index.module.scss";

export default function DateInput({ onSelectCountry }) {
  const handleSelectDate = () => {
    onSelectCountry();
  };

  return (
    <div className={s.dateGroup}>
      <label htmlFor="dateInput">날짜*</label>
      <div className={s.calendarGroup}>
        <button
          id="dateInput"
          className={s.dateButton}
          onClick={handleSelectDate}
        >
          시작일
        </button>
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
