import s from "./Trip.module.scss";

interface Props {
  flagImage: string;
  year: string;
  title: string;
}

export function Trip({ flagImage, year, title }: Props) {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <img className={s.flag} src={flagImage} alt="국기 이미지"></img>
        <span className={s.year}>{year}</span>
      </div>
      <div className={s.title}>{title}</div>
    </div>
  );
}
