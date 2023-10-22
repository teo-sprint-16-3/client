import s from "./index.module.scss";

export default function BgmInput() {
  return (
    <div className={s.bgmGroup}>
      <label htmlFor="bgmInput">BGM</label>
      <input className={s.bgmInput} type="text" id="bgmInput" />
    </div>
  );
}
