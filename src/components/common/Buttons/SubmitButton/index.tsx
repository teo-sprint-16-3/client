import s from "./index.module.scss";

export default function SubmitButton() {
  return (
    <div className={s.buttonContainer}>
      <button className={s.submitButton}>쓰기 완료</button>
    </div>
  );
}
