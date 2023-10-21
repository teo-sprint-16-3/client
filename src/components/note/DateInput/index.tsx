import s from "./index.module.scss";

export default function DateInput() {
  return (
    <div className={s.dateGroup}>
      <label htmlFor="dateInput">날짜*</label>
      <div className={s.calendarGroup}>
        <input className={s.dateInput} type="date" id="dateInput" />
        <input className={s.dateInput} type="date" id="dateInput" />
      </div>
    </div>
  );
}
