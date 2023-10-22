import s from "./index.module.scss";

export default function LocationInput({ onSelectCountry }) {
  const handleSelectCountry = () => {
    onSelectCountry();
  };

  return (
    <div className={s.LocationGroup}>
      <label htmlFor="LocationInput">장소</label>
      <button className={s.LocationButton} onClick={handleSelectCountry}>
        국가 선택*
      </button>
      <input
        className={s.LocationInput}
        id="LocationInput"
        type="text"
        placeholder="직접 입력"
      />
    </div>
  );
}
