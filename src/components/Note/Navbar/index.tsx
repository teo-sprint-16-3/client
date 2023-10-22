import s from "./index.module.scss";

export function Navbar() {
  return (
    <div className={s.container}>
      <span>지도</span>
      <span>마이페이지</span>
    </div>
  );
}
