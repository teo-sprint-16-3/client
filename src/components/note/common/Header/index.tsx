import s from "./index.module.scss";

export default function Header() {
  return (
    <div className={s.header}>
      <h2>쓰기</h2>
      <button>X</button>
    </div>
  );
}
