import s from "./index.module.scss";

export default function TextInput() {
  return (
    <div className={s.pictureGroup}>
      {/* <input type="textarea" /> */}
      <textarea
        placeholder="내용을 입력하세요"
        className={s.textInput}
      ></textarea>
    </div>
  );
}
