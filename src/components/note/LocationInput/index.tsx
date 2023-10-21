import s from "./index.module.scss";

export default function LocationInput() {
  return (
    <div className={s.LocationGroup}>
      <label htmlFor="LocationInput">장소</label>
      <button className={s.LocationButton}>국가 선택*</button>
      <input
        className={s.LocationInput}
        id="LocationInput"
        type="text"
        placeholder="직접 입력"
      />
    </div>
  );
}
