import s from "./index.module.scss";

export default function Header() {
  return (
    <div className={s.header}>
      <h1>쓰기</h1>
      <button>X</button>
    </div>
  );
}
