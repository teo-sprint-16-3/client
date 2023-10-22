import s from "./index.module.scss";

interface SubmitButtonProps {
  disabled: boolean;
}

export default function SubmitButton({ disabled }: SubmitButtonProps) {
  console.log("버튼 값", disabled);
  return (
    <div className={s.buttonContainer}>
      <button type="submit" className={s.submitButton} disabled={disabled}>
        쓰기 완료
      </button>
    </div>
  );
}
