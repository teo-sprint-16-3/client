import s from "./index.module.scss";

export default function PictureInput() {
  return (
    <div className={s.pictureGroup}>
      <label htmlFor="pictureInput">사진</label>
      <input className={s.pictureInput} type="file" id="pictureInput" />
    </div>
  );
}
