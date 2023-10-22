import s from "./index.module.scss";

interface InputProps {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export default function Input({
  id,
  onChange,
  value,
  placeholder,
}: InputProps) {
  return (
    <input
      className={s.input}
      id={id}
      type="text"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}
