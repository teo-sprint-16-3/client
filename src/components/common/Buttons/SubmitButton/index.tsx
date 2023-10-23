import s from "./index.module.scss";

interface SubmitButtonProps {
  disabled: boolean;
}

export default function SubmitButton({ disabled }: SubmitButtonProps) {
  return (
    <div className={s.buttonContainer}>
      <button type="submit" className={s.submitButton} disabled={disabled}>
        쓰기 완료
      </button>
    </div>
  );
}
