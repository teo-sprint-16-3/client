import s from "./index.module.scss";

export default function TitleInput() {
  return (
    <div className={s.titleGroup}>
      <label htmlFor="titleInput">제목*</label>
      <input
        className={s.titleInput}
        type="text"
        id="titleInput"
        placeholder="제목을 입력해 주세요."
      />
    </div>
  );
}
