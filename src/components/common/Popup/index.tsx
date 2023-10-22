import s from "./index.module.scss";

interface PopupProps {
  title?: string;
  subTitle?: string;
}

export default function Popup({
  title = "준비중",
  subTitle = "열심히 준비하고 있어요",
}: PopupProps) {
  return (
    <div className={s.wrapper}>
      <div className={s.titleBox}>
        <h2 className={s.title}>{title}</h2>
        <h3 className={s.subtitle}>{subTitle}</h3>
      </div>
      <button className={s.confirmBtn}>확인</button>
    </div>
  );
}
