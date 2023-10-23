import s from "./index.module.scss";

export function NoteHeader() {
  return (
    <div className={s.container}>
      <div className={s.title}>노트</div>
    </div>
  );
}
