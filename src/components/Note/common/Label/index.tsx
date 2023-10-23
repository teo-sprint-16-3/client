import s from "./index.module.scss";

interface LabelProps {
  htmlFor: string;
  text: string;
  isRequired: boolean;
}

export default function Label({ htmlFor, text, isRequired }: LabelProps) {
  return (
    <>
      <label className={s.labelContainer} htmlFor={htmlFor}>
        <span>{text}</span>
        {isRequired && <span className={s.requiredDot}>{" *"}</span>}
      </label>
    </>
  );
}
