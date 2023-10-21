import s from "./index.module.scss";

export default function GNB() {
  return (
    <div className={s.gnbWrapper}>
      <div>지도</div>
      <div>노트</div>
      <div>마이 페이지</div>
    </div>
  );
}
