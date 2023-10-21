import s from "./index.module.scss";

export function Header() {
  return (
    <div className={s.container}>
      <span className={s.note}>노트</span>
      <span className={s.filter}>필터</span>
    </div>
  );
}
